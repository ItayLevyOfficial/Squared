import { BigNumber } from 'ethers'
import { useContext, useState } from 'react'
import { launchContractAbi } from '../abis/defiRoundAbi'
import { StageContext } from '../LaunchEventScreen'
import { selectedChain } from '../../chains'
import { erc20abi } from '../abis/erc20abi'
import { useConnectWallet } from '../useConnectWallet'
import { useContract } from '../utils'
import { usePoolContracts } from '../../products/useErc20Functions'

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

export const useCommitPoolAssets = (selectedToken, abi) => {
  const [signer] = useConnectWallet()
  const [txHash, setTxHash] = useState()
  const erc20 = useContract(signer, selectedToken.address, erc20abi)

  const roundContract = usePoolContracts(selectedToken, abi)

  const commitAssets = async ({ tokenAmount, selectedTokenIndex }) => {
    const tokenData = selectedChain.tokens[+selectedTokenIndex]
    const amount = parseNumberDecimals({
      amount: tokenAmount,
      decimals: tokenData.decimals,
    })

    if (selectedTokenIndex === 0) {
      const tx = await roundContract.deposit(amount, { value: amount })
      setTxHash(tx.hash)
    } else {
      await erc20.approve(selectedToken.poolContractAddress, amount)
      const tx = await roundContract.deposit(amount)
      setTxHash(tx.hash)
    }
  }
  return [commitAssets, txHash, setTxHash]
}

export const useCommitLaunchAssets = () => {
  const [signer] = useConnectWallet()
  const erc20 = useContract(signer, selectedChain.tokens[1].address, erc20abi)
  const [txHash, setTxHash] = useState()
  const launchContract = useContract(
    signer,
    selectedChain.launchData.launchContractAddress,
    launchContractAbi
  )
  const launchStage = useContext(StageContext)

  const commitAssets = async ({ tokenAmount, selectedTokenIndex }) => {
    const tokenData = selectedChain.tokens[selectedTokenIndex]
    const amount = parseNumberDecimals({
      amount: tokenAmount,
      decimals: tokenData.decimals,
    })
    if (launchStage === 1) {
      if (selectedTokenIndex === 0) {
        const tx = await launchContract.deposit(
          {
            token: tokenData.address,
            amount: amount,
          },
          [],
          { value: amount }
        )
        setTxHash(tx.hash)
      } else {
        await erc20.approve(
          selectedChain.launchData.launchContractAddress,
          amount
        )
        const tx = await launchContract.deposit(
          {
            token: tokenData.address,
            amount: amount,
          },
          [],
          {}
        )
        setTxHash(tx.hash)
      }
    } else {
      if (selectedTokenIndex === 0) {
        const tx = await launchContract.withdraw(
          { token: tokenData.address, amount: amount },
          true
        )
        setTxHash(tx.hash)
      } else {
        const tx = await launchContract.withdraw(
          { token: tokenData.address, amount: amount },
          false
        )
        setTxHash(tx.hash)
      }
    }
  }

  return [commitAssets, txHash, setTxHash]
}
