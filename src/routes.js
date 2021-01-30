import React from 'react'
import {
    BrowserRouter,
    Route,
    Switch
} from "react-router-dom";
import Check from "./components/Check";
import About from './components/About'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Check} />
                <Route path="/about" component={About} />
            </Switch>
        </BrowserRouter>
    )
}
