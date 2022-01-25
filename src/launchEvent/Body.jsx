import { AccountStatus } from './AccountStatus'
import { EventStatus } from './EventStatus'
import { useState } from 'react'
import ModalDisplay from '../Products/ModalDisplay'

export const Body = ({ className }) => {
  const [selectedToken, setSelectedToken] = useState(null)

  return (
    <div className={`flex z-10 space-x-32 ${className}`}>
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
