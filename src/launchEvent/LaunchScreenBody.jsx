import { ethers } from 'ethers'
import React, { useContext, useState } from 'react'
import { selectedChain } from '../chains'
import { AccountStatus } from './AccountStatus'
import { ActionModal } from './commitAssetsModal/commitAssetsModal'
import { NotWhitelistedErrorModal, SingleAssetErrorModal, SuccessModal } from './commitAssetsModal/MessageModal'
import { NetworkModal } from './commitAssetsModal/NetworkModal'
import { useDepositAssets } from './commitAssetsModal/useDepositAssets'
import { useWhitelistProof } from './commitAssetsModal/useWhitelistProof'
import { useWithdrawAssets } from './commitAssetsModal/useWithdrawAssets'
import { LaunchEventStatus } from './EventStatus'
import { StageContext } from './LaunchEventScreen'
import { useAccountBalance } from './useAccountBalance'
export const formatBigUsd = (bigUsd) => bigUsd.div(10 ** 8).toNumber()

export const LaunchScreenBody = ({ className = '' }) => {
  const [selectedTokenIndex, setSelectedToken] = useState(null)
  const launchStage = useContext(StageContext)
  const depositControls = useDepositAssets(true)
  const withdrawControls = useWithdrawAssets()
  const [handleSubmit, txHash, cleanTxHash] =
    launchStage === 1 ? depositControls : withdrawControls
  const [balance, depositedTokenAddress] = useAccountBalance()
  const selectedToken = selectedChain.tokens[selectedTokenIndex]
  const selectedTokenAddress = selectedToken?.address
  const depositedTokenName = selectedChain.tokens.find(
    (token) => token.address === depositedTokenAddress
  )?.name
  const tokenName = selectedToken?.name ?? ''
  const proof = useWhitelistProof()

  return (
    <div className={`flex space-x-32 ${className}`}>
      <AccountStatus
        amountCommitted={balance}
        isNativeCommitted={
          depositedTokenAddress === selectedChain.tokens[0].address
        }
        handleNativeClick={() => setSelectedToken(0)}
        handleStableClick={() => setSelectedToken(1)}
      />
      <div className="w-[0.5px] h-full bg-white" />
      <LaunchEventStatus />
      {txHash && selectedToken ? (
         proof.length === 0 ? <NotWhitelistedErrorModal /> : <SuccessModal
          close={() => {
            setSelectedToken(null)
            cleanTxHash()
          }}
          txHash={txHash}
        />
      ) : depositedTokenAddress === ethers.constants.AddressZero ||
        depositedTokenAddress === selectedTokenAddress ? (
        <ActionModal
          selectedTokenIndex={selectedTokenIndex}
          close={() => setSelectedToken(null)}
          handleSubmit={handleSubmit}
        />
      ) : (
        <SingleAssetErrorModal
          close={() => setSelectedToken(null)}
          isOpen={selectedTokenIndex !== null}
          tokenName={tokenName}
          depositedTokenName={depositedTokenName}
        />
      )}
      <NetworkModal />
    </div>
  )
}
