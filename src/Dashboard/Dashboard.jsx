import Footer from "../Layouts/Footer"
import Header from "../Layouts/Header"
import Sidenav from "../Layouts/Sidenav"
import ProductPools from "../Products/LiquidityPools"
import ProductPool from "../Products/LiquidityPool"
import { InformationCircleIcon } from "@heroicons/react/outline"
import Balance from "./Balance"

const Dashboard = () => {
  return (
    <div className="w-full h-screen flex justify-center">

      <Sidenav />

      <div className="flex flex-col justify-between ml-6 w-9/12">
        <Header />
        <Balance />
        <ProductPools
          column1="Asset"
          column2="Total Assets"
          column3="Withdrawls"
          column4="Manage"
          children={
            <ProductPool
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

export default Dashboard
