import { useState } from 'react'
import { LiquidityPool } from '../products/LiquidityPool'
import { Balance } from './Balance'
import { PageWrapper } from '../layouts/PageWrapper'
import { ModalDisplay } from '../products/ModalDisplay'
import { selectedChain } from '../launchEvent/chains'

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
      <Balance />
      <div className="px-6 w-full">
        {selectedChain.tokens.map((el) => (
          <LiquidityPool el={el} key={el.id} openModal={() => open(el.id)} />
        ))}
      </div>
    </PageWrapper>
  )
}
