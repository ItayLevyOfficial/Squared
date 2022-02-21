import { ethers } from 'ethers'
import { useEffect, useState, useCallback } from 'react'
import { useConnectWallet } from '../launchEvent/useConnectWallet'
import { selectedChain } from '../chains'
import { EthPoolAbi } from './ABIs/EthPoolAbi'
import { PoolAbi } from './ABIs/PoolAbi'
import { useContract } from '../launchEvent/utils'
import { provider } from '../launchEvent/useConnectWallet'

export const formatBigUsd = (bigUsd) => bigUsd.div(10 ** 6).toNumber()

export const StakingPool = ({ el, openModal }) => {
  const ethPoolContract = useContract(
    provider,
    selectedChain.ethPoolContractAddress,
    EthPoolAbi
  )
  const usdcPoolContract = useContract(
    provider,
    selectedChain.usdcPoolContractAddress,
    PoolAbi
  )
  const sqrdPoolContract = useContract(
    provider,
    selectedChain.sqrdPoolContractAddress,
    PoolAbi
  )
  const sqrdLpPoolContract = useContract(
    provider,
    selectedChain.sqrdLpPoolContractAddress,
    PoolAbi
  )
  const { name } = el
  const [signer, connectWallet, address] = useConnectWallet()
  const [ethBalance, setEthBalance] = useState(0)
  const [usdcBalance, setUsdcBalance] = useState(0)
  const [sqrdBalance, setSqrdBalance] = useState(0)
  const [sqrdLpBalance, setSqrdLpBalance] = useState(0)

  const fetchBalance = useCallback(async () => {
    const balanceEth = await ethPoolContract.balanceOf(address)
    setEthBalance(ethers.utils.formatEther(balanceEth))

    const balanceUsdc = await usdcPoolContract.balanceOf(address)
    setUsdcBalance(formatBigUsd(balanceUsdc))

    const balanceSqrd = await sqrdPoolContract.balanceOf(address)
    setSqrdBalance(formatBigUsd(balanceSqrd))

    const balanceSqrdLp = await sqrdLpPoolContract.balanceOf(address)
    setSqrdLpBalance(formatBigUsd(balanceSqrdLp))
  }, [
    address,
    ethPoolContract,
    usdcPoolContract,
    sqrdPoolContract,
    sqrdLpPoolContract,
  ])

  useEffect(() => {
    if (
      ethPoolContract &&
      usdcPoolContract &&
      sqrdPoolContract &&
      sqrdLpPoolContract &&
      address
    ) {
      fetchBalance()
    }
  }, [
    address,
    fetchBalance,
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
                ? usdcBalance
                : name === 'SQRD'
                ? sqrdBalance
                : sqrdLpBalance}
            </div>
            <div className="text-sm">7%</div>
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
