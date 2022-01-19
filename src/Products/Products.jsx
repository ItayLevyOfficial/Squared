import StakingPools from "./StakingPools"
import LiquidityPools from "./LiquidityPools"
import LiquidityPool from "./LiquidityPool"
import Sidenav from "../Layouts/Sidenav"
import Header from "../Layouts/Header"
import Footer from "../Layouts/Footer"
import { InformationCircleIcon } from "@heroicons/react/outline"

const Products = () => {
  return (
    <div className="w-full h-screen flex justify-center">
      <Sidenav />
      <div className="flex flex-col justify-between ml-6 w-9/12">
        <Header />
        <StakingPools />
        <LiquidityPools
          column1="DEPOSITS"
          column2="APR on Deposits"
          column3="My Vote"
          column4="APR on Vote"
          children={
            <LiquidityPool
              column1="$140M"
              column2="14%"
              column3="NONE"
              column4={
                <InformationCircleIcon className="h-6 cursor-pointer text-gray-100" />
              }
            />
          }
        />
        <Footer />
      </div>
    </div>
  )
}

export default Products
