import { AccountStatus } from './AccountStatus'
import { EventStatus } from './EventStatus'
import { useState } from 'react'
import React from 'react'
import { CommitAssetsModal } from './commitAssetsModal';

export const Body = ({ className }) => {
  const [selectedToken, setSelectedToken] = useState(null)
  const [isConnected, setIsConnected] = useState(false)
  const [nativeCommitted, setNativeCommitted] = useState(0)
  const [stableCommitted, setStableCommitted] = useState(0)
  
  return (
    <div className={`flex space-x-32 -mt-20 ${className}`}>
      <AccountStatus
        nativeCommitted={nativeCommitted}
        stableCommitted={stableCommitted}
        handleBnbClick={() => setSelectedToken(2)}
        handleBusdClick={() => setSelectedToken(1)}
      />
      <div className="w-[0.5px] h-full bg-white" />
      <EventStatus />
      <CommitAssetsModal
        isOpen={selectedToken}
        selectedToken={selectedToken ?? ''}
        close={() => setSelectedToken(null)} isConnected={isConnected}
      />
    </div>
  )
}
