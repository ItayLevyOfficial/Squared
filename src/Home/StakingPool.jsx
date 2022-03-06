export const StakingPool = ({ el, openModal, balance }) => {
  const { name } = el

  return (
    <div
      onClick={() => openModal(name)}
      className="space-x-10 py-2 px-6 w-full rounded-xl flex items-center mb-4 border-solid border-[0.5px] border-white  border-opacity-50 hover:border-primary hover:cursor-pointer "
    >
      <div className="flex items-center space-x-4 flex-1 self-center">
        <div>{name}</div>
      </div>
      <div className=" flex justify-evenly w-10/12 space-x-10">
        <PoolInformation balance={balance} />
        <div className="flex flex-col items-center justify-start space-y-2">
          <div>Yield</div>
          <div>0%</div>
        </div>
        <div className="flex flex-col items-center justify-start space-y-2">
          <div>TVL</div>
          <div>0</div>
        </div>
      </div>
    </div>
  )
}

const PoolInformation = ({ balance }) => {
  return (
    <div className="flex flex-col items-center justify-start space-y-2">
      <div className="font-baloo">Balance</div>
      <div className="font-number">{balance}</div>
    </div>
  )
}
