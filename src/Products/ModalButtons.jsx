import React from "react"

const Button = ({ text }) => {
  return (
    <button className="text-white text-sm border-transparent hover:text-black bg-dark hover:bg-primary rounded-lg p-2  w-5/12">
      {text}
    </button>
  )
}

const ModalButtons = ({ isOnWithdraw, selectedToken }) => {
  return (
    <div className="w-full h-10 flex justify-center items-center space-x-4">
      {isOnWithdraw ? (
        <>
          <Button text={`REQUEST WITHDRAWL`} />
          <Button text={`WITHDRAW ${selectedToken}`} />
        </>
      ) : (
        <Button text={`DEPOSIT ${selectedToken}`} />
      )}
    </div>
  )
}

export default ModalButtons
