export const StakingPool = ({ el, openModal }) => {
  const { name } = el
  return (
    <div className="group w-56 h-40 bg-dark text-white border-transparent rounded-xl flex flex-col items-center justify-between p-2 flex-shrink-0">
      <div className="text-xl">{name}</div>

      <div className="flex justify-between items-center w-full ">
        <div className="flex flex-col items-center justify-center">
          <div className="text-sm">$4M</div>
          <div className="text-xs ">TVL</div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className=" text-sm">7%</div>
          <div className="text-xs ">PUFF</div>
        </div>
      </div>

      <button
        onClick={() => openModal(name)}
        className=" bg-lightDark hover:text-gold w-11/12 text-sm p-2 text-md rounded-lg"
      >
        Deposit {name}
      </button>
    </div>
  )
}
