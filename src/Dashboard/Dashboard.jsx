import { StakingPool } from '../products/StakingPool'
import { PageWrapper } from '../layouts/PageWrapper'
import { ModalDisplay } from '../products/ModalDisplay'
import { selectedChain } from '../chains'
import { InformationBox, InformationLine } from '../products/Information'
import { useState } from 'react'
import { useFetchBalance } from '../products/usePoolContracts'

export const formatBigErc20 = (bigUsd) => bigUsd.div(10 ** 6).toNumber()
export const Dashboard = () => {
  const [sqrdLpBalance, sqrdBalance, ethBalance, usdcBalance, assetsBalance] =
    useFetchBalance()

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
        <InformationBox title={'Your Balance'}>
          <InformationLine>{`ETH : ${ethBalance}`} </InformationLine>
          <InformationLine>{`USDC : ${usdcBalance}`}</InformationLine>
          <InformationLine>{`SQRD : ${sqrdBalance}`}</InformationLine>
          <InformationLine>{`SQRD LP : ${sqrdLpBalance}`}</InformationLine>
        </InformationBox>
        <div className="w-[0.5px] h-42 bg-white" />
        <InformationBox title={'Your Rewards'}>
          <InformationLine>{`EARNED : 0.0`}</InformationLine>
          <InformationLine>{`AVAILABLE : 0.0`}</InformationLine>
          <InformationLine />
          <button className="bg-darkPrimary text-white w-[180px] text-md p-2 text-md rounded-lg opacity-50 mt-6">
            Claim SQRD
          </button>
        </InformationBox>
      </div>
    </PageWrapper>
  )
}
