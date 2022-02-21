import { StakingPool } from './StakingPool'
import { Information } from './Information'
import { PageWrapper } from '../layouts/PageWrapper'
import { ModalDisplay } from './ModalDisplay'
import { selectedChain } from '../chains'
import { useEffect, useState, useCallback } from 'react'
import { usePoolContracts } from './usePoolContracts'
import { ethers } from 'ethers'
import { formatBigErc20 } from '../dashboard/Dashboard'
import { useConnectWallet } from '../launchEvent/useConnectWallet'

export const Products = () => {
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
  const [isModalOpen, setIsOpen] = useState(false)
  const [selectedTokenIndex, setSelectedTokenIndex] = useState(null)

  const [tokenAmount, setTokenAmount] = useState('')

  const open = (id) => {
    setIsOpen(true)
    setSelectedTokenIndex(id)
  }

  const close = () => {
    setIsOpen(false)
    setSelectedTokenIndex(null)
    setTokenAmount('')
  }

  return (
    <PageWrapper>
      <ModalDisplay
        isOpen={isModalOpen}
        close={close}
        selectedTokenIndex={selectedTokenIndex}
        setTokenAmount={setTokenAmount}
        tokenAmount={tokenAmount}
      />

      <div className="w-full flex items-center justify-evenly -mt-32">
        {selectedChain.tokens.map((el, index) => (
          <StakingPool
            el={el}
            key={index}
            openModal={() => open(index)}
            ethBalance={ethBalance}
            usdcBalance={usdcBalance}
            sqrdBalance={sqrdBalance}
            sqrdLpBalance={sqrdLpBalance}
          />
        ))}
      </div>
      <Information />
    </PageWrapper>
  )
}
