import { StakingPool } from './StakingPool'
import { selectedChain } from '../chains'
import { usePoolBalances } from './useErc20Functions'

export const StakingPools = ({ className, openModal }) => {
  const listofPoolBalances = usePoolBalances()

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
          openModal={() => openModal(index)}
          balance={listofPoolBalances[index]}
        />
      ))}
    </div>
  )
}
