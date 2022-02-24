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
import { useFetchUserBalance } from '../products/useFetchBalance'
import { StakingPoolWrapper } from '../products/Products'
import { NetworkModal } from '../launchEvent/commitAssetsModal/NetworkModal'
import { EthPoolAbi } from '../products/ABIs/EthPoolAbi'
import { PoolAbi } from '../products/ABIs/PoolAbi'
import { useDepositAssets } from '../products/useDepositAssets'
import { SuccessModal } from '../launchEvent/commitAssetsModal/MessageModal'

export const Dashboard = () => {
  const ethBalance = useFetchUserBalance(selectedChain.tokens[0], EthPoolAbi)
  const usdcBalance = useFetchUserBalance(selectedChain.tokens[1], PoolAbi)
  const sqrdBalance = useFetchUserBalance(selectedChain.tokens[2], PoolAbi)
  const sqrdLpBalance = useFetchUserBalance(selectedChain.tokens[3], PoolAbi)

  const [isModalOpen, setIsOpen] = useState(false)
  const [selectedTokenIndex, setSelectedTokenIndex] = useState(null)
  const [tokenAmount, setTokenAmount] = useState('')
  const [commitAssets, txHash, setTxHash] = useDepositAssets()
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
