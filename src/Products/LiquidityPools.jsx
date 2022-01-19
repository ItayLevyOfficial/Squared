const LiquidityPools = (props) => {
  return (
    <div className="p-3 bg-[#2F8652] rounded-xl mb-6">
      <div className="overflow-y-scroll">
        <div className="table-auto w-full">
          <div className="text-xs font-semibold uppercase text-gray-100 bg-[#2F8652]">
            <div className="flex justify-evenly">
              <div className="p-2 whitespace-nowrap">
                <div className="font-semibold text-left">{props.column1}</div>
              </div>
              <div className="p-2 whitespace-nowrap">
                <div className="font-semibold text-left">{props.column2}</div>
              </div>
              <div className="p-2 whitespace-nowrap">
                <div className="font-semibold text-left">{props.column3}</div>
              </div>
              <div className="p-2 whitespace-nowrap">
                <div className="font-semibold text-center">{props.column4}</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start h-72 overflow-y-scroll ">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LiquidityPools
