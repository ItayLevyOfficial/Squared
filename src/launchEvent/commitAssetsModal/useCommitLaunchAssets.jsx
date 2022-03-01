import { useContext, useState } from 'react'
import { selectedChain } from '../../chains'
import { launchContractAbi } from '../abis/defiRoundAbi'
import { erc20abi } from '../abis/erc20abi'
import { StageContext } from '../LaunchEventScreen'
import { useConnectWallet } from '../useConnectWallet'
import { useContract } from '../utils'
import { parseNumberDecimals } from './useCommitAssets'
import whitelistedUsersHashes from '../hashedWhitelistedUsers.json'

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
      console.log({ whitelistedUsersHashes })
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
