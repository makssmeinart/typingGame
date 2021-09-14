import React from 'react';
import cl from "./app.module.css"
import {Panel} from "./components/panel/Panel";
import {TextBox} from "./components/textBox/TextBox";

type appTypes = {}

export const App: React.FC<appTypes> = () => {


    return (
        <div className={cl.wrapper}>
            <h1 className={cl.header}>Typing Game</h1>
            <div className={cl.game}>
                <TextBox />
                <Panel />
            </div>
        </div>
    )
}