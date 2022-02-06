import { AccountStatus } from './AccountStatus'
import { EventStatus } from './EventStatus'
import { useState } from 'react'
import ModalDisplay from '../Products/ModalDisplay'
import React from 'react'

export const Body = ({ className }) => {
  const [selectedToken, setSelectedToken] = useState(null)

  return (
    <div className={`flex space-x-32 -mt-20 ${className}`}>
      <AccountStatus
        bnbCommitted={57}
        busdCommitted={93}
        handleBnbClick={() => setSelectedToken(2)}
        handleBusdClick={() => setSelectedToken(1)}
      />
      <div className="w-[0.5px] h-full bg-white" />
      <EventStatus />
      <ModalDisplay
        isOpen={selectedToken}
        selectedToken={selectedToken ?? ''}
        close={() => setSelectedToken(null)}
      />
    </div>
  )
}
