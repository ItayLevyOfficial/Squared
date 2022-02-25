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
import { getListOfBalances } from '../products/useErc20Functions'
import { StakingPoolWrapper } from '../products/Products'
import { NetworkModal } from '../launchEvent/commitAssetsModal/NetworkModal'
import { EthPoolAbi } from '../products/ABIs/EthPoolAbi'
import { PoolAbi } from '../products/ABIs/PoolAbi'
import { useCommitPoolAssets } from '../launchEvent/commitAssetsModal/useCommitAssets'
import { SuccessModal } from '../launchEvent/commitAssetsModal/MessageModal'

export const Dashboard = () => {
  const [isModalOpen, setIsOpen] = useState(false)
  const [selectedTokenIndex, setSelectedTokenIndex] = useState(0)
  const [tokenAmount, setTokenAmount] = useState('')
  const [commitAssets, txHash, setTxHash] = useCommitPoolAssets(
    selectedChain.tokens[+selectedTokenIndex],
    selectedTokenIndex === 0 ? EthPoolAbi : PoolAbi
  )
  const balanceList = getListOfBalances()

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
        isOpen={isModalOpen}
        close={() => {
          setIsOpen(false)
          setSelectedTokenIndex(null)
          setTokenAmount('')
        }}
        selectedTokenIndex={selectedTokenIndex}
        setTokenAmount={setTokenAmount}
        tokenAmount={tokenAmount}
        handleSubmit={commitAssets}
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
        <InformationBox title={'Your Balance'}>
          <InformationLine>{`ETH: ${balanceList[0]}`} </InformationLine>
          <InformationLine>{`USDC: ${balanceList[1]}`}</InformationLine>
          <InformationLine>{`SQRD: ${balanceList[2]}`}</InformationLine>
          <InformationLine>{`SQRD LP: ${balanceList[3]}`}</InformationLine>
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
