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
import { useFetchContractBalance } from './useFetchBalance'
import { NetworkModal } from '../launchEvent/commitAssetsModal/NetworkModal'
import { EthPoolAbi } from './ABIs/EthPoolAbi'
import { PoolAbi } from './ABIs/PoolAbi'

export const StakingPoolWrapper = ({ children, className }) => {
  return (
    <div className={`w-full flex items-center justify-evenly ${className}`}>
      {children}
    </div>
  )
}

export const Products = () => {
  const [isModalOpen, setIsOpen] = useState(false)
  const [selectedTokenIndex, setSelectedTokenIndex] = useState(0)
  const [tokenAmount, setTokenAmount] = useState('')

  const ethBalance = useFetchContractBalance(
    selectedChain.tokens[0],
    EthPoolAbi
  )
  const usdcBalance = useFetchContractBalance(selectedChain.tokens[1], PoolAbi)
  const sqrdBalance = useFetchContractBalance(selectedChain.tokens[2], PoolAbi)

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
      <NetworkModal />
    </PageWrapper>
  )
}
