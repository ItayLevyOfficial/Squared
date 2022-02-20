import { useState } from 'react'
import { StakingPool } from '../products/StakingPool'
import { PageWrapper } from '../layouts/PageWrapper'
import { ModalDisplay } from '../products/ModalDisplay'
import { selectedChain } from '../launchEvent/chains'
import { InformationBox } from '../products/Information'

export const Dashboard = () => {
  const [isModalOpen, setIsOpen] = useState(false)
  const [selectedToken, setSelectedToken] = useState('')

  const open = (id) => {
    setIsOpen(true)
    setSelectedToken(id)
  }

  const close = () => {
    setIsOpen(false)
  }

  return (
    <PageWrapper>
      <ModalDisplay
        isOpen={isModalOpen}
        close={close}
        selectedToken={selectedToken}
      />
      <div className="w-full flex items-center justify-evenly -mt-20">
        {selectedChain.tokens.map((el, index) => (
          <StakingPool el={el} key={index} openModal={() => open(index)} />
        ))}
      </div>
      <div className="w-full p-6 flex -mt-20 justify-center">
        <InformationBox
          title="BALANCE"
          heading1="ETH"
          heading2="USDC"
          heading3="SQRD"
          content1=" $23,300,000"
          content2=" $70,500,000"
          content3=" $93,800,000"
        />
        <div className="w-[0.5px] h-full bg-white" />
        <InformationBox
          title="CURRENT CYCLE"
          heading1="THIS CYCLE"
          heading2="NEXT CYCLE"
          heading3="SQRD PRICE"
          content1=" CYCLE ZERO-0"
          content2=" 01D 12H 45M"
          content3=" $22.86"
        />
      </div>
    </PageWrapper>
  )
}
