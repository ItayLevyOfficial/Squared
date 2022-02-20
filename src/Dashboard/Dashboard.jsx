import { useState } from 'react'
import { StakingPool } from '../products/StakingPool'
import { PageWrapper } from '../layouts/PageWrapper'
import { ModalDisplay } from '../products/ModalDisplay'
import { selectedChain } from '../launchEvent/chains'
import { InformationBox } from '../products/Information'

export const Dashboard = () => {
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
      <div className="w-full flex -mt-20">
        <InformationBox
          title="BALANCE"
          heading1="ETH :"
          heading2="USDC :"
          heading3="SQRD :"
          heading4="SQRD LP :"
          content1=" $1,500"
          content2=" $3,000"
          content3=" $50,000"
          content4=" $10,000"
        />
        <div className="w-[0.5px] h-full bg-white" />
        <InformationBox
          title="REWARDS"
          heading1="EARNED :"
          heading2="AVAILABLE :"
          heading3={
            <button className="bg-darkPrimary text-white w-[180px] text-md p-2 text-md rounded-lg opacity-50 mt-6">
              Claim SQRD
            </button>
          }
          content1="0.00 SQRD"
          content2="0.00 SQRD"
        />
      </div>
    </PageWrapper>
  )
}
