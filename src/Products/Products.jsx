import { useState } from 'react'
import StakingPool from './StakingPool'
import LiquidityPools from './LiquidityPools'
import LiquidityPool from './LiquidityPool'
import Sidenav from '../Layouts/Sidenav'
import Header from '../Layouts/Header'
import Footer from '../Layouts/Footer'
import ModalDisplay from './ModalDisplay'
import { InformationCircleIcon } from '@heroicons/react/outline'

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
    <div className="w-full h-screen flex justify-center">
      <ModalDisplay
        isOpen={isModalOpen}
        close={close}
        selectedToken={selectedToken}
      >
        {StakingPoolsObject.map(
          (el) =>
            el.id === selectedToken && (
              <StakingPool el={el} key={el.id} selectedToken={selectedToken} />
            )
        )}
      </ModalDisplay>
      <Sidenav />
      <div className="flex flex-col justify-between ml-6 w-9/12">
        <Header />
        <div className="w-full mb-6 text-gray-100 h-56 border-transparent rounded-3xl flex items-center justify-between p-6 space-x-4 overflow-x-scroll ">
          {StakingPoolsObject.map((el) => (
            <StakingPool el={el} key={el.id} openModal={open} />
          ))}
        </div>
        <LiquidityPools
          column1="DEPOSITS"
          column2="APR on Deposits"
          column3="My Vote"
          column4="APR on Vote"
        >
          <LiquidityPool
            column1="$140M"
            column2="14%"
            column3="NONE"
            column4={
              <InformationCircleIcon className="h-6 cursor-pointer text-gray-100" />
            }
          />
        </LiquidityPools>

        <Footer />
      </div>
    </div>
  )
}

export default Products
