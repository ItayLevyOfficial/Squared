import { useEffect, useState, useCallback } from 'react'
import { ethers } from 'ethers'
import { usePoolContracts } from '../products/usePoolContracts'
import { useConnectWallet } from '../launchEvent/useConnectWallet'

export const formatBigErc20 = (bigUsd) => bigUsd.div(10 ** 6).toNumber()

export const useFetchUserBalance = () => {
  const [
    ethPoolContract,
    usdcPoolContract,
    sqrdPoolContract,
    sqrdLpPoolContract,
  ] = usePoolContracts()
  const [, , address] = useConnectWallet()

  const [ethBalance, setEthBalance] = useState(0)
  const [usdcBalance, setUsdcBalance] = useState(0)
  const [sqrdBalance, setSqrdBalance] = useState(0)
  const [sqrdLpBalance, setSqrdLpBalance] = useState(0)

  const fetchBalance = useCallback(async () => {
    const balanceEth = await ethPoolContract.balanceOf(address)
    setEthBalance(parseInt(ethers.utils.formatEther(balanceEth)))

    const balanceUsdc = await usdcPoolContract.balanceOf(address)
    setUsdcBalance(parseInt(formatBigErc20(balanceUsdc)))

    const balanceSqrd = await sqrdPoolContract.balanceOf(address)
    setSqrdBalance(parseInt(formatBigErc20(balanceSqrd)))

    const balanceSqrdLp = await sqrdLpPoolContract.balanceOf(address)
    setSqrdLpBalance(parseInt(formatBigErc20(balanceSqrdLp)))
  }, [
    address,
    ethPoolContract,
    usdcPoolContract,
    sqrdPoolContract,
    sqrdLpPoolContract,
  ])

  useEffect(() => {
    if (address) {
      fetchBalance()
    }
  }, [
    address,
    ethPoolContract,
    usdcPoolContract,
    sqrdPoolContract,
    sqrdLpPoolContract,
  ])

  return [
    parseInt(ethBalance).toFixed(1),
    parseInt(usdcBalance).toFixed(1),
    parseInt(sqrdBalance).toFixed(1),
    parseInt(sqrdLpBalance).toFixed(1),
  ]
}
