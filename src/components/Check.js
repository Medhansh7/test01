import React from 'react'
import './Check.css'
import { Link } from "react-router-dom";

export default function Check() {
    return (
        <div className="text-center main">
            <h2 className="tex">I'm 21+</h2>
            <Link to="/about"><button className="square"></button></Link>
            <div className="text-center" style={{ paddingLeft: "14%" }}><i class="fa fa-mouse-pointer fa-3x" aria-hidden="true"></i>
            </div>
        </div>
    )
}
