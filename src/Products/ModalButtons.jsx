import React from "react"

export const ModalButton = ({ text }) => {
  return (
    <button className="text-white text-sm border-transparent hover:text-black bg-dark hover:bg-primary rounded-lg p-2  w-5/12">
      {text}
    </button>
  )
}

export const ModalButtons = ({ isOnWithdraw, selectedToken }) => {
  return (
    <div className="w-full h-10 flex justify-center items-center space-x-4">
      {isOnWithdraw ? (
        <>
          <ModalButton text={`REQUEST WITHDRAWAL`} />
          <ModalButton text={`WITHDRAW ${selectedToken}`} />
        </>
      ) : (
        <ModalButton text={`DEPOSIT ${selectedToken}`} />
      )}
    </div>
  )
}
