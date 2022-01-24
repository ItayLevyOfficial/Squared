import {AccountStatus} from './accountStatus'
import {EventStatus} from './EventStatus'

export const Body = ({className}) => {
    return <div className={`flex space-x-32 ${className}`}>
        <AccountStatus/>
        <div className="w-[0.5px] h-full bg-white"/>
        <EventStatus/>
    </div>
}