import { useEffect, useState, useCallback } from 'react'
import { usePoolContracts } from './usePoolContracts'
import { ethers } from 'ethers'
import { formatBigErc20 } from '../dashboard/Dashboard'
import { useConnectWallet } from '../launchEvent/useConnectWallet'

export const StakingPool = ({ el, openModal }) => {
  const { name } = el
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
    setEthBalance(ethers.utils.formatEther(balanceEth))

    const balanceUsdc = await usdcPoolContract.balanceOf(address)
    setUsdcBalance(formatBigErc20(balanceUsdc))

    const balanceSqrd = await sqrdPoolContract.balanceOf(address)
    setSqrdBalance(formatBigErc20(balanceSqrd))

    const balanceSqrdLp = await sqrdLpPoolContract.balanceOf(address)
    setSqrdLpBalance(formatBigErc20(balanceSqrdLp))
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

  return (
    <div className="group w-56 h-full text-white border-transparent rounded-xl flex flex-col items-center justify-between p-2 flex-shrink-0">
      <div className="flex justify-start items-center space-x-4 mb-4">
        <div className="text-2xl text-white font-medium">{name}</div>
        <div className="flex space-x-2">
          <div className="flex flex-col items-center justify-center">
            <div className="text-sm ">TVL :</div>
            <div className="text-sm ">APR :</div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="text-sm">
              {name === 'ETH'
                ? ethBalance
                : name === 'USDC'
                ? usdcBalance.toFixed(1)
                : name === 'SQRD'
                ? sqrdBalance.toFixed(1)
                : sqrdLpBalance.toFixed(1)}
            </div>
            <div className="text-sm">0%</div>
          </div>
        </div>
      </div>
      <button
        onClick={() => openModal(name)}
        className="bg-darkPrimary hover:bg-opacity-95 text-white w-[180px] text-md p-2 text-md rounded-lg"
      >
        Manage {name}
      </button>
    </div>
  )
}
