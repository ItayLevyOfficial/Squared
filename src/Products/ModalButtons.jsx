import React from 'react'

export const ModalButton = ({ text, onClick }) => {
  return (
    <button
      className="text-white border-transparent bg-darkPrimary hover:bg-opacity-95 rounded-lg p-2  w-5/12 text-lg font-medium"
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export const ModalButtons = ({
  isOnWithdraw,
  selectedTokenIndex,
  isConnected,
  connectWallet,
  commitAssets,
}) => {
  return (
    <div className="w-full h-10 flex justify-center items-center space-x-4">
      {isConnected ? (
        isOnWithdraw ? (
          <>
            <ModalButton text={`Request Withdrawal`} />
            <ModalButton text={`Withdraw ${selectedTokenIndex}`} />
          </>
        ) : (
          <ModalButton
            text={`Deposit ${selectedTokenIndex}`}
            onClick={commitAssets}
          />
        )
      ) : (
        <ModalButton text={`Connect Wallet`} onClick={connectWallet} />
      )}
    </div>
  )
}
