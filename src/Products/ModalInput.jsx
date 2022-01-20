const ModalInput = ({ selectedToken }) => {
  return (
    <div className="w-full flex justify-center mt-10">
      <div className="w-10/12 h-14 bg-dark flex justify-center rounded-lg">
        <div className="w-full flex justify-between items-center px-6">
          <button className="px-2 h-6 flex justify-center items-center border bg-black text-white hover:bg-primary hover:text-black  rounded-lg">
            MAX
          </button>
          <input
            type="number"
            className="w-full h-full bg-dark text-white -mr-4 outline-none text-xl"
            autoFocus
            dir="rtl"
          />
        </div>
        <div className="flex h-full justify-end items-center pr-2 text-white">
          {selectedToken}
        </div>
      </div>
    </div>
  )
}

export default ModalInput
