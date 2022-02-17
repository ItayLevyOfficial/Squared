import React from 'react'

export const ModalButton = ({ text, onClick, tokenAmount }) => {
  return (
    <button
      className="text-white border-transparent bg-darkPrimary hover:bg-opacity-95 rounded-lg p-2  w-5/12"
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export const ModalButtons = ({
  isOnWithdraw,
  selectedToken,
  isConnected,
  connectWallet,
  commitAssets,
}) => {
  return (
    <div className="w-full h-10 flex justify-center items-center space-x-4">
      {isConnected ? (
        isOnWithdraw ? (
          <>
            <ModalButton text={`REQUEST WITHDRAWAL`} />
            <ModalButton text={`WITHDRAW ${selectedToken}`} />
          </>
        ) : (
          <ModalButton
            text={`DEPOSIT ${selectedToken}`}
            onClick={commitAssets}
          />
        )
      ) : (
        <ModalButton text={`Connect Wallet`} onClick={connectWallet} />
      )}
    </div>
  )
}
