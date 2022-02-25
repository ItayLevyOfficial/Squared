import React from 'react'
import { Header } from './Header'
import { useConnectWallet } from '../launchEvent/useConnectWallet'
import { Footer } from '../launchEvent/Footer'
import { ScreenPaddedContainer } from '../launchEvent/LaunchEventScreen'
import { StakingPool } from '../products/StakingPool'
import { ModalDisplay } from '../products/ModalDisplay'
import { selectedChain } from '../chains'
import { InformationWrapper } from '../products/Information'
import { useState } from 'react'
import {
  getListOfPoolBalances,
  getListOfUserBalances,
} from '../products/useErc20Functions'
import { NetworkModal } from '../launchEvent/commitAssetsModal/NetworkModal'
import { EthPoolAbi } from '../products/ABIs/EthPoolAbi'
import { PoolAbi } from '../products/ABIs/PoolAbi'
import { useCommitPoolAssets } from '../launchEvent/commitAssetsModal/useCommitAssets'
import { SuccessModal } from '../launchEvent/commitAssetsModal/MessageModal'

export const PageWrapper = ({ children }) => {
  const [, connectWallet, address] = useConnectWallet()
  const [isModalOpen, setIsOpen] = useState(false)
  const [selectedTokenIndex, setSelectedTokenIndex] = useState(0)
  const [tokenAmount, setTokenAmount] = useState('')
  const [commitAssets, txHash, setTxHash] = useCommitPoolAssets(
    selectedChain.tokens[+selectedTokenIndex],
    selectedTokenIndex === 0 ? EthPoolAbi : PoolAbi
  )
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
        <NetworkModal />
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
