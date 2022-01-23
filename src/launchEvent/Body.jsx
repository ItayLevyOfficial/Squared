import {AccountStatus} from './accountStatus'

export const Body = () => {
    return <div className={`flex items-center space-x-32`}>
        <AccountStatus/>
        <div className="w-[0.5px] h-full bg-white"/>
    </div>
}