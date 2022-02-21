import { ethers } from 'ethers'
import React, { useCallback, useEffect, useState } from 'react'
import { selectedChain } from '../chains'
import { launchContractAbi } from './abis/defiRoundAbi'
import { AccountStatus } from './AccountStatus'
import {
  CommitAssetsModal,
  PrimaryLink
} from './commitAssetsModal/commitAssetsModal'
import { MessageModal, SuccessModal } from './commitAssetsModal/MessageModal'
import { useCommitAssets } from './commitAssetsModal/useCommitAssets'
import { EventStatus } from './EventStatus'
import { provider } from './useConnectWallet'
import { useContract } from './utils'
export const formatBigUsd = (bigUsd) => bigUsd.div(10 ** 8).toNumber()

export const Body = ({ className = '', writeLaunchContract, address }) => {
  const [selectedTokenIndex, setSelectedToken] = useState(null)
  const [depositedToken, setDepositedToken] = useState(
    ethers.constants.AddressZero
  )
  const [balance, setBalance] = useState(0)
  const [commitAssets, txHash, setTxHash] = useCommitAssets()

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

  const depositedTokenName =
    selectedChain.tokens[selectedTokenIndex === 0 ? 1 : 0]?.name ?? ''
  const tokenName = selectedToken?.name ?? ''
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
      {txHash && selectedToken ? (
        <SuccessModal
          close={() => {
            setSelectedToken(null)
            setTxHash(null)
          }} txHash={txHash}
        />
      ) : depositedToken === ethers.constants.AddressZero ||
        depositedToken === selectedTokenAddress ? (
        <CommitAssetsModal
          selectedTokenIndex={selectedTokenIndex}
          close={() => setSelectedToken(null)}
          launchContract={writeLaunchContract}
          commitAssets={commitAssets}
        />
      ) : (
        <MessageModal
          isOpen={selectedTokenIndex !== null}
          footer={
            <>
              In the launch event, you can only deposit either{' '}
              {depositedTokenName} or {tokenName}. Since you already committed{' '}
              {depositedTokenName}, further deposits of {tokenName} are not
              allowed. <PrimaryLink>Learn more</PrimaryLink>
            </>
          }
          close={() => setSelectedToken(null)}
        />
      )}
    </div>
  )
}
