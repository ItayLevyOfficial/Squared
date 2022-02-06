import React from "react"
import { Modal } from 'react-modal';
import { overlayStyles } from "../Products/ModalDisplay";
import { contentStyles } from "../Products/ModalDisplay";

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