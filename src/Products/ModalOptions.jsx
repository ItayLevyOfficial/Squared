const ModalOptions = ({
  isModalOnWidthdraw,
  setIsModalOnWidthdraw,
  selectedToken,
}) => {
  return (
    <div className="w-full flex justify-between border-b border-white cursor-pointer ">
      <div
        className={`flex justify-center w-full py-1 transition ease-in-out duration-200 ${
          isModalOnWidthdraw == false
            ? 'bg-dark text-white'
            : 'bg-black text-white opacity-70'
        }`}
        onClick={() => setIsModalOnWidthdraw(false)}
      >
        DEPOSIT {selectedToken}
      </div>
      <div
        className={`flex justify-center w-full py-1 transition ease-in-out duration-200 ${
          isModalOnWidthdraw == true
            ? 'bg-dark text-white'
            : 'bg-black text-white opacity-70'
        }`}
        onClick={() => setIsModalOnWidthdraw(true)}
      >
        WITHDRAW {selectedToken}
      </div>
    </div>
  )
}

export default ModalOptions
