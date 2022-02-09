import { AccountStatus } from './AccountStatus'
import { EventStatus } from './EventStatus'
import { useState } from 'react'
import React from 'react'
import { CommitAssetsModal } from './commitAssetsModal'
import { selectedChain } from './chains'
import { ethers } from 'ethers'

export const Body = ({
  className = '',
  isConnected,
  connectWallet,
  commitAssets
}) => {
  const [selectedToken, setSelectedToken] = useState(null)
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
        selectedToken={selectedToken ?? ''}
        close={() => setSelectedToken(null)} commitAssets={commitAssets}
        isConnected={isConnected} connectWallet={connectWallet}
      />
    </div>
  )
}
