import Footer from "../Layouts/Footer"
import Header from "../Layouts/Header"
import Sidenav from "../Layouts/Sidenav"
import StakingPool from "./StakingPool"

const StakingPools = () => {
  return (
    <div className="w-full mb-6 text-gray-100 h-56 border-transparent rounded-3xl flex items-center justify-between p-6 space-x-4 overflow-x-scroll scrollbar scrollbar-thumb-green-200 scrollbar-track-gray-700 scrollbar-thin">
      <StakingPool
        title="MIM"
        font="text-2xl"
        apr="7%"
        amount="$300M"
        swap="BAKD/MIM"
        button="Depost MIM"
      />
      <StakingPool
        title="FTM"
        font="text-2xl"
        apr="7%"
        amount="$100M"
        swap="BAKD/FTM"
        button="Deposit FTM"
      />
      <StakingPool
        title="BAKD"
        font="text-2xl"
        apr="VOTE TO EARN"
        amount="$500M"
        swap="BAKD"
        button="STAKE AND VOTE"
      />
      <StakingPool
        title="BAKD SPOOKY LP"
        font="text-lg"
        apr="165%"
        amount="$148M"
        swap="BAKD/MIN"
        button="Depost Spooky LP"
      />
      <StakingPool
        title="BAKD SPIRIT LP"
        font="text-lg"
        apr="170%"
        amount="$148M"
        swap="BAKD/MIN"
        button="Depost Spirit LP"
      />
    </div>
  )
}

export default StakingPools
