import { StakingPool } from './StakingPool'
import { Information } from './Information'
import { PageWrapper } from '../layouts/PageWrapper'
import { ModalDisplay } from './ModalDisplay'
import { selectedChain } from '../chains'
import { useState } from 'react'
import { useFetchBalance } from './usePoolContracts'

export const StakingPoolWrapper = ({ children }) => {
  return (
    <div className="w-full flex items-center justify-evenly -mt-20">
      {children}
    </div>
  )
}

export const Products = () => {
  const [
    assetsBalance,
    sqrdLpBalance,
    sqrdBalance,
    ethBalance,
    usdcBalance,
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

      <StakingPoolWrapper>
        {selectedChain.tokens.map((el, index) => (
          <StakingPool el={el} key={index} openModal={() => open(index)} />
        ))}
      </StakingPoolWrapper>
      <Information
        ethBalance={ethBalance}
        usdcBalance={usdcBalance}
        sqrdBalance={sqrdBalance}
      />
    </PageWrapper>
  )
}
