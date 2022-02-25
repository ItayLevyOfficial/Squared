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
import { getListOfPoolBalances } from './useErc20Functions'
import { NetworkModal } from '../launchEvent/commitAssetsModal/NetworkModal'
import { EthPoolAbi } from './ABIs/EthPoolAbi'
import { PoolAbi } from './ABIs/PoolAbi'
import { SuccessModal } from '../launchEvent/commitAssetsModal/MessageModal'
import { useCommitPoolAssets } from '../launchEvent/commitAssetsModal/useCommitAssets'

export const StakingPoolWrapper = ({ children, className }) => {
  return (
    <div className={`w-full flex items-center justify-evenly ${className}`}>
      {children}
    </div>
  )
}

export const Products = () => {
  const [isModalOpen, setIsOpen] = useState(false)
  const [selectedTokenIndex, setSelectedTokenIndex] = useState(null)
  const [tokenAmount, setTokenAmount] = useState('')
  const [commitAssets, txHash, setTxHash] = useCommitPoolAssets(
    selectedChain.tokens[+selectedTokenIndex],
    selectedTokenIndex === 0 ? EthPoolAbi : PoolAbi
  )
  const balanceList = getListOfPoolBalances()

  const open = (id) => {
    setIsOpen(true)
    setSelectedTokenIndex(id)
  }

  return (
    <PageWrapper>
      <NetworkModal />
      {txHash && (
        <SuccessModal
          close={() => {
            setSelectedTokenIndex(null)
            setTxHash(null)
          }}
          txHash={txHash}
        />
      )}
      <ModalDisplay
        handleSubmit={commitAssets}
        isOpen={isModalOpen}
        close={() => {
          setIsOpen(false)
          setSelectedTokenIndex(null)
          setTokenAmount('')
        }}
        selectedTokenIndex={selectedTokenIndex}
        tokenAmount={tokenAmount}
        setTokenAmount={setTokenAmount}
      />
      <StakingPoolWrapper className={'-mt-32'}>
        {selectedChain.tokens.map((el, index) => (
          <StakingPool
            el={el}
            key={index}
            openModal={() => open(index)}
            balance={balanceList[index]}
          />
        ))}
      </StakingPoolWrapper>
      <InformationWrapper>
        <InformationBox title={'Value Locked'}>
          <InformationLine>{`ETH TVL: ${balanceList[0]} `}</InformationLine>
          <InformationLine>{`USDC TVL: ${balanceList[1]}`}</InformationLine>
          <InformationLine>{`SQRD TVL: ${balanceList[2]} `}</InformationLine>
        </InformationBox>
        <div className="w-[0.5px] h-full bg-white" />
        <InformationBox title={'Cycle'}>
          <InformationLine>{`This Cycle: CYCLE ZERO-0`}</InformationLine>
          <InformationLine>{`Next Cycle: 3 DAYS 9 HOURS`}</InformationLine>
          <InformationLine>{`SQRD Price: $0.00`}</InformationLine>
        </InformationBox>
      </InformationWrapper>{' '}
    </PageWrapper>
  )
}
