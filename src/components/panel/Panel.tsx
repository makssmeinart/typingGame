import cl from "./panel.module.css"
import {FiRefreshCw} from "react-icons/all";

export const Panel = () =>{
    return <div className={cl.wrapper}>
        <input autoFocus={true} className={`${cl.input} ${cl.border}`} type="text"/>
        <div className={`${cl.wpm} ${cl.border} ${cl.largeTab}`}>0 wpm</div>
        <div className={`${cl.time} ${cl.border} ${cl.largeTab}`}>1:00</div>
        <button className={`${cl.restart} ${cl.border}`}><FiRefreshCw/></button>
    </div>
}