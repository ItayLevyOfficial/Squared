import {BodyHeaderText} from './accountStatus'

const StatusBar = ({percent, text, backgroundColorClass, className}) => {
    const filledHeightClass = `h-${Math.round((percent / 100) * 12)}/12`

    return <div className={`flex flex-col h-36 ${className}`}>
        <div className={`flex items-end ${filledHeightClass}`}>
            <div className="bg-white h-full rounded-t-lg w-5"/>
            <div className="bg-white h-[0.5px] w-24"/>
        </div>
        <div className="flex h-2/3">
            <div className={`bg-dark ${backgroundColorClass} rounded-b-lg w-5`}/>
            <span className="font-number font-normal py-2 px-3">{percent}% {text}</span>
        </div>
    </div>
}

export const EventStatus = ({totalCommitments = 207_341, puffPrice = 8}) => {
    return <div className="flex flex-col">
        <BodyHeaderText title='Event Status' firstRow={`Total commitments: $${totalCommitments}`}
                        secondRow={`Conversion rate: $${puffPrice.toFixed(2)}/PUFF`}
        />
        <div className="flex flex-col h-36">
            <div className="flex items-end h-1/3">
                <div className="bg-white h-full rounded-t-lg w-5"/>
                <div className="bg-white h-[0.5px] w-24"/>
            </div>
            <div className="flex h-2/3">
                <div className="bg-dark h-full rounded-b-lg w-5"/>
                <span className="font-number font-normal py-2 px-3">64% Sold</span>
            </div>
        </div>
    </div>
}

