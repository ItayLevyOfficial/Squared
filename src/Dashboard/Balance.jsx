const InformationBox = (props) => {
  return (
    <div className="w-72 bg-dark h-40 text-white rounded-xl flex flex-col items-center justify-between p-2 ">
      <div className="underline">{props.text}</div>
    </div>
  )
}

export const Balance = ({ title, balance, rewards, apr, action }) => {
  return (
    <div className="w-full h-56 rounded-xl flex items-center justify-evenly p-6 space-x-2">
      <InformationBox
        title={title}
        balance={balance}
        rewards={rewards}
        apr={apr}
        action={action}
      />
    </div>
  )
}
