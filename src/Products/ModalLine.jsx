import React from "react"

const ModalLine = ({ title, amount, selectedToken }) => {
  return (
    <div className="w-full px-6 flex justify-between items-center">
      <span>{title}</span>

      <span className="flex-1 overflow-hidden h-8 -mb-3 px-2">
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
      </span>

      <div className="flex justify-center items-center space-x-2">
        <div>{amount}</div>
        <div className="flex">{selectedToken}</div>
      </div>
    </div>
  )
}

export default ModalLine
