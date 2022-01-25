const LiquidityPool = ({ el, openModal }) => {
  const { title, amount, apr, button } = el

  return (
    <div className="group bg-dark mb-6 rounded-3xl flex flex-col w-full">
      <div className="flex justify-between items-center ">
        <div className="text-white text-xl ml-6 group-hover:text-gold duration-300 transition ease-in-out">
          {title}
        </div>
        <div className="space-x-4 flex items-center mr-6 my-2">
          <div className="flex items-center space-x-2">
            <div className="text-primary text-md">TVL</div>
            <div className="text-primary text-2xl">{amount}</div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="text-primary text-md">APR</div>
            <div className="text-white text-2xl">{apr}</div>
          </div>
        </div>
      </div>

      <div className="border border-b-primary w-[98%] mb-2 self-center" />

      <div className="w-full mb-2 flex justify-between items-center">
        <button
          onClick={() => openModal(title)}
          className="ml-6 justify-center items-center bg-lightDark group-hover:bg-black ease-in-out transition duration-200 text-white rounded-lg p-2 w-32 "
        >
          {button}
        </button>

        <div className="w-44 h-10 bg-lightDark flex justify-between items-center rounded-lg p-6 mr-6">
          <button className="px-2 -ml-4 h-6 flex justify-center items-center border-transparent bg-black text-white hover:bg-primary hover:text-black  rounded-lg">
            MAX
          </button>
          <input
            defaultValue={0}
            type="number"
            className="w-full bg-lightDark mx-2 text-white outline-none text-xl"
            dir="rtl"
          />
          <div className=" text-white text-sm -mr-4 w-auto right-0 ">Votes</div>
        </div>
      </div>
    </div>
  )
}

export default LiquidityPool
