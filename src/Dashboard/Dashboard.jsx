import Footer from '../Layouts/Footer'
import Header from '../Layouts/Header'
import ProductPool from '../Products/LiquidityPool'
import Balance from './Balance'
import Sidenav from '../Layouts/Sidenav'
import { StakingPoolsObject } from '../Products/StakingPools'

const Dashboard = () => {
  return (
    <div className="w-full h-full flex justify-center relative">
      <Sidenav />
      <div className="absolute left-72 flex flex-col justify-between items-end w-[1050px]">
        <Header />
        <Balance />
        <div className="w-full">
          <span className="text-white text-3xl opacity-90">
            Liquidity Pools
          </span>
          <div className="border-b w-full border-primary opacity-80 mb-4"></div>
          {StakingPoolsObject.map((el) => (
            <ProductPool el={el} key={el.id} />
          ))}
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Dashboard
