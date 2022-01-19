const StakingPool = (props) => {
  return (
    <div className="w-48 bg-[#2F8652] text-gray-100 h-40  border-transparent rounded-3xl flex flex-col items-center justify-between p-2 hover:-translate-y-1 transition ease-in-out duration-300 flex-shrink-0">
      <div className={`${props.font} underline`}>{props.title}</div>

      <div className="flex justify-between items-center w-full">
        <div className="flex flex-col items-center justify-center">
          <div className="text-gray-100">{props.amount}</div>
          <div className="text-xs text-gray-300">TVL</div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="text-gray-100 text-sm">{props.apr}</div>
          <div className="text-xs text-gray-300">{props.swap}</div>
        </div>
      </div>

      <button className=" bg-[#16473aec] w-11/12 p-2 text-sm rounded-lg">
        {props.button}
      </button>
    </div>
  )
}

export default StakingPool
