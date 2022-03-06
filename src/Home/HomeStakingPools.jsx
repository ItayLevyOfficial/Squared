import { StakingPool } from './StakingPool'
import { selectedChain } from '../chains'
import { GetListOfPoolBalances } from './useErc20Functions'

export const StakingPools = ({ className, open }) => {
  const listofPoolBalances = GetListOfPoolBalances()

  return (
    <div
      className={`${className} h-full flex flex-col items-center justify-evenly`}
    >
      <div className="w-full text-4xl font-medium tracking-wide mb-8">
        Staking Pools
      </div>
      {selectedChain.tokens.map((el, index) => (
        <StakingPool
          el={el}
          key={index}
          openModal={() => open(index)}
          balance={listofPoolBalances[index]}
        />
      ))}
    </div>
  )
}
