import { EthPoolAbi } from '../products/ABIs/EthPoolAbi'
import { PoolAbi } from '../products/ABIs/PoolAbi'
import { useContract } from '../launchEvent/utils'
import { useConnectWallet } from '../launchEvent/useConnectWallet'
import { selectedChain } from '../chains'
import { useEffect, useState, useCallback } from 'react'
import { ethers } from 'ethers'
import { formatBigErc20 } from '../dashboard/Dashboard'

export const usePoolContracts = () => {
  const [signer, ,] = useConnectWallet()
  const ethPoolContract = useContract(
    signer,
    selectedChain.tokens[0].ethPoolContractAddress,
    EthPoolAbi
  )
  const usdcPoolContract = useContract(
    signer,
    selectedChain.tokens[1].usdcPoolContractAddress,
    PoolAbi
  )
  const sqrdPoolContract = useContract(
    signer,
    selectedChain.tokens[2].sqrdPoolContractAddress,
    PoolAbi
  )
  const sqrdLpPoolContract = useContract(
    signer,
    selectedChain.tokens[3].sqrdLpPoolContractAddress,
    PoolAbi
  )

  return [
    ethPoolContract,
    usdcPoolContract,
    sqrdPoolContract,
    sqrdLpPoolContract,
  ]
}

export const useFetchBalance = () => {
  const [
    ethPoolContract,
    usdcPoolContract,
    sqrdPoolContract,
    sqrdLpPoolContract,
  ] = usePoolContracts()
  const [, , address] = useConnectWallet()
  const [assetsBalance, setAssetsBalance] = useState(0)
  const [totalValueLocked, setTotalValueLocked] = useState(0)
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
    setAssetsBalance(+ethBalance + +usdcBalance + +sqrdLpBalance)
    setTotalValueLocked(+assetsBalance + +sqrdBalance)
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
    parseInt(assetsBalance).toFixed(1),
    parseInt(sqrdLpBalance).toFixed(1),
    parseInt(sqrdBalance).toFixed(1),
    parseInt(ethBalance).toFixed(1),
    parseInt(usdcBalance).toFixed(1),
    parseInt(totalValueLocked).toFixed(1),
    parseInt(assetsBalance).toFixed(1),
  ]
}
