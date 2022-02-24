import { useEffect, useState, useCallback } from 'react'
import { useConnectWallet } from '../launchEvent/useConnectWallet'
import { useContract } from '../launchEvent/utils'
import { erc20abi } from '../launchEvent/abis/erc20abi'
import { ethers } from 'ethers'
import { selectedChain } from '../chains'

export const formatBigErc20 = (bigNumber, decimals) =>
  bigNumber.div(10 ** decimals).toNumber()

export const usePoolContracts = (selectedToken, abi) => {
  const [signer, ,] = useConnectWallet()
  const poolContract = useContract(
    signer,
    selectedToken.poolContractAddress,
    abi
  )

  return poolContract
}

export const useFetchContractBalance = (selectedToken, abi) => {
  const [signer, ,] = useConnectWallet()
  const [balance, setBalance] = useState(0)
  const poolContract = usePoolContracts(selectedToken, abi)
  const erc20 = useContract(signer, selectedToken.address, erc20abi)

  const fetchBalance = useCallback(async () => {
    const balance = await erc20.balanceOf(poolContract.address)
    if (selectedToken === selectedChain.tokens[0]) {
      setBalance(parseInt(ethers.utils.formatEther(balance)))
    } else {
      setBalance(parseInt(formatBigErc20(balance, selectedToken.decimals)))
    }
  }, [poolContract])

  useEffect(() => {
    fetchBalance()
  }, [poolContract])

  return balance
}

export const useFetchUserBalance = (chain, abi) => {
  const [, , address] = useConnectWallet()
  const [balance, setBalance] = useState(0)
  const poolContract = usePoolContracts(chain, abi)

  const fetchBalance = useCallback(async () => {
    const balance = await poolContract.balanceOf(address)
    if (chain === selectedChain.tokens[0]) {
      setBalance(parseInt(ethers.utils.formatEther(balance)))
    } else {
      setBalance(parseInt(formatBigErc20(balance, chain.decimals)))
    }
  }, [address, poolContract])

  useEffect(() => {
    if (address) {
      fetchBalance()
    }
  }, [address, poolContract])

  return balance
}
