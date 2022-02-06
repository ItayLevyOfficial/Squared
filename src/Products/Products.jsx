import { useState } from 'react'
import { StakingPool } from './StakingPool'
import { Header } from '../layouts/Header'
import { Footer } from '../layouts/Footer'
import { ModalDisplay } from './ModalDisplay'
import { Sidenav } from '../layouts/Sidenav'
import { StakingPoolsObject } from './StakingPools'
import { Information } from './Information'
import React from 'react'

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
    <div className="flex">
      <ModalDisplay
        isOpen={isModalOpen}
        close={close}
        selectedToken={selectedToken}
      />
      <Sidenav />

      <div className="flex flex-col w-10/12 max-w-main min-h-full">
        <Header />
        <div className="mt-20">
          <div className="w-full flex items-center justify-evenly overflow-x-scroll ">
            {StakingPoolsObject.map((el) => (
              <StakingPool el={el} key={el.id} openModal={() => open(el.id)} />
            ))}
          </div>
          <Information />
          <Footer />
        </div>
      </div>
    </div>
  )
}
