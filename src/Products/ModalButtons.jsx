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
  selectedTokenName,
  isConnected,
  connectWallet,
  handleSubmit,
  selectedTokenIndex,
  tokenAmount,
}) => {
  return (
    <div className="w-full h-10 flex justify-center items-center space-x-4">
      {isConnected ? (
        isOnWithdraw ? (
          <>
            <ModalButton text={`Request Withdrawal`} />
            <ModalButton text={`Withdraw ${selectedTokenName}`} />
          </>
        ) : (
          <ModalButton
            text={` ${
              selectedTokenName === 'SQRD' ? 'Stake' : 'Deposit'
            } ${selectedTokenName}`}
            onClick={
              isConnected
                ? () => handleSubmit({ tokenAmount, selectedTokenIndex })
                : connectWallet
            }
          />
        )
      ) : (
        <ModalButton text={`Connect Wallet`} onClick={connectWallet} />
      )}
    </div>
  )
}
