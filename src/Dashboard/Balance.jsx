const InformationBox = (props) => {
  return (
    <div className="w-80 bg-dark  h-40  text-white rounded-xl flex flex-col items-center justify-between p-2 ">
      <div className="underline">{props.text}</div>
    </div>
  )
}

const Balance = () => {
  return (
    <div className="w-full h-56 rounded-xl flex items-center justify-between p-6 space-x-2">
      <InformationBox text="APR" />
      <InformationBox text="BALANCE" />
      <InformationBox text="Rewards" />
    </div>
  )
}

export default Balance
