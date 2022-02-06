import { useState } from 'react'
import { Footer } from '../layouts/Footer'
import { Header } from '../layouts/Header'
import { LiquidityPool } from '../products/LiquidityPool'
import { Balance } from './Balance'
import { Sidenav } from '../layouts/Sidenav'
import { StakingPoolsObject } from '../products/StakingPools'
import { ModalDisplay } from '../products/ModalDisplay'

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
    <div className="flex">
      <ModalDisplay
        isOpen={isModalOpen}
        close={close}
        selectedToken={selectedToken}
      />
      <Sidenav />
      <div className="flex flex-col w-10/12 max-w-main min-h-full">
        <Header />
        <Balance />
        <div className="w-full">
          <span className="text-white text-3xl opacity-90">
            Liquidity Pools
          </span>
          <div className="border-b w-full border-primary opacity-80 mb-4" />

          {StakingPoolsObject.map((el) => (
            <LiquidityPool el={el} key={el.id} openModal={() => open(el.id)} />
          ))}
        </div>
        <Footer />
      </div>
    </div>
  )
}
