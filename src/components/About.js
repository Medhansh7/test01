import { Link } from "react-router-dom";
import Footer from './Footer'
import './About.css'


export default function About() {
    return (
        <div>
            <div className="row flex-column-reverse flex-lg-row" style={{ marginLeft: "3px", marginRight: "3px" }}>
                <div className="col-md-9 " >
                    <div className="tes">Allow us to introduce ourselves.</div>
                    <div className="tes">
                        Prazer! {'{ '}Portuguese for: it’s nice to meet you{' }'}. We are D.M. a new sparkling wine brand from Brazil, with our grapes grown in the Valley of the Vineyard in Southern Brazil. An entirely new class of sparkling wine. Try us and see what we mean.
                        </div>
                    <br />
                    <div className="row ">
                        <div className="col-md-4 st">
                            <button className="btn shop">SHOP</button>
                        </div>
                        <div className="col-md-8">
                            <div className="row" >
                                <marquee width="100%" direction="right" height="100px" loop="infinite">
                                    <div className="track row">
                                        <p className="line " >FREE SHIPING - FREE SHIPPING - FREE SHIPING - FREE SHIPPING - FREE SHIPPING - FREE SHIPPING - FREE SHIPPING - FREE SHIPPING - FREE SHIPPING</p>
                                    </div>
                                </marquee>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="row" >
                        <div className="tes">Made in the traditional champagne method with a Brazilian touch, D.M. is sparkling wine that is uniquely flexible and versatile.
                        You can drink D.M. however you like, whenever you like. Each sip brings the beauty, culture, and expression that is the best of old and new world winemaking.
                         It’s what makes us unmistakably Brazilian.</div>
                    </div>
                </div>

                <div className="col-md-3 text-center">
                    <div className="st  ">
                        <div className="row">
                            <img src="https://dmbrut.com/images/final-home.jpg" className="img-fluid i" alt="Responsive image" />
                            <br />
                            <div style={{ marginTop: "1.3vw", textAlign: "right", fontSize: "3vh" }}>60%
                        Chardonnay<br />
                        40%
                        Pinot Noir,<br />
                        matured
                        12 months</div>
                        </div>

                    </div>
                </div>
            </div>
            <br />
            <Footer />
        </div>
    )
}


// combinedReducer