import React from 'react'
import Modal from 'react-modal'
import { overlayStyles } from '../Products/ModalDisplay'
import { contentStyles } from '../Products/ModalDisplay'
import { CloseButton } from '../Products/ModalDisplay'
import { StakingPoolsObject } from '../Products/StakingPools'
import { ModalInput } from '../Products/ModalInput';

const commitContentStyles = {
  ...contentStyles, 
  height: '400px'
}

export const CommitAssetsModal = ({
  selectedToken,
  commitedCount,
  isOpen,
  close,
}) => {
  const obj = StakingPoolsObject.find((el) => el.id === selectedToken)

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={close}
      style={{
        overlay: overlayStyles,
        content: commitContentStyles,
      }}
    >
      <CloseButton close={close} />
      <div className="flex flex-col items-center">
        <h1 className="text-2xl mb-6 -mt-4 text-white font-medium">Commit {obj?.title}</h1>
        <ModalInput selectedToken={obj?.title} />
        
      </div>
    </Modal>
  )
}
