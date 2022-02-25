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
