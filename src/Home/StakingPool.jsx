export const StakingPool = ({ token, openModal, balance }) => {
  const { name } = token

  return (
    <div
      onClick={() => openModal(name)}
      className="space-x-10 py-2 px-6 w-full rounded-xl flex items-center mb-4 border-solid border-[0.5px] border-white  border-opacity-50 hover:border-primary hover:cursor-pointer "
    >
      <div className="flex items-center space-x-4 flex-1 self-center font-bold text-lg">
        {name}
      </div>
      <div className=" flex justify-evenly w-10/12 space-x-10">
        <PoolInformation title={'Your Balance'} balance={balance} />
        <PoolInformation title={'Yield'} balance={'0%'} />
        <PoolInformation title={'TVL'} balance={balance} />
      </div>
    </div>
  )
}

const PoolInformation = ({ title, balance }) => {
  return (
    <div className="flex flex-col items-center justify-start space-y">
      <div className="font-baloo">{title}</div>
      <div className="font-number">{balance}</div>
    </div>
  )
}
