import { StakingPool } from '../products/StakingPool'
import { PageWrapper } from '../layouts/PageWrapper'
import { ModalDisplay } from '../products/ModalDisplay'
import { selectedChain } from '../chains'
import { InformationBox, InformationLine } from '../products/Information'
import { ethers } from 'ethers'
import { useEffect, useState, useCallback } from 'react'
import { useConnectWallet } from '../launchEvent/useConnectWallet'
import { EthPoolAbi } from '../products/ABIs/EthPoolAbi'
import { PoolAbi } from '../products/ABIs/PoolAbi'
import { useContract } from '../launchEvent/utils'
import { provider } from '../launchEvent/useConnectWallet'

export const formatBigUsd = (bigUsd) => bigUsd.div(10 ** 6).toNumber()

export const Dashboard = (props) => {
  const ethPoolContract = useContract(
    provider,
    selectedChain.tokens[0].ethPoolContractAddress,
    EthPoolAbi
  )
  const usdcPoolContract = useContract(
    provider,
    selectedChain.tokens[1].usdcPoolContractAddress,
    PoolAbi
  )
  const sqrdPoolContract = useContract(
    provider,
    selectedChain.tokens[2].sqrdPoolContractAddress,
    PoolAbi
  )
  const sqrdLpPoolContract = useContract(
    provider,
    selectedChain.tokens[3].sqrdLpPoolContractAddress,
    PoolAbi
  )
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
          <StakingPool el={el} key={index} openModal={() => open(index)} />
        ))}
      </div>
      <div className="flex -mt-20 w-10/12">
        <InformationBox title={'BALANCE'}>
          <InformationLine heading={'ETH :'}>{ethBalance} </InformationLine>
          <InformationLine heading={'USDC :'}>{usdcBalance} </InformationLine>
          <InformationLine heading={'SQRD :'}>{sqrdBalance} </InformationLine>
          <InformationLine heading={'SQRD LP :'}>
            {sqrdLpBalance}
          </InformationLine>
        </InformationBox>
        <div className="w-[0.5px] h-42 bg-white" />
        <InformationBox title={'REWARDS'}>
          <InformationLine heading={'EARNED :'}>
            {props.earnedBalance}
          </InformationLine>
          <InformationLine heading={'AVAILABLE :'}>
            {props.availableBalance}
          </InformationLine>
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
