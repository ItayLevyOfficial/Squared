import {AddressButton} from "../Layouts/Header";
import Popover from "@mui/material/Popover"
import {useEffect, useRef, useState} from "react";

export const LaunchEventHeader = ({className = ''}) => {
    return <div className={`flex items-center w-full justify-between ${className}`}>
        <div className="flex">
            <div className="w-0.5 h-50 bg-primary"/>
            <div className="w-5"/>
            <div className="flex flex-col space-y-2 font-bold tracking-widest">
                <h1 className="text-white text-5xl">PUFF</h1>
                <div className="flex items-center">
                    <h2 className="text-primary text-xl font-light mr-1.5">DEGENESIS EVENT</h2>
                    <InfoIcon className="hover:fill-primary fill-white w-5 h-5"/>
                </div>
            </div>
        </div>
        <div className="flex items-center">
            <h2 className="text-primary text-lg tracking-wide font-light mr-10">4 DAYS 23 HOURS 59 MINUTES REMAIN</h2>
            <AddressButton/>
        </div>
    </div>
}

const InfoIcon = (props) => {
    const [anchor, setAnchor] = useState()
    const [show, setShow] = useState(false)

    useEffect( () => {
        setShow(true)
    }, [anchor])
    return <>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...props} onClick={event => {
            setAnchor(event.currentTarget)
        }
        }>
            <path
                d="M13.25 7c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25zm10.75 5c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-2 0c0-5.514-4.486-10-10-10s-10 4.486-10 10 4.486 10 10 10 10-4.486 10-10zm-13-2v2h2v6h2v-8h-4z"/>
        </svg>
        <Popover anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
                 transformOrigin={{
                     vertical: 'top',
                     horizontal: 'left',
                 }} open={show}>content</Popover>
    </>
}