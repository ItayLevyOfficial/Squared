import { StakingPool } from './StakingPool'
import { selectedChain } from '../chains'
import { getListOfPoolBalances } from './useErc20Functions'

export const StakingPools = () => {
  const listofPoolBalances = getListOfPoolBalances()

  return (
    <div className="w-full h-full flex flex-col items-center justify-evenly">
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
