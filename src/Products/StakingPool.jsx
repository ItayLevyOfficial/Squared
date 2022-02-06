export const StakingPool = ({ el, openModal }) => {
  const { title, amount, apr, swap, button } = el
  return (
    <div className="group w-56 h-40  bg-dark text-white border-transparent rounded-xl flex flex-col items-center justify-between p-2 flex-shrink-0">
      <div className="text-xl">{title}</div>

      <div className="flex justify-between items-center w-full ">
        <div className="flex flex-col items-center justify-center">
          <div className="text-sm">{amount}</div>
          <div className="text-xs ">TVL</div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className=" text-sm">{apr}</div>
          <div className="text-xs ">{swap}</div>
        </div>
      </div>

      <button
        onClick={() => openModal(title)}
        className=" bg-lightDark hover:text-gold w-11/12 p-2 text-md rounded-lg"
      >
        {button}
      </button>
    </div>
  )
}
