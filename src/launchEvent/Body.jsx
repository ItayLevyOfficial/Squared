import React, { useCallback, useState } from 'react'
import { AccountStatus } from './AccountStatus'
import { CommitAssetsModal } from './commitAssetsModal'
import { EventStatus } from './EventStatus'
import { useEffect } from 'react'
import { ethers } from 'ethers'
import { selectedChain } from './chains'

export const Body = ({ className = '', launchContract, address }) => {
  const [selectedToken, setSelectedToken] = useState(null)
  const [depositedToken, setDepositedToken] = useState(
    ethers.constants.AddressZero
  )
  const [balance, setBalance] = useState(0)

  const fetchBalance = useCallback(async () => {
    const accountToken = await launchContract.accountToken(address)
    setDepositedToken(accountToken)
    if (accountToken !== ethers.constants.AddressZero) {
      const newBalance = await launchContract.accountBalance(address)
      const usdChainlinkDecimals = 8
      const formattedNewBalance = newBalance.div(10 ** usdChainlinkDecimals)
      setBalance(formattedNewBalance.toNumber())
    }
  }, [address, launchContract])

  useEffect(() => {
    if (launchContract && address) {
      fetchBalance()
    }
  }, [address, fetchBalance, launchContract])

  useEffect(() => {
    if (launchContract) {
      launchContract.on('Deposited', fetchBalance)
      return () => launchContract.removeListener(fetchBalance)
    }
  }, [fetchBalance, launchContract])

  return (
    <div className={`flex space-x-32 -mt-20 ${className}`}>
      <AccountStatus
        amountCommitted={balance}
        isNativeCommitted={depositedToken === selectedChain.tokens[0].address}
        handleNativeClick={() => setSelectedToken(0)}
        handleStableClick={() => setSelectedToken(1)}
      />
      <div className="w-[0.5px] h-full bg-white" />
      <EventStatus />
      <CommitAssetsModal
        selectedToken={selectedToken}
        close={() => setSelectedToken(null)}
        launchContract={launchContract}
      />
    </div>
  )
}
