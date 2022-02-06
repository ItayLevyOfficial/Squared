import React from "react"
import { Modal } from 'react-modal';

export const CommitAssetsModal = ({selectedToken, commitedAssets, isOpen}) => {
    
    return <Modal
      isOpen={isOpen}
      onRequestClose={close}
      style={{
        overlay: overlayStyles,
        content: contentStyles,
      }}
    ></Modal>
}