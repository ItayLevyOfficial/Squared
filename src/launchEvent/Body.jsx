import React, { useCallback, useState } from 'react'
import { AccountStatus } from './AccountStatus'
import { CommitAssetsModal } from './commitAssetsModal/commitAssetsModal'
import { EventStatus } from './EventStatus'
import { useEffect } from 'react'
import { ethers } from 'ethers'
import { selectedChain } from '../chains'
import { CommitsNotAllowed } from './commitAssetsModal/commitNotAllowed'
import { useContract } from './useContract'
import { launchContractAbi } from './abis/defiRoundAbi'
import { provider } from './useConnectWallet'

export const formatBigUsd = (bigUsd) => bigUsd.div(10 ** 8).toNumber()

export const Body = ({ className = '', writeLaunchContract, address }) => {
  const [selectedTokenIndex, setSelectedToken] = useState(null)
  const [depositedToken, setDepositedToken] = useState(
    ethers.constants.AddressZero
  )
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [balance, setBalance] = useState(0)

  const readLaunchContract = useContract(
    provider,
    selectedChain.launchContractAddress,
    launchContractAbi
  )

  const fetchBalance = useCallback(async () => {
    const accountToken = await readLaunchContract.accountToken(address)
    setDepositedToken(accountToken)
    if (accountToken !== ethers.constants.AddressZero) {
      const newBalance = await readLaunchContract.accountBalance(address)
      setBalance(formatBigUsd(newBalance))
    }
  }, [address, readLaunchContract])

  useEffect(() => {
    if (readLaunchContract && address) {
      fetchBalance()
    }
  }, [address, fetchBalance, readLaunchContract])

  useEffect(() => {
    if (writeLaunchContract) {
      writeLaunchContract.on('Deposited', fetchBalance)
      return () => writeLaunchContract.removeListener('Deposited', fetchBalance)
    }
  }, [fetchBalance, writeLaunchContract])

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
      <EventStatus launchContract={readLaunchContract} />
      {depositedToken === ethers.constants.AddressZero ||
      depositedToken === selectedTokenAddress ? (
        <CommitAssetsModal
          selectedToken={selectedTokenIndex}
          close={() => setSelectedToken(null)}
          launchContract={writeLaunchContract}
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
