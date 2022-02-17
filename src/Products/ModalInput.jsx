import React from 'react'

export const ModalInput = ({
  selectedToken,
  className = '',
  value,
  handleChange,
  handleMaxClick,
}) => {
  return (
    <div
      className={`self-center w-10/12 h-10 bg-dark flex justify-between items-center rounded-lg p-6 ${className} `}
    >
      <button onClick={handleMaxClick}
        className="px-2 -ml-4 h-6 flex justify-center items-center border-transparent
       bg-darkPrimary text-white hover:bg-opacity-90 rounded-lg"
      >
        MAX
      </button>
      <input
        type="number"
        className="w-full  bg-dark mx-2 text-white outline-none text-xl"
        autoFocus
        onChange={(event) => handleChange(event.target.value)}
        dir="rtl"
        value={value}
      />
      <div className=" text-white text-sm -mr-4 w-auto right-0 ">
        {selectedToken}
      </div>
    </div>
  )
}
