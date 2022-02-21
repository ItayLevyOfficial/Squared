import { StakingPool } from '../products/StakingPool'
import { PageWrapper } from '../layouts/PageWrapper'
import { ModalDisplay } from '../products/ModalDisplay'
import { selectedChain } from '../chains'
import { InformationBox, InformationLine } from '../products/Information'
import { ethers } from 'ethers'
import { useEffect, useState, useCallback } from 'react'
import { useConnectWallet } from '../launchEvent/useConnectWallet'
import { usePoolContracts } from '../products/usePoolContracts'

export const formatBigErc20 = (bigUsd) => bigUsd.div(10 ** 6).toNumber()
export const Dashboard = (props) => {
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
      <div className="w-full flex items-center justify-evenly -mt-20">
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
      <div className="flex -mt-20 w-10/12">
        <InformationBox title={'YOUR BALANCE'}>
          <InformationLine heading={'ETH :'}>{ethBalance} </InformationLine>
          <InformationLine heading={'USDC :'}>
            {usdcBalance.toFixed(1)}{' '}
          </InformationLine>
          <InformationLine heading={'SQRD :'}>
            {sqrdBalance.toFixed(1)}{' '}
          </InformationLine>
          <InformationLine heading={'SQRD LP :'}>
            {sqrdLpBalance.toFixed(1)}
          </InformationLine>
        </InformationBox>
        <div className="w-[0.5px] h-42 bg-white" />
        <InformationBox title={'YOUR REWARDS'}>
          <InformationLine heading={'EARNED :'}>0.0</InformationLine>
          <InformationLine heading={'AVAILABLE :'}>0.0</InformationLine>
          <InformationLine
            heading={
              <button className="bg-darkPrimary text-white w-[180px] text-md p-2 text-md rounded-lg opacity-50 mt-6">
                Claim SQRD
              </button>
            }
          />
        </InformationBox>
      </div>
    </PageWrapper>
  )
}
