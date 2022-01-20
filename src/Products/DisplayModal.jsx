import Modal from 'react-modal'
import { XIcon } from '@heroicons/react/outline'
import { useState } from 'react'

Modal.setAppElement('#root')

const contentStyles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  right: 'auto',
  bottom: 'auto',
  marginRight: '-50%',
  transform: 'translate(-50%, -50%)',
  border: '1px solid #ccc',
  background: 'rgb(22, 71, 58)',
  borderRadius: '10px',
  borderColor: 'white',
  overflow: 'auto',
  WebkitOverflowScrolling: 'touch',
  borderRadius: '20px',
  outline: 'none',
  padding: '20px',
  width: '600px',
  height: '500px',
}

const overlayStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(47, 134, 82, 0.70)',
}

const DisplayModal = ({ modalIsOpen, closeModal, selectedPool }) => {
  const [modalPage, setModalPage] = useState(false)

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={{
        overlay: overlayStyles,
        content: contentStyles,
      }}
    >
      <div className="flex justify-end">
        <button onClick={closeModal}>
          <XIcon className="h-6 text-gray-100" />
        </button>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="p-2 text-2xl text-gray-100">{selectedPool}</div>
        <div className="border-white border rounded-lg bg-transparent w-full h-full flex flex-col overflow-hidden ">
          <div className="w-full flex justify-between border-b cursor-pointer ">
            <div
              className={`flex justify-center w-full ${
                modalPage == false
                  ? 'bg-black text-white'
                  : 'bg-transparent text-gray-200 opacity-70'
              }`}
              onClick={() => setModalPage(false)}
            >
              Deposit {selectedPool}
            </div>
            <div
              className={`flex justify-center w-full ${
                modalPage == true
                  ? 'bg-black text-white'
                  : 'bg-transparent text-gray-200 opacity-70'
              }`}
              onClick={() => setModalPage(true)}
            >
              Withdraw {selectedPool}
            </div>
          </div>

          <div className="w-full flex justify-center mt-10">
            <div className="w-10/12 h-14 bg-[#2F8652] flex justify-center rounded-lg">
              <div className="w-full flex justify-between items-center px-6">
                <button className="p-2 h-6 flex justify-center items-center border bg-[#16473a] text-white rounded-lg">
                  MAX
                </button>
                <input
                  type="number"
                  className="w-full h-full bg-[#2F8652] mx-2 px-2 outline-none text-xl"
                  autoFocus
                  dir="rtl"
                />
              </div>
            </div>
          </div>

          {modalPage ? (
            <div className="text-white text-sm mt-2">
              <div className="w-full px-6 flex justify-between">
                <div>Deposited</div>
                <div className="flex-1 flex justify-center">
                  .................................................................
                </div>
                <div className="flex justify-center items-center space-x-2">
                  <div>0.00</div>
                  <div className="flex">{selectedPool}</div>
                </div>
              </div>
              <div>x</div>
              <div>x</div>
              <div>x</div>
            </div>
          ) : (
            <div className="text-white text-sm">
              <div>x</div>
              <div>x</div>
              <div>x</div>
              <div>x</div>
              <div>x</div>
              <div>x</div>
            </div>
          )}
        </div>
      </div>
    </Modal>
  )
}

export default DisplayModal
