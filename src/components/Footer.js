import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <div className="footer footer-main">
            <div className="row e">
                <div className="col-md-2 text-center"><input type="text" placeholder="Type in your email..." /></div>
                <div className="col-md-1 te"><button className="btn btn-primary">Subscribe</button></div>
                <div className="col-md-5"></div>
                <div className="col-md-1 te">CC Dom Maria 2020</div>
                <div className="col-md-1 te text-center">Facebook <br />Instagram</div>
                <div className="col-md-1 te text-center">Privacy
                Shipping<br /> Policy<br />Disclaimer</div>

            </div>
        </div>
    )
}
