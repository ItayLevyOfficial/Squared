import React from "react"

export const ModalInput = ({ selectedToken, className = ''}) => {
  return (
    <div className={`self-center w-10/12 h-10 bg-dark flex justify-between items-center rounded-lg p-6 ${className} `}>
      <button className="px-2 -ml-4 h-6 flex justify-center items-center border-transparent bg-black text-white hover:bg-primary hover:text-black  rounded-lg">
        MAX
      </button>
      <input
        type="number"
        className="w-full  bg-dark mx-2 text-white outline-none text-xl"
        autoFocus
        dir="rtl"
      />
      <div className=" text-white text-sm -mr-4 w-auto right-0 ">
        {selectedToken}
      </div>
    </div>
  )
}
