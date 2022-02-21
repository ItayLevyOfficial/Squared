import { StakingPool } from './StakingPool'
import { Information } from './Information'
import { PageWrapper } from '../layouts/PageWrapper'
import { ModalDisplay } from './ModalDisplay'
import { selectedChain } from '../chains'
import { useState } from 'react'
import { useFetchBalance } from './usePoolContracts'

export const Products = () => {
  const [
    sqrdLpBalance,
    sqrdBalance,
    ethBalance,
    usdcBalance,
    assetsBalance,
    totalValueLocked,
  ] = useFetchBalance()
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

      <div className="w-full flex items-center justify-evenly -mt-32">
        {selectedChain.tokens.map((el, index) => (
          <StakingPool el={el} key={index} openModal={() => open(index)} />
        ))}
      </div>
      <Information
        totalValueLocked={totalValueLocked}
        sqrdBalance={sqrdBalance}
        assetsBalance={assetsBalance}
      />
    </PageWrapper>
  )
}
