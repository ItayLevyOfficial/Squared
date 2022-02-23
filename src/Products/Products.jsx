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
import { useFetchPoolBalance } from './useFetchPoolBalance'
import { NetworkModal } from '../launchEvent/commitAssetsModal/MessageModal'
import { useNetworkModal } from '../launchEvent/useNetworkModal'

export const StakingPoolWrapper = ({ children, className }) => {
  return (
    <div className={`w-full flex items-center justify-evenly ${className}`}>
      {children}
    </div>
  )
}

export const Products = () => {
  const wrongNetwork = useNetworkModal()
  const [ethBalance, usdcBalance, sqrdBalance, sqrdLpBalance] =
    useFetchPoolBalance()

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
        <InformationBox title={'Value Locked'}>
          <InformationLine>{`ETH TVL: ${ethBalance} `}</InformationLine>
          <InformationLine>{`USDC TVL: ${usdcBalance}`}</InformationLine>
          <InformationLine>{`SQRD TVL: ${sqrdBalance} `}</InformationLine>
        </InformationBox>
        <div className="w-[0.5px] h-full bg-white" />
        <InformationBox title={'Cycle'}>
          <InformationLine>{`This Cycle: CYCLE ZERO-0`}</InformationLine>
          <InformationLine>{`Next Cycle: 3 DAYS 9 HOURS`}</InformationLine>
          <InformationLine>{`SQRD Price: $0.00`}</InformationLine>
        </InformationBox>
      </InformationWrapper>{' '}
      <NetworkModal isOpen={wrongNetwork} close={close} />
    </PageWrapper>
  )
}
