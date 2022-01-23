import BNBIcon from './BNB.svg'
import BUSDIcon from './busd.svg'

const DepositButton = ({tokenName, iconSrc, className = '', onClick}) => <button
    className={`w-80 py-3 font-medium text-lg rounded-xl flex ${className} hover:bg-opacity-95`} onClick={onClick}>
    <img src={iconSrc} alt="" className="ml-8 mr-4"/>
    Deposit / Withdraw&nbsp;{tokenName}
</button>

const BodyHeaderText = ({title, firstRow, secondRow}) => <>
    <h1 className="text-4xl font-medium tracking-wide mb-5">{title}</h1>
    <h2 className="font-number text-base mb-2">{firstRow}</h2>
    <h2 className="font-number text-base mb-5">{secondRow}</h2>
</>

export const AccountStatus = ({bnbCommitted = 0, busdCommitted = 0, handleBnbClick, handleBusdClick}) => {
    return <div className="flex flex-col">
        <BodyHeaderText title="Your Account Status" firstRow={`BNB committed: $${bnbCommitted}`}
                        secondRow={`BUSD committed: $${busdCommitted}`}/>
        <DepositButton backgroundColorClass="" iconSrc={BNBIcon} tokenName="BNB" className="mb-5 bg-[#F3BA2F]"
                       onClick={handleBnbClick}/>
        <DepositButton iconSrc={BUSDIcon} tokenName="BUSD" onClick={handleBusdClick} className="bg-white text-black"/>
    </div>
}

