import { StakingPool } from '../products/StakingPool'
import { PageWrapper } from '../layouts/PageWrapper'
import { ModalDisplay } from '../products/ModalDisplay'
import { selectedChain } from '../chains'
import {
  InformationBox,
  InformationLine,
  InformationWrapper,
} from '../products/Information'
import { useState } from 'react'
import { useFetchUserBalance } from './useFetchUserBalance'
import { StakingPoolWrapper } from '../products/Products'

export const Dashboard = () => {
  const [ethBalance, usdcBalance, sqrdBalance, sqrdLpBalance] =
    useFetchUserBalance()

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
      <StakingPoolWrapper className={'-mt-32'}>
        {selectedChain.tokens.map((el, index) => (
          <StakingPool el={el} key={index} openModal={() => open(index)} />
        ))}
      </StakingPoolWrapper>
      <InformationWrapper>
        <InformationBox title={'Your Balance'}>
          <InformationLine>{`ETH: ${ethBalance}`} </InformationLine>
          <InformationLine>{`USDC: ${usdcBalance}`}</InformationLine>
          <InformationLine>{`SQRD: ${sqrdBalance}`}</InformationLine>
          <InformationLine>{`SQRD LP: ${sqrdLpBalance}`}</InformationLine>
        </InformationBox>
        <div className="w-[0.5px] h-full bg-white" />
        <InformationBox title={'Your Rewards'}>
          <InformationLine>{`Earned: 0.0`}</InformationLine>
          <InformationLine>{`Available: 0.0`}</InformationLine>
          <InformationLine />
          <button className="bg-darkPrimary text-white w-[180px] text-md p-2 text-md rounded-lg opacity-50 mt-6">
            Claim SQRD
          </button>
        </InformationBox>
      </InformationWrapper>
    </PageWrapper>
  )
}
