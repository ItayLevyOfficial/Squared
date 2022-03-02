import { ethers } from 'ethers'
import { useState } from 'react'
import { selectedChain } from '../../chains'
import { EthPoolAbi } from '../../products/ABIs/EthPoolAbi'
import { PoolAbi } from '../../products/ABIs/PoolAbi'
import { launchContractAbi } from '../abis/defiRoundAbi'
import { erc20abi } from '../abis/erc20abi'
import { useConnectWallet } from '../useConnectWallet'
import { parseNumberDecimals } from './useCommitAssets'
import { useWhitelistProof } from './useWhitelistProof'

export const useDepositAssets = (isLaunch) => {
  const [signer] = useConnectWallet()
  const proof = useWhitelistProof()
  const [txHash, setTxHash] = useState()

  const commitAssets = async ({ tokenAmount, selectedTokenIndex }) => {
    const selectedToken = selectedChain.tokens[selectedTokenIndex]
    const depositContractAddress = isLaunch
      ? selectedChain.launchData.launchContractAddress
      : selectedToken.poolContractAddress
    const depositContractABI = isLaunch
      ? launchContractAbi
      : selectedTokenIndex === 0
      ? EthPoolAbi
      : PoolAbi
    const depositContract = new ethers.Contract(depositContractAddress, depositContractABI, signer)
    const erc20 = new ethers.Contract(selectedToken.address, erc20abi, signer)
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
    console.log({ depositArgs })
    if (selectedTokenIndex !== 0) {
      await erc20.approve(
        selectedChain.launchData.launchContractAddress,
        amount
      )
    }
    const tx = await depositContract.deposit(...depositArgs)
    setTxHash(tx.hash)
  }

  const cleanTxHash = () => setTxHash(null)

  return [commitAssets, txHash, cleanTxHash]
}
