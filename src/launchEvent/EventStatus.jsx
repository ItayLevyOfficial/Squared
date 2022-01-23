import {BodyHeaderText} from './accountStatus'

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
        </div>
    </div>
}

