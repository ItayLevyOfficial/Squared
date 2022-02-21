import React, { useState } from 'react'
import { selectedChain } from '../chains'
import { AccountStatus } from '../launchEvent/AccountStatus'
import { useAccountBalance } from '../launchEvent/useAccountBalance'
import { LastLookStatus } from './lastLookStatus'

export const LastLookBody = ({ className = '' }) => {
  const [balance, depositedTokenAddress] = useAccountBalance()
  const [selectedTokenIndex, setSelectedToken] = useState(null)

  return (
    <div className={`flex space-x-32 -mt-20 ${className}`}>
      <AccountStatus
        amountCommitted={balance}
        isNativeCommitted={
          depositedTokenAddress === selectedChain.tokens[0].address
        }
        handleNativeClick={() => setSelectedToken(0)}
        handleStableClick={() => setSelectedToken(1)}
      />
      <div className="w-[0.5px] h-full bg-white" />
      <LastLookStatus />
    </div>
  )
}
