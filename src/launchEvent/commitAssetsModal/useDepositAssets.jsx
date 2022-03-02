import { ethers } from 'ethers'
import { useState } from 'react'
import { selectedChain } from '../../chains'
import { EthPoolAbi } from '../../products/ABIs/EthPoolAbi'
import { PoolAbi } from '../../products/ABIs/PoolAbi'
import { launchContractAbi } from '../abis/defiRoundAbi'
import { erc20abi } from '../abis/erc20abi'
import { useConnectWallet } from '../useConnectWallet'
import { useWhitelistProof } from './useWhitelistProof'
import { BigNumber } from 'ethers'

export const parseNumberDecimals = ({ amount, decimals }) => {
  const wholeSide = Math.floor(amount)
  const wholeSideFormatted = BigNumber.from(wholeSide).mul(
    BigNumber.from('10').pow(BigNumber.from(decimals))
  )
  const decimalSide = amount % 1
  if (decimalSide === 0) {
    return wholeSideFormatted
  } else {
    const decimalSideWhole = Math.round(decimalSide * 10 ** 6)
    const formattedDecimalSide = BigNumber.from(decimalSideWhole).mul(
      BigNumber.from('10').pow(BigNumber.from(decimals - 6))
    )
    return formattedDecimalSide.add(wholeSideFormatted)
  }
}

export const useDepositAssets = (isLaunch) => {
  const [signer] = useConnectWallet()
  const proof = useWhitelistProof()
  const [txHash, setTxHash] = useState()

  const getDepositContracts = (selectedTokenIndex) => {
    const selectedToken = selectedChain.tokens[selectedTokenIndex]
    const depositContractAddress = isLaunch
      ? selectedChain.launchData.launchContractAddress
      : selectedToken.poolContractAddress
    const depositContractABI = isLaunch
      ? launchContractAbi
      : selectedTokenIndex === 0
      ? EthPoolAbi
      : PoolAbi
    const depositContract = new ethers.Contract(
      depositContractAddress,
      depositContractABI,
      signer
    )
    const erc20Contract = new ethers.Contract(
      selectedToken.address,
      erc20abi,
      signer
    )

    return [depositContract, erc20Contract]
  }

  const getDepositArgs = ({
    tokenAmount,
    selectedToken,
    selectedTokenIndex,
  }) => {
    const amount = parseNumberDecimals({
      amount: tokenAmount,
      decimals: selectedToken.decimals,
    })
    const depositArgs = []

    if (isLaunch) {
      depositArgs.push({ token: selectedToken.address, amount: amount })
      depositArgs.push(proof)
    } else {
      depositArgs.push(amount)
    }
    if (selectedTokenIndex === 0) {
      depositArgs.push({ value: amount })
    } else {
      depositArgs.push({})
    }
    return depositArgs
  }

  const depositAssets = async ({ tokenAmount, selectedTokenIndex }) => {
    const selectedToken = selectedChain.tokens[selectedTokenIndex]
    const [depositContract, erc20] = getDepositContracts(selectedTokenIndex)
    const amount = parseNumberDecimals({
      amount: tokenAmount,
      decimals: selectedToken.decimals,
    })
    const depositArgs = getDepositArgs({
      selectedToken,
      selectedTokenIndex,
      tokenAmount,
    })
    if (selectedTokenIndex !== 0) {
      await erc20.approve(
        selectedChain.launchData.launchContractAddress,
        amount
      )
    }
    setTxHash((await depositContract.deposit(...depositArgs)).hash)
  }

  const cleanTxHash = () => setTxHash(null)

  return [depositAssets, txHash, cleanTxHash]
}
