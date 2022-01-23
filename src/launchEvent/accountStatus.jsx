import BNBIcon from './BNB.svg'

export const AccountStatus = () => {
    return <div className="flex flex-col">
        <h1 className="text-4xl font-medium tracking-wide mb-5">Your Account Status</h1>
        <h2 className="font-number text-base mb-2">BNB committed: $57</h2>
        <h2 className="font-number text-base mb-5">BUSD committed: $93</h2>
        <button className="w-80 bg-[#F3BA2F] py-3 font-medium text-lg rounded-xl flex">
            <img src={BNBIcon} alt="" className="ml-8 mr-4"/>
            Deposit / Withdraw BNB
        </button>
    </div>
}