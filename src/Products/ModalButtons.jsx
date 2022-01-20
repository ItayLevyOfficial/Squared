const ModalButtons = ({ isModalOnWidthdraw, selectedToken }) => {
  return (
    <>
      {!isModalOnWidthdraw ? (
        <div className="w-full h-10 flex justify-center items-center space-x-4">
          <button className="text-white border border-primary hover:text-black hover:bg-primary rounded-lg px-4">
            DEPOSIT {selectedToken}
          </button>
        </div>
      ) : (
        <div className="w-full h-10 flex justify-center items-center space-x-4">
          <button className="text-white border border-primary hover:text-black hover:bg-primary rounded-lg px-4">
            REQUEST WITHDRAWL
          </button>
          <button className="text-white border rounded-lg px-4 opacity-70">
            WITHDRAW {selectedToken}
          </button>
        </div>
      )}
    </>
  )
}

export default ModalButtons
