import {useRef} from "react";
import cl from "./textBox.module.css"
// Data
import {textData} from "../../logic/textData";

export const TextBox = () => {
    const textDataRef = useRef(textData())

    const renderTextData = () => {
        return textDataRef.current.map(i => <span>{i}</span>)
    }

    return (
        <div className={cl.wrapper}>
            <p>{renderTextData()}</p>
        </div>
    )
}