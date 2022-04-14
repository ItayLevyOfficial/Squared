import { ethers } from 'ethers'
import { useContext, useState } from 'react'
import { selectedChain } from '../constants'
import { AccountStatus } from './AccountStatus'
import { ActionModal } from './commitAssetsModal/commitAssetsModal'
import {
  NotWhitelistedErrorModal,
  SingleAssetErrorModal,
  SuccessModal
} from './commitAssetsModal/MessageModal'
import { NetworkModal } from './commitAssetsModal/NetworkModal'
import { useDepositAssets } from './commitAssetsModal/useDepositAssets'
import { useWhitelistProof } from './commitAssetsModal/useWhitelistProof'
import { useWithdrawAssets } from './commitAssetsModal/useWithdrawAssets'
import { LaunchEventStatus } from './EventStatus'
import { StageContext } from './LaunchEventScreen'
import { useAccountBalance } from './useAccountBalance'
import { useConnectWallet } from './useConnectWallet'
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
  const [, , address] = useConnectWallet()

  const handleModalClose = () => setSelectedToken(null)

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
        <SuccessModal
          close={() => {
            handleModalClose()
            cleanTxHash()
          }}
          txHash={txHash}
        />
      ) : proof.length === 0 && selectedToken && address ? (
        <NotWhitelistedErrorModal close={handleModalClose} />
      ) : depositedTokenAddress === ethers.constants.AddressZero ||
        depositedTokenAddress === selectedTokenAddress ? (
        <ActionModal
          selectedTokenIndex={selectedTokenIndex}
          close={handleModalClose}
          handleSubmit={handleSubmit}
        />
      ) : (
        <SingleAssetErrorModal
          close={handleModalClose}
          isOpen={selectedTokenIndex !== null}
          tokenName={tokenName}
          depositedTokenName={depositedTokenName}
        />
      )}
      <NetworkModal />
    </div>
  )
}
