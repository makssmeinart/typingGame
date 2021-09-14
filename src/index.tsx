import React from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import {App} from "./App"
import state from "./logic/state"

const rerenderEntireTree = () => {
    ReactDOM.render(
        <App />,
        document.getElementById('root')
    );
}

state.subscribe(rerenderEntireTree)

rerenderEntireTree()
