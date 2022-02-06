import Modal from 'react-modal'
import ModalInfo from './ModalInfo'
import { XIcon } from '@heroicons/react/outline'
import { useState } from 'react'
import ModalOptions from './ModalOptions'
import ModalInput from './ModalInput'
import ModalButtons from './ModalButtons'
import { StakingPoolsObject } from './StakingPools'
import React from 'react'
Modal.setAppElement('#root')

export const contentStyles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  right: 'auto',
  bottom: 'auto',
  marginRight: '-50%',
  transform: 'translate(-50%, -50%)',
  border: '1px solid #ccc',
  background: `black`,
  borderRadius: '10px',
  borderColor: 'white',
  overflow: 'auto',
  WebkitOverflowScrolling: 'touch',
  outline: 'none',
  width: '600px',
  height: '500px',
}

export const overlayStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.70)',
}

export const ModalDisplay = ({ isOpen, close, selectedToken }) => {
  const [isOnWithdraw, setIsOnWithdraw] = useState(false)
  const obj = StakingPoolsObject.find((el) => el.id === selectedToken)

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={close}
      style={{
        overlay: overlayStyles,
        content: contentStyles,
      }}
    >
      <div className="flex justify-end">
        <button onClick={close}>
          <XIcon className="h-6 text-white" />
        </button>
      </div>
      <h1 className="text-2xl mb-4 -mt-4 text-white flex justify-center">
        {obj?.title}
      </h1>

      <div className="border-white border rounded-lg bg-transparent w-full h-96 flex flex-col overflow-hidden">
        <ModalOptions
          isOnWithdraw={isOnWithdraw}
          setIsOnWithdraw={setIsOnWithdraw}
          selectedToken={obj?.title}
        />
        <ModalInput selectedToken={obj?.title} />
        <ModalInfo selectedToken={obj?.title} isOnWithdraw={isOnWithdraw} />
        <br />
        <ModalButtons isOnWithdraw={isOnWithdraw} selectedToken={obj?.title} />
        <br />
      </div>
    </Modal>
  )
}
