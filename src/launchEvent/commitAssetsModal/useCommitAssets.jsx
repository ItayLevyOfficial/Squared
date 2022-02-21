import { BigNumber } from 'ethers'
import { selectedChain } from '../../chains'
import { erc20abi } from '../abis/erc20abi'
import { useContract } from '../utils'
import { useState } from 'react'
import { launchContractAbi } from '../abis/defiRoundAbi'
import { useConnectWallet } from '../useConnectWallet'

export const parseNumberDecimals = ({ amount, decimals }) =>
  BigNumber.from(amount).mul(BigNumber.from('10').pow(BigNumber.from(decimals)))

export const useCommitAssets = () => {
  const [signer] = useConnectWallet()
  const erc20 = useContract(signer, selectedChain.tokens[1].address, erc20abi)
  const [txHash, setTxHash] = useState()
  const launchContract = useContract(
    signer,
    selectedChain.launchData.launchContractAddress,
    launchContractAbi
  )

  const commitAssets = async ({ tokenAmount, selectedTokenIndex }) => {
    const tokenData = selectedChain.tokens[selectedTokenIndex]
    const amount = parseNumberDecimals({
      amount: tokenAmount,
      decimals: tokenData.decimals,
    })
    if (selectedChain.launchData.stage === 1) {
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
        const tx = await launchContract.withdraw({token: tokenData.address, amount: amount}, true)
        setTxHash(tx.hash)
      }
    }
  }

  return [commitAssets, txHash, setTxHash]
}
