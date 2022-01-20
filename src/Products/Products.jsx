import { useState } from 'react'
import StakingPool from './StakingPool'
import LiquidityPools from './LiquidityPools'
import LiquidityPool from './LiquidityPool'
import Sidenav from '../Layouts/Sidenav'
import Header from '../Layouts/Header'
import Footer from '../Layouts/Footer'
import DisplayModal from './DisplayModal'
import { InformationCircleIcon } from '@heroicons/react/outline'

import { StakingPoolsObject } from './StakingPools'

const Products = () => {
  const [modalIsOpen, setIsOpen] = useState(false)
  const [selectedPool, setSelectedPool] = useState('')

  const openModal = (id) => {
    setIsOpen(true)
    setSelectedPool(id)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <>
      <DisplayModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        selectedPool={selectedPool}
        children={StakingPoolsObject.map(
          (el) =>
            el.id == selectedPool && (
              <StakingPool el={el} key={el.id} selectedPool={selectedPool} />
            )
        )}
      />
      <div className="w-full h-screen flex justify-center">
        <Sidenav />
        <div className="flex flex-col justify-between ml-6 w-9/12">
          <Header />
          <div className="w-full mb-6 text-gray-100 h-56 border-transparent rounded-3xl flex items-center justify-between p-6 space-x-4 overflow-x-scroll scrollbar scrollbar-thumb-green-200 scrollbar-track-gray-700 scrollbar-thin">
            {StakingPoolsObject.map((el) => (
              <StakingPool el={el} key={el.id} openModal={openModal} />
            ))}
          </div>
          <LiquidityPools
            column1="DEPOSITS"
            column2="APR on Deposits"
            column3="My Vote"
            column4="APR on Vote"
            children={
              <LiquidityPool
                column1="$140M"
                column2="14%"
                column3="NONE"
                column4={
                  <InformationCircleIcon className="h-6 cursor-pointer text-gray-100" />
                }
              />
            }
          />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Products
