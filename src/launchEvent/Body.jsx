import React, { useState } from 'react'
import { AccountStatus } from './AccountStatus'
import { CommitAssetsModal } from './commitAssetsModal'
import { EventStatus } from './EventStatus'

export const Body = ({
  className = '',
  isConnected,
  connectWallet,
  launchContract
}) => {
  const [selectedToken, setSelectedToken] = useState(null)
  const [nativeCommitted, setNativeCommitted] = useState(0)
  const [stableCommitted, setStableCommitted] = useState(0)

  return (
    <div className={`flex space-x-32 -mt-20 ${className}`}>
      <AccountStatus
        nativeCommitted={nativeCommitted}
        stableCommitted={stableCommitted}
        handleBnbClick={() => setSelectedToken(0)}
        handleBusdClick={() => setSelectedToken(1)}
      />
      <div className="w-[0.5px] h-full bg-white" />
      <EventStatus />
      <CommitAssetsModal
        selectedToken={selectedToken}
        close={() => setSelectedToken(null)} launchContract={launchContract}
        isConnected={isConnected} connectWallet={connectWallet}
      />
    </div>
  )
}
