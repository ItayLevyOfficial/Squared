import { useEffect, useState, useCallback } from 'react'
import { useConnectWallet } from '../launchEvent/useConnectWallet'
import { useContract } from '../launchEvent/utils'
import { erc20abi } from '../launchEvent/abis/erc20abi'
import { ethers } from 'ethers'
import { selectedChain } from '../constants'
import { EthPoolAbi } from './ABIs/EthPoolAbi'
import { PoolAbi } from './ABIs/PoolAbi'

export const formatBigErc20 = (value, decimals) =>
  ethers.utils.formatUnits(value, decimals)

export const usePoolContracts = (selectedToken, abi) => {
  const [signer, ,] = useConnectWallet()
  const poolContract = useContract(
    signer,
    selectedToken.poolContractAddress,
    abi
  )
  return poolContract
}

export const useFetchPoolBalance = (selectedToken, abi) => {
  const [signer, ,] = useConnectWallet()
  const [balance, setBalance] = useState(0)

  const poolContract = usePoolContracts(selectedToken, abi)
  const erc20 = useContract(signer, selectedToken.address, erc20abi)

  const fetchBalance = useCallback(async () => {
    const balance = await erc20.balanceOf(poolContract.address)
    setBalance(parseInt(formatBigErc20(balance, selectedToken.decimals)))
  }, [poolContract])

  useEffect(() => {
    fetchBalance()
  }, [poolContract])

  return balance
}
export const getListOfPoolBalances = () => {
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
  const poolContract = usePoolContracts(selectedToken, abi)

  const fetchBalance = useCallback(async () => {
    const balance = await poolContract.balanceOf(address)
    setBalance(parseInt(formatBigErc20(balance, selectedToken.decimals)))
  }, [address, poolContract])

  useEffect(() => {
    if (address) {
      fetchBalance()
    }
  }, [address, poolContract])
  return balance
}

export const getListOfUserBalances = () => {
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
