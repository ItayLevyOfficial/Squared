import BNBIcon from './BNB.svg'
import BUSDIcon from './busd.svg'

const DepositButton = ({backgroundColor, tokenName, iconSrc, className, textColor = "white"}) => <button
    className={`w-80 bg-[${backgroundColor}] py-3 font-medium text-lg rounded-xl flex ${className} text-${textColor}`}>
    <img src={iconSrc} alt="" className="ml-8 mr-4"/>
    Deposit / Withdraw&nbsp;{tokenName}
</button>


export const AccountStatus = () => {
    return <div className="flex flex-col">
        <h1 className="text-4xl font-medium tracking-wide mb-5">Your Account Status</h1>
        <h2 className="font-number text-base mb-2">BNB committed: $57</h2>
        <h2 className="font-number text-base mb-5">BUSD committed: $93</h2>
        <DepositButton backgroundColor="#F3BA2F" iconSrc={BNBIcon} tokenName="BNB" className="mb-5"/>
        <DepositButton backgroundColor="#fff" iconSrc={BUSDIcon} tokenName="BUSD" textColor="black"/>
    </div>
}

