import { useState } from 'react'
import { selectedChain } from '../../chains'
import { launchContractAbi } from '../abis/defiRoundAbi'
import { erc20abi } from '../abis/erc20abi'
import { useConnectWallet } from '../useConnectWallet'
import { useContract } from '../utils'
import { parseNumberDecimals } from './useCommitAssets'
import { useWhitelistProof } from './useWhitelistProof'

export const useDepositAssets = () => {
  const [signer] = useConnectWallet()
  const proof = useWhitelistProof()
  const erc20 = useContract(signer, selectedChain.tokens[1].address, erc20abi)
  const [txHash, setTxHash] = useState()
  const launchContract = useContract(
    signer,
    selectedChain.launchData.launchContractAddress,
    launchContractAbi
  )
  const commitAssets = async ({
    tokenAmount,
    selectedTokenIndex,
    isLaunch,
  }) => {
    const tokenData = selectedChain.tokens[selectedTokenIndex]
    const amount = parseNumberDecimals({
      amount: tokenAmount,
      decimals: tokenData.decimals,
    })
    const depositArgs = [
      {
        token: tokenData.address,
        amount: amount,
      },
    ]
    if (isLaunch) {
      depositArgs.push([proof])
    }
    if (selectedTokenIndex) {
      depositArgs.push([{ value: amount }])
    } else {
      depositArgs.push([{}])
    }
    console.log({ depositArgs })
    // TODO: Continue from here
    if (selectedTokenIndex === 0) {
      const tx = await launchContract.deposit(
        {
          token: tokenData.address,
          amount: amount,
        },
        proof,
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
        proof,
        {}
      )
      setTxHash(tx.hash)
    }
  }

  const cleanTxHash = () => setTxHash(null)

  return [commitAssets, txHash, cleanTxHash]
}
