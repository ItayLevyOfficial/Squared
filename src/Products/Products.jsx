import { StakingPool } from './StakingPool'
import {
  InformationWrapper,
  InformationBox,
  InformationLine,
} from './Information'
import { PageWrapper } from '../layouts/PageWrapper'
import { ModalDisplay } from './ModalDisplay'
import { selectedChain } from '../chains'
import { useState } from 'react'

export const StakingPoolWrapper = ({ children }) => {
  return (
    <div className="w-full flex items-center justify-evenly -mt-20">
      {children}
    </div>
  )
}

export const Products = () => {
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

      <StakingPoolWrapper>
        {selectedChain.tokens.map((el, index) => (
          <StakingPool el={el} key={index} openModal={() => open(index)} />
        ))}
      </StakingPoolWrapper>
      <InformationWrapper>
        <InformationBox title={'Value Locked'}>
          <InformationLine>{`ETH TVL: `}</InformationLine>
          <InformationLine>{`USDC TVL: `}</InformationLine>
          <InformationLine>{`SQRD TVL: `}</InformationLine>
        </InformationBox>
        <div className="w-[0.5px] h-full bg-white" />
        <InformationBox title={'Cycle'}>
          <InformationLine>{`This Cycle: CYCLE ZERO-0`}</InformationLine>
          <InformationLine>{`Next Cycle: 3 DAYS 9 HOURS`}</InformationLine>
          <InformationLine>{`SQRD Price: $0.00`}</InformationLine>
        </InformationBox>
      </InformationWrapper>
    </PageWrapper>
  )
}
