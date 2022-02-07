import React from "react"

export const ModalOptions = ({ isOnWithdraw, setIsOnWithdraw, selectedToken, className = '' }) => {
  const Option = ({ boolean, optionName, isDisabled }) => {
    return (
      <button
        disabled={isDisabled}
        className={`flex justify-center w-full py-1 text-white ${
          isOnWithdraw === boolean
            ? 'bg-dark opacity-100'
            : 'bg-black  opacity-70'
        }`}
        onClick={() => setIsOnWithdraw(!isOnWithdraw)}
      >
        {optionName} {selectedToken}
      </button>
    )
  }

  return (
    <div className={`w-full flex justify-between border-b border-white cursor-pointer ${className}}`}>
      <Option optionName="DEPOSIT" boolean={false} isDisabled={!isOnWithdraw} />
      <Option optionName="WITHDRAW" boolean={true} isDisabled={isOnWithdraw} />
    </div>
  )
}


