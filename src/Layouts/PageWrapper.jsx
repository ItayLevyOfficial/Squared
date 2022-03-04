import React, { useState } from 'react'
import { selectedChain } from '../chains'
import { SuccessModal } from '../launchEvent/commitAssetsModal/MessageModal'
import { NetworkModal } from '../launchEvent/commitAssetsModal/NetworkModal'
import { useDepositAssets } from '../launchEvent/commitAssetsModal/useDepositAssets'
import { Footer } from '../launchEvent/Footer'
import { ScreenPaddedContainer } from '../launchEvent/LaunchEventScreen'
import { useConnectWallet } from '../launchEvent/useConnectWallet'
import { InformationWrapper } from '../home/Information'
import { ModalDisplay } from '../home/ModalDisplay'
import { StakingPool } from '../home/StakingPool'
import {
  getListOfPoolBalances,
  getListOfUserBalances,
} from '../home/useErc20Functions'
import { Header } from './Header'

export const PageWrapper = ({ children }) => {
  const [, connectWallet, address] = useConnectWallet()
  const [isModalOpen, setIsOpen] = useState(false)
  const [selectedTokenIndex, setSelectedTokenIndex] = useState(0)
  const [tokenAmount, setTokenAmount] = useState('')
  const [commitAssets, txHash, setTxHash] = useDepositAssets()
  const listOfPoolBalances = getListOfPoolBalances()
  const listOfUserBalances = getListOfUserBalances()

  const open = (id) => {
    setIsOpen(true)
    setSelectedTokenIndex(id)
  }

  const close = () => {
    setIsOpen(false)
    setSelectedTokenIndex(null)
    setTokenAmount('')
    setTxHash(null)
  }

  return (
    <ScreenPaddedContainer>
      <Header connectWallet={connectWallet} address={address} />
      <div className="flex flex-col justify-evenly items-center w-10/12 h-full ">
        <NetworkModal close={close} />
        {txHash && <SuccessModal close={close} txHash={txHash} />}
        <ModalDisplay
          isOpen={isModalOpen}
          close={close}
          selectedTokenIndex={selectedTokenIndex}
          balance={listOfUserBalances[selectedTokenIndex]}
          setTokenAmount={setTokenAmount}
          tokenAmount={tokenAmount}
          handleSubmit={commitAssets}
        />
        <div className="w-full flex items-center justify-evenly -mt-32">
          {selectedChain.tokens.map((el, index) => (
            <StakingPool
              el={el}
              key={index}
              openModal={() => open(index)}
              balance={listOfPoolBalances[index]}
            />
          ))}
        </div>
        <InformationWrapper>{children}</InformationWrapper>
      </div>
      <Footer />
    </ScreenPaddedContainer>
  )
}
