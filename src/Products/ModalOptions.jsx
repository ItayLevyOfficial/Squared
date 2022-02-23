import React from 'react'

export const ModalOptions = ({
  isOnWithdraw,
  setIsOnWithdraw,
  selectedTokenName,
  className = '',
}) => {
  const Option = ({ boolean, optionName, isDisabled }) => {
    return (
      <button
        disabled={isDisabled}
        className={`flex justify-center w-full py-2 border rounded-xl text-white ${
          isOnWithdraw === boolean
            ? 'bg-dark opacity-100'
            : 'bg-black  opacity-70'
        }`}
        onClick={() => setIsOnWithdraw(!isOnWithdraw)}
      >
        {optionName} {selectedTokenName}
      </button>
    )
  }

  return (
    <div
      className={`w-full flex justify-between border-b-2 border-white cursor-pointer ${className}}`}
    >
      <Option optionName="DEPOSIT" boolean={false} isDisabled={!isOnWithdraw} />
      <Option optionName="WITHDRAW" boolean={true} isDisabled={isOnWithdraw} />
    </div>
  )
}
