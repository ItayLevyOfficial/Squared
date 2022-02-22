import { useEffect, useState, useCallback } from 'react'
import { ethers } from 'ethers'
import { usePoolContracts } from './usePoolContracts'
import { useConnectWallet } from '../launchEvent/useConnectWallet'
import { formatBigErc20 } from '../dashboard/useFetchUserBalance'
import { useContract } from '../launchEvent/utils'
import { selectedChain } from '../chains'
import { erc20abi } from '../launchEvent/abis/erc20abi'

export const useFetchPoolBalance = () => {
  const [
    ethPoolContract,
    usdcPoolContract,
    sqrdPoolContract,
    sqrdLpPoolContract,
  ] = usePoolContracts()

  //   const [assetsBalance, setAssetsBalance] = useState(0)
  //   const [totalValueLocked, setTotalValueLocked] = useState(0)
  //   const [ethBalance, setEthBalance] = useState(0)
  const [usdcBalance, setUsdcBalance] = useState(0)
  const [sqrdBalance, setSqrdBalance] = useState(0)
  const [sqrdLpBalance, setSqrdLpBalance] = useState(0)

  const [signer, ,] = useConnectWallet()
  const erc20Usdc = useContract(
    signer,
    selectedChain.tokens[1].address,
    erc20abi
  )
  const erc20Sqrd = useContract(
    signer,
    selectedChain.tokens[2].address,
    erc20abi
  )
  const erc20SqrdLp = useContract(
    signer,
    selectedChain.tokens[3].address,
    erc20abi
  )

  const fetchBalance = useCallback(async () => {
    // const balanceEth = await ethPoolContract.balanceOf(address)
    // setEthBalance(parseInt(ethers.utils.formatEther(balanceEth)))

    const balanceUsdc = await erc20Usdc.balanceOf(usdcPoolContract.address)
    setUsdcBalance(parseInt(formatBigErc20(balanceUsdc)))

    const balanceSqrd = await erc20Sqrd.balanceOf(sqrdPoolContract.address)
    setSqrdBalance(parseInt(formatBigErc20(balanceSqrd)))

    const balanceSqrdLp = await erc20SqrdLp.balanceOf(
      sqrdLpPoolContract.address
    )
    setSqrdLpBalance(parseInt(formatBigErc20(balanceSqrdLp)))

    // setAssetsBalance(+ethBalance + +usdcBalance + +sqrdLpBalance)
    // setTotalValueLocked(parseInt(sqrdLpBalance) + parseInt(sqrdBalance))
  }, [
    // ethPoolContract,
    usdcPoolContract,
    sqrdPoolContract,
    sqrdLpPoolContract,
  ])

  useEffect(() => {
    fetchBalance()
  }, [
    // ethPoolContract,
    usdcPoolContract,
    sqrdPoolContract,
    sqrdLpPoolContract,
  ])
  return [
    // parseInt(ethBalance).toFixed(1),
    parseInt(usdcBalance).toFixed(1),
    parseInt(sqrdBalance).toFixed(1),
    parseInt(sqrdLpBalance).toFixed(1),
    // parseInt(assetsBalance).toFixed(1),
    // parseInt(totalValueLocked).toFixed(1),
  ]
}
