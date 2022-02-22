import React from 'react'

export const ModalInput = ({
  selectedTokenIndex,
  className = '',
  value,
  handleChange,
  handleMaxClick,
}) => {
  return (
    <div
      className={`self-center w-10/12 h-10 bg-dark flex justify-between items-center rounded-lg p-6 ${className} `}
    >
      <div className=" text-white text-sm  w-auto left-0 ">
        {selectedTokenIndex}
      </div>
      <input
        type="number"
        className="w-full bg-dark mr-6 ml-2 text-white outline-none text-xl"
        autoFocus
        onChange={(event) => handleChange(event.target.value)}
        value={value}
      />

      <button
        onClick={handleMaxClick}
        className="px-2 -ml-4 h-6 flex justify-center items-center border-transparent
       bg-darkPrimary text-white hover:bg-opacity-90 rounded-lg"
      >
        MAX
      </button>
    </div>
  )
}
