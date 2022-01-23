import {BodyHeaderText} from './accountStatus'

const StatusBar = ({percent, text, backgroundColorClass, className}) => <div
    className={`flex flex-col h-36 ${className}`}>
    <div className={`flex items-end flex-1`}>
        <div className="bg-white h-full rounded-t-lg w-5"/>
        <div className="bg-white h-[0.5px] w-24"/>
    </div>
    <div className={`flex`} style={{height: `${percent}%`}}>
        <div className={`bg-dark ${backgroundColorClass} h-full rounded-b-lg w-5`}/>
        <span className="font-number font-normal py-2 px-3">{percent}% {text}</span>
    </div>
</div>

export const EventStatus = ({totalCommitments = 207_341, puffPrice = 8}) => {
    return <div className="flex flex-col">
        <BodyHeaderText title='Event Status' firstRow={`Total commitments: $${totalCommitments}`}
                        secondRow={`Conversion rate: $${puffPrice.toFixed(2)}/PUFF`}
        />
        <div className="flex">
            <StatusBar percent={54} text="Sold" backgroundColorClass="bg-dark"/>
        </div>
    </div>
}

