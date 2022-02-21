import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {Counter} from "./components";

ReactDOM.render(
    <React.StrictMode>
        <Counter/>
    </React.StrictMode>,
    document.getElementById('root')
)
