import { useState, useEffect } from 'react'
import { StakingPool } from './StakingPool'
import { Information } from './Information'
import { PageWrapper } from '../layouts/PageWrapper'
import { ModalDisplay } from './ModalDisplay'
import { selectedChain } from '../launchEvent/chains'

export const Products = () => {
  const [isModalOpen, setIsOpen] = useState(false)
  const [selectedToken, setSelectedToken] = useState(null)

  const open = (id) => {
    setIsOpen(true)
    setSelectedToken(id)
  }

  const close = () => {
    setIsOpen(false)
    setSelectedToken(null)
  }

  return (
    <PageWrapper>
      <ModalDisplay
        isOpen={isModalOpen}
        close={close}
        selectedToken={selectedToken}
      />
      <div className="w-full flex items-center justify-evenly overflow-x-scroll ">
        {selectedChain.tokens.map((el) => (
          <StakingPool el={el} key={el.id} openModal={() => open(el.id)} />
        ))}
      </div>
      <Information />
    </PageWrapper>
  )
}
