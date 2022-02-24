import { useEffect, useState, useCallback } from 'react'
import { useConnectWallet } from '../launchEvent/useConnectWallet'
import { useContract } from '../launchEvent/utils'
import { erc20abi } from '../launchEvent/abis/erc20abi'

export const formatBigErc20 = (bigNumber, decimals) =>
  bigNumber.div(10 ** decimals).toNumber()

export const usePoolContracts = (selectedChain, abi) => {
  const [signer, ,] = useConnectWallet()
  const poolContract = useContract(
    signer,
    selectedChain.poolContractAddress,
    abi
  )

  return poolContract
}

export const useFetchContractBalance = (selectedChain, abi) => {
  const [signer, ,] = useConnectWallet()
  const [balance, setBalance] = useState(0)
  const poolContract = usePoolContracts(selectedChain, abi)
  const erc20 = useContract(signer, selectedChain.address, erc20abi)

  const fetchBalance = useCallback(async () => {
    const balance = await erc20.balanceOf(poolContract.address)
    setBalance(parseInt(formatBigErc20(balance, selectedChain.decimals)))
  }, [poolContract])

  useEffect(() => {
    fetchBalance()
  }, [poolContract])

  return balance
}

export const useFetchUserBalance = (selectedChain, abi) => {
  const [, , address] = useConnectWallet()
  const [balance, setBalance] = useState(0)
  const poolContract = usePoolContracts(selectedChain, abi)

  const fetchBalance = useCallback(async () => {
    const balance = await poolContract.balanceOf(address)
    setBalance(parseInt(formatBigErc20(balance, selectedChain.decimals))),
      [address, poolContract]
  })

  useEffect(() => {
    if (address) {
      fetchBalance()
    }
  }, [address, poolContract])

  return balance
}
