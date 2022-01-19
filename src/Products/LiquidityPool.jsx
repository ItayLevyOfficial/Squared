const LiquidityPool = (props) => {
  return (
    <div className="flex justify-evenly">
      <div className="p-2 whitespace-nowrap">
        <div className="flex items-center">
          <div className="font-medium text-gray-100">{props.column1}</div>
        </div>
      </div>
      <div className="p-2 whitespace-nowrap">
        <div className="text-left text-gray-100">{props.column2}</div>
      </div>
      <div className="p-2 whitespace-nowrap">
        <div className="text-left font-medium text-gray-100">
          {props.column3}
        </div>
      </div>
      <div className="p-2 whitespace-nowrap">
        <div className="text-lg text-center">{props.column4}</div>
      </div>
    </div>
  )
}

export default LiquidityPool
