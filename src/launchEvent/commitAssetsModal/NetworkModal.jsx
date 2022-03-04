import Modal from 'react-modal'
import { selectedChain } from '../../chains'
import { useState, useEffect } from 'react'
import errorIcon from '../icons/error.svg'
import { overlayStyles } from '../../landing/ModalStylesyles'
import { commitContentStyles } from './commitAssetsModal'
import { ModalTitle, ModalParagraph } from './MessageModal'

const useNetworkModal = () => {
  const [wrongNetwork, setWrongNetwork] = useState(false)
  useEffect(() => {
    const handleNetworkChange = () => {
      if (
        parseInt(selectedChain.chainId, 16).toString() !==
        window.ethereum.networkVersion
      ) {
        setWrongNetwork(true)
      }
    }
    handleNetworkChange()

    return () => {
      setWrongNetwork(false)
    }
  }, [])

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
