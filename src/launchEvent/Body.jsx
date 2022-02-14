import React, { useState } from 'react'
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

  useEffect(() => {
    const fetchBalance = async () => {
      if (launchContract && address) {
        setDepositedToken(await launchContract.accountToken(address))
      }
    }

    fetchBalance()
  }, [address, launchContract])
  console.log({ balance })
  useEffect(() => {
    if (depositedToken !== ethers.constants.AddressZero) {
      launchContract.accountBalance(address).then((newBalance) => {
        const formattedNewBalance = newBalance.div(10 ** 8)
        setBalance(formattedNewBalance.toNumber())
      })
    }
  }, [address, depositedToken, launchContract])

  return (
    <div className={`flex space-x-32 -mt-20 ${className}`}>
      <AccountStatus
        nativeCommitted={
          depositedToken === selectedChain.tokens[0] ? balance : 0
        }
        stableCommitted={
          depositedToken === selectedChain.tokens[1] ? balance : 0
        }
        handleBnbClick={() => setSelectedToken(0)}
        handleBusdClick={() => setSelectedToken(1)}
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
