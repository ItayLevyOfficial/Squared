import { useEffect, useState } from 'react'
import Modal from 'react-modal'
import { selectedChain } from '../../constants'
import { overlayStyles } from '../../home/ModalStyles'
import errorIcon from '../icons/error.svg'
import { commitContentStyles } from './commitAssetsModal'
import { ModalParagraph, ModalTitle } from './MessageModal'

const useNetworkModal = () => {
  const formattedSelectedChainId = parseInt(selectedChain.chainId, 16).toString().toUpperCase()
  const [wrongNetwork, setWrongNetwork] = useState(
    window?.ethereum?.networkVersion.toUpperCase() !== formattedSelectedChainId
  )

  useEffect(() => {
    if (window.ethereum) {
      const handleChainChange = newChainId => {
        const currentChainId = selectedChain.chainId
        setWrongNetwork(newChainId.toString().toUpperCase() !== currentChainId.toUpperCase())
      }
      window.ethereum.on('chainChanged', handleChainChange)
      return () =>
        window.ethereum.removeListener('chainChanged', handleChainChange)
    }
  }, [formattedSelectedChainId])

  return wrongNetwork
}

export const NetworkModal = ({
  icon = <img src={errorIcon} alt="" />,
  close,
}) => {
  const wrongNetwork = useNetworkModal()

  return (
    <Modal
      isOpen={wrongNetwork}
      onRequestClose={close}
      style={{
        overlay: overlayStyles,
        content: commitContentStyles,
      }}
    >
      <div className="flex flex-col items-center">
        <ModalTitle className="mt-2 mb-10">Wrong Network</ModalTitle>
        {icon}
        <ModalParagraph className="mt-10">
          Please switch to the {selectedChain.chainName} network.
        </ModalParagraph>
      </div>
    </Modal>
  )
}
