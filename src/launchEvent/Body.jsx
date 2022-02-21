import { ethers } from 'ethers'
import React, { useState } from 'react'
import { selectedChain } from '../chains'
import { AccountStatus } from './AccountStatus'
import { CommitAssetsModal } from './commitAssetsModal/commitAssetsModal'
import { ErrorModal, SuccessModal } from './commitAssetsModal/MessageModal'
import { useCommitAssets } from './commitAssetsModal/useCommitAssets'
import { EventStatus } from './EventStatus'
import { useAccountBalance } from './useAccountBalance'

export const formatBigUsd = (bigUsd) => bigUsd.div(10 ** 8).toNumber()

export const Body = ({ className = '' }) => {
  const [selectedTokenIndex, setSelectedToken] = useState(null)
  const [commitAssets, txHash, setTxHash] = useCommitAssets()
  const [balance, depositedTokenAddress] = useAccountBalance()

  const selectedToken = selectedChain.tokens[selectedTokenIndex]
  const selectedTokenAddress = selectedToken?.address

  const depositedTokenName = selectedChain.tokens.find(
    (token) => token.address === depositedTokenAddress
  )?.name
  const tokenName = selectedToken?.name ?? ''
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
      <EventStatus />
      {txHash && selectedToken ? (
        <SuccessModal
          close={() => {
            setSelectedToken(null)
            setTxHash(null)
          }}
          txHash={txHash}
        />
      ) : depositedTokenAddress === ethers.constants.AddressZero ||
        depositedTokenAddress === selectedTokenAddress ? (
        <CommitAssetsModal
          selectedTokenIndex={selectedTokenIndex}
          close={() => setSelectedToken(null)}
          commitAssets={commitAssets}
        />
      ) : (
        <ErrorModal
          close={() => setSelectedToken(null)}
          isOpen={selectedTokenIndex !== null}
          tokenName={tokenName}
          depositedTokenName={depositedTokenName}
        />
      )}
    </div>
  )
}
