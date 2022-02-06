import { useState } from 'react'
import StakingPool from './StakingPool'
import LiquidityPool from './LiquidityPool'
import Header from '../Layouts/Header'
import Footer from '../Layouts/Footer'
import {ModalDisplay} from './ModalDisplay'
import Sidenav from '../Layouts/Sidenav'
import { StakingPoolsObject } from './StakingPools'

const Products = () => {
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
        <div className="w-full h-56 flex items-center justify-between space-x-4 overflow-x-scroll ">
          {StakingPoolsObject.map((el) => (
            <StakingPool el={el} key={el.id} openModal={() => open(el.id)} />
          ))}
        </div>
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

export default Products
