const Balance = () => {
  const InformationBox = (props) => {
    return (
      <div className="w-full bg-dark  h-40  text-white rounded-xl flex flex-col items-center justify-between p-2 ">
        <div className="underline">{props.text}</div>
      </div>
    )
  }

  return (
    <div className="w-full mb-6 h-56  rounded-xl flex items-center justify-between p-6 space-x-4">
      <InformationBox text="APR" />
      <InformationBox text="BALANCE" />
      <InformationBox text="Rewards" />
    </div>
  )
}

export default Balance
