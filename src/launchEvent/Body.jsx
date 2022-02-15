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
      setDepositedToken(await launchContract.accountToken(address))
    }

    if (launchContract && address) {
      fetchBalance()
    }
  }, [address, launchContract])

  useEffect(() => {
    if (depositedToken !== ethers.constants.AddressZero) {
      launchContract.accountBalance(address).then((newBalance) => {
        const usdChainlinkDecimals = 8
        const formattedNewBalance = newBalance.div(10 ** usdChainlinkDecimals)
        setBalance(formattedNewBalance.toNumber())
      })
    }
  }, [address, depositedToken, launchContract])

  useEffect(() => {
    const handleDeposit = () => {
      return (depositor, tokenInfo) => {
        console.log({ depositor, tokenInfo })
      }
    }
    if (launchContract) {
      launchContract.on('Deposited', handleDeposit())
      return () => launchContract.remove(handleDeposit)
    }
  }, [launchContract])

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
