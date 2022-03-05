export const StakingPool = ({ el, openModal, balance }) => {
  const { name } = el

  return (
    <div
      onClick={() => openModal(name)}
      className="h-28 w-full p-2  rounded-lg flex justify-between items-center border border-white "
    >
      <div>{name}</div>
      <div>{balance}</div>
    </div>
  )
}
