import {AccountStatus} from './accountStatus'
import {EventStatus} from './EventStatus'

export const Body = () => {
    return <div className={`flex space-x-32`}>
        <AccountStatus/>
        <div className="w-[0.5px] h-full bg-white"/>
        <EventStatus/>
    </div>
}