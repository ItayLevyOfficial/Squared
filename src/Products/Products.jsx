import { StakingPool } from './StakingPool'
import { StakingPoolsObject } from './StakingPools'
import { Information } from './Information'
import { PageWrapper } from '../layouts/PageWrapper'

export const Products = () => {
  return (
    <PageWrapper>
      <div className="mt-20">
        <div className="w-full flex items-center justify-evenly overflow-x-scroll ">
          {StakingPoolsObject.map((el) => (
            <StakingPool el={el} key={el.id} openModal={() => open(el.id)} />
          ))}
        </div>
        <Information />
      </div>
    </PageWrapper>
  )
}
