import { useState } from 'react'
import { StakingPool } from '../products/StakingPool'
import { PageWrapper } from '../layouts/PageWrapper'
import { ModalDisplay } from '../products/ModalDisplay'
import { selectedChain } from '../chains'
import { InformationBox, InformationLine } from '../products/Information'

export const Dashboard = (props) => {
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
      <div className="flex -mt-20 w-10/12">
        <InformationBox title={'BALANCE'}>
          <InformationLine heading={'ETH :'} children={props.ethBalance} />
          <InformationLine heading={'USDC :'} children={props.usdcBalance} />
          <InformationLine heading={'SQRD :'} children={props.sqrdBalance} />
          <InformationLine
            heading={'SQRD LP :'}
            children={props.sqrdLpBalance}
          />
        </InformationBox>
        <div className="w-[0.5px] h-42 bg-white" />
        <InformationBox title={'REWARDS'}>
          <InformationLine
            heading={'EARNED :'}
            children={props.earnedBalance}
          />
          <InformationLine
            heading={'AVAILABLE :'}
            children={props.availableBalance}
          />
          <InformationLine
            heading={
              <button className="bg-darkPrimary text-white w-[180px] text-md p-2 text-md rounded-lg opacity-50 mt-6">
                Claim SQRD
              </button>
            }
          />
        </InformationBox>
      </div>
    </PageWrapper>
  )
}
