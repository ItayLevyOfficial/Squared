import { useFetchBalance } from './usePoolContracts'

export const StakingPool = ({ el, openModal }) => {
  const { name } = el
  const [
    assetsBalance,
    sqrdLpBalance,
    sqrdBalance,
    ethBalance,
    usdcBalance,
    totalValueLocked,
  ] = useFetchBalance()

  return (
    <div className="group w-56 h-full text-white border-transparent rounded-xl flex flex-col items-center justify-between p-2 flex-shrink-0">
      <div className="flex justify-start items-center space-x-4 mb-4">
        <div className="text-2xl text-white font-medium">{name}</div>
        <div className="flex space-x-2">
          <div className="flex flex-col items-center justify-center">
            <div className="text-sm ">TVL:</div>
            <div className="text-sm ">APR:</div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="text-sm">
              {name === 'ETH'
                ? ethBalance
                : name === 'USDC'
                ? usdcBalance
                : name === 'SQRD'
                ? sqrdBalance
                : sqrdLpBalance}
            </div>
            <div className="text-sm">0%</div>
          </div>
        </div>
      </div>
      <button
        onClick={() => openModal(name)}
        className="bg-darkPrimary hover:bg-opacity-95 text-white w-[180px] text-md p-2 text-md rounded-lg"
      >
        {name === 'SQRD' ? 'Stake and Vote' : 'Deposit/Withdraw'}
      </button>
    </div>
  )
}
