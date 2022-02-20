import React, { useCallback, useState } from 'react'
import { AccountStatus } from './AccountStatus'
import { CommitAssetsModal } from './commitAssetsModal/commitAssetsModal'
import { EventStatus } from './EventStatus'
import { useEffect } from 'react'
import { ethers } from 'ethers'
import { selectedChain } from '../chains'
import { MessageModal } from './commitAssetsModal/MessageModal'
import { useContract } from './utils'
import { launchContractAbi } from './abis/defiRoundAbi'
import { provider } from './useConnectWallet'
import { SuccessIcon } from './icons/success'
import { PrimaryLink } from './commitAssetsModal/commitAssetsModal'
export const formatBigUsd = (bigUsd) => bigUsd.div(10 ** 8).toNumber()
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCopy } from '@fortawesome/free-solid-svg-icons'

export const Body = ({ className = '', writeLaunchContract, address }) => {
  const [selectedTokenIndex, setSelectedToken] = useState(null)
  const [depositedToken, setDepositedToken] = useState(
    ethers.constants.AddressZero
  )
  const [transactionHash, setTransactionHash] = useState('0xe8195739bc5b4e4ea947ff9cb66befdf203418e937d097b0c6faf100d4390dad')
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
      {transactionHash ? (
        <MessageModal
          icon={<SuccessIcon />}
          header="Request Sent Successfully"
          isOpen={Boolean(transactionHash)}
          close={() => setTransactionHash(null)}
          footer={
            <>
              Transactions on the {selectedChain.chainName} chain usually completed
              within {selectedChain.approvalTime} minutes. Your transaction hash
              is{'  '}
              <span className="font-number bg-dark py-1 px-2 text-sm rounded-lg cursor-pointer">
                {transactionHash.slice(0, 7)}... &nbsp;<FontAwesomeIcon icon={faCopy}/>
              </span>{'  '}
              and you can check its status on <PrimaryLink>Etherscan</PrimaryLink>.
            </>
          }
        />
      ) : depositedToken === ethers.constants.AddressZero ||
        depositedToken === selectedTokenAddress ? (
        <CommitAssetsModal
          selectedToken={selectedTokenIndex}
          close={() => setSelectedToken(null)}
          launchContract={writeLaunchContract}
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
