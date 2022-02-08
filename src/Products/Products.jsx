import { useState } from 'react'
import { StakingPool } from './StakingPool'
import { StakingPoolsObject } from './StakingPools'
import { Information } from './Information'
import { PageWrapper } from '../layouts/PageWrapper'
import { ModalDisplay } from './ModalDisplay'

export const Products = () => {
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
      <div className="w-full flex items-center justify-evenly overflow-x-scroll ">
        {StakingPoolsObject.map((el) => (
          <StakingPool el={el} key={el.id} openModal={() => open(el.id)} />
        ))}
      </div>
      <Information />
    </PageWrapper>
  )
}
