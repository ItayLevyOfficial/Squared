import { ethers } from 'ethers'
import { useCallback, useEffect, useState } from 'react'
import { selectedChain } from '../constants'
import { erc20abi } from '../launchEvent/abis/erc20abi'
import { provider, useConnectWallet } from '../launchEvent/useConnectWallet'
import { useContract } from '../launchEvent/utils'
import { EthPoolAbi } from './ABIs/EthPoolAbi'
import { PoolAbi } from './ABIs/PoolAbi'

export const formatBigErc20 = (value, decimals) =>
  ethers.utils.formatUnits(value, decimals)

export const usePoolContract = (selectedToken, abi) => {
  const [signer, ,] = useConnectWallet()
  const poolContract = useContract(
    signer,
    selectedToken.poolContractAddress,
    abi
  )
  return poolContract
}

export const useFetchPoolBalance = (selectedToken, abi) => {
  const [balance, setBalance] = useState(0)

  const poolContract = usePoolContract(selectedToken, abi)
  const erc20 = useContract(provider, selectedToken?.address, erc20abi)

  const fetchBalance = useCallback(async () => {
    try {
      const newBalance = await erc20?.balanceOf(poolContract?.address)
      setBalance(parseInt(formatBigErc20(newBalance, selectedToken.decimals)))
    } catch (error) {
      console.error({ error })
    }
  }, [erc20, poolContract?.address, selectedToken])

  useEffect(() => {
    if (erc20) {
      fetchBalance()
    }
  }, [erc20, fetchBalance])

  return balance
}
export const usePoolBalances = () => {
  const ethBalance = useFetchPoolBalance(selectedChain.tokens[0], EthPoolAbi)
  const usdcBalance = useFetchPoolBalance(selectedChain.tokens[1], PoolAbi)
  const sqrdBalance = useFetchPoolBalance(selectedChain.tokens[2], PoolAbi)
  const sqrdLpBalance = useFetchPoolBalance(selectedChain.tokens[3], PoolAbi)

  const listOfPoolBalances = [
    ethBalance,
    usdcBalance,
    sqrdBalance,
    sqrdLpBalance,
  ]
  return listOfPoolBalances
}

export const useFetchUserBalance = (selectedToken, abi) => {
  const [, , address] = useConnectWallet()
  const [balance, setBalance] = useState(0)
  const poolContract = usePoolContract(selectedToken, abi)

  const fetchBalance = useCallback(async () => {
    try {
      const balance = await poolContract?.balanceOf(address)
      setBalance(parseInt(formatBigErc20(balance, selectedToken.decimals)))
    } catch (error) {
      console.error({ error })
    }
  }, [address, selectedToken.decimals, poolContract])

  useEffect(() => {
    if (address) {
      fetchBalance()
    }
  }, [address, fetchBalance, poolContract])
  return balance
}

export const useUserBalances = () => {
  const ethBalance = useFetchUserBalance(selectedChain.tokens[0], EthPoolAbi)
  const usdcBalance = useFetchUserBalance(selectedChain.tokens[1], PoolAbi)
  const sqrdBalance = useFetchUserBalance(selectedChain.tokens[2], PoolAbi)
  const sqrdLpBalance = useFetchUserBalance(selectedChain.tokens[3], PoolAbi)

  const listOfUserBalances = [
    ethBalance,
    usdcBalance,
    sqrdBalance,
    sqrdLpBalance,
  ]
  return listOfUserBalances
}
