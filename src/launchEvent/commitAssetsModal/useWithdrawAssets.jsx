import { useState } from 'react'
import { selectedChain } from '../../chains/selectedChain'
import { launchContractAbi } from '../abis/defiRoundAbi'
import { useConnectWallet } from '../useConnectWallet'
import { useContract } from '../utils'
import { parseNumberDecimals } from './useDepositAssets'

export const useWithdrawAssets = () => {
  const [signer] = useConnectWallet()
  const [txHash, setTxHash] = useState()
  const launchContract = useContract(
    signer,
    selectedChain.launchData.launchContractAddress,
    launchContractAbi
  )

  const withdrawAssets = async ({ selectedTokenIndex, tokenAmount }) => {
    const tokenData = selectedChain.tokens[selectedTokenIndex]
    const amount = parseNumberDecimals({
      amount: tokenAmount,
      decimals: tokenData.decimals,
    })
    const tx = await launchContract.withdraw(
      { token: tokenData.address, amount: amount },
      selectedTokenIndex === 0
    )
    setTxHash(tx.hash)
  }

  return [withdrawAssets, txHash, setTxHash]
}
