import {BodyHeaderText} from './accountStatus'

export const EventStatus = ({totalCommitments = 207_341, puffPrice = 8}) => {
    return <div className="flex flex-col">
        <BodyHeaderText title='Event Status' firstRow={`Total commitments: $${totalCommitments}`}
                        secondRow={`Conversion rate: $${puffPrice.toFixed(2)}/PUFF`}
        />
    </div>
}

