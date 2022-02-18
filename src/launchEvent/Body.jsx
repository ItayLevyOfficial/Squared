import React, { useCallback, useState } from 'react'
import { AccountStatus } from './AccountStatus'
import { CommitAssetsModal } from './commitAssetsModal'
import { EventStatus } from './EventStatus'
import { useEffect } from 'react'
import { ethers } from 'ethers'
import { selectedChain } from './chains'
import { CommitsNotAllowed } from './commitNotAllowed'

export const formatBigUsd = (bigUsd) => bigUsd.div(10 ** 8).toNumber()

export const Body = ({ className = '', launchContract, address }) => {
  const [selectedTokenIndex, setSelectedToken] = useState(null)
  const [depositedToken, setDepositedToken] = useState(
    ethers.constants.AddressZero
  )
  const [balance, setBalance] = useState(0)

  const fetchBalance = useCallback(async () => {
    const accountToken = await launchContract.accountToken(address)
    setDepositedToken(accountToken)
    if (accountToken !== ethers.constants.AddressZero) {
      const newBalance = await launchContract.accountBalance(address)
      setBalance(formatBigUsd(newBalance))
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
      return () => launchContract.removeListener('Deposited', fetchBalance)
    }
  }, [fetchBalance, launchContract])

  const selectedToken = selectedChain.tokens[selectedTokenIndex]
  const selectedTokenAddress = selectedToken?.address

  return (
    <div className={`flex space-x-32 -mt-20 ${className}`}>
      <AccountStatus
        amountCommitted={balance}
        isNativeCommitted={depositedToken === selectedChain.tokens[0].address}
        handleNativeClick={() => setSelectedToken(0)}
        handleStableClick={() => setSelectedToken(1)}
      />
      <div className="w-[0.5px] h-full bg-white" />
      <EventStatus launchContract={launchContract} />
      {depositedToken === ethers.constants.AddressZero ||
      depositedToken === selectedTokenAddress ? (
        <CommitAssetsModal
          selectedToken={selectedTokenIndex}
          close={() => setSelectedToken(null)}
          launchContract={launchContract}
        />
      ) : (
        <CommitsNotAllowed
          isOpen={selectedTokenIndex !== null}
          tokenName={selectedToken?.name ?? ''}
          depositedTokenName={
            selectedChain.tokens[selectedTokenIndex === 0 ? 1 : 0]?.name ?? ''
          }
          close={() => setSelectedToken(null)}
        />
      )}
    </div>
  )
}
