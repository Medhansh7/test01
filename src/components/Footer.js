import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <div className="footer footer-main">
            <div className="row e">
                <div className="col-md-2 text-center" >
                    <div className="container">
                        <input type="text" style={{ width: "100%", color: "white", border: "solid white", backgroundColor: "rgb(56,56,56)", marginBottom: "10px" }} placeholder="Type in your email..." />
                    </div>

                </div>
                <div className="col-md-2 te">
                    <div className="container">
                        <button className="btn btn-primary">Subscribe</button></div>
                </div>

                <div className="col-md-8" >
                    <div className="row" >
                        <div className="col-md-6"></div>
                        <div className="col-md-2 te text-center">CC Dom Maria 2020</div>
                        <div className="col-md-2 te text-center">Facebook <br />Instagram</div>
                        <div className="col-md-2 te text-center">Privacy
                Shipping<br /> Policy<br />Disclaimer</div>

                    </div>
                </div>

            </div>
        </div>
    )
}
