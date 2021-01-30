import { Link } from "react-router-dom";
import Footer from './Footer'
import './About.css'
import Navbar from './Navbar'

export default function About() {
    return (
        <div>
            <Navbar />
            <br />
            <div className="container">
                <div className="row">
                    <div className="col-md-8" style={{ paddingTop: "10%" }}>
                        <h2>Allow us to introduce ourselves.</h2>
                        <br />
                        <h5>
                            Prazer! {'{ '}Portuguese for: it’s nice to meet you{' }'}. We are D.M. a new sparkling wine brand from Brazil, with our grapes grown in the Valley of the Vineyard in Southern Brazil. An entirely new class of sparkling wine. Try us and see what we mean.
                        </h5>
                    </div>
                    <div className="col-md-4">
                        <img src="https://dmbrut.com/images/final-home.jpg" className="img-fluid" alt="Responsive image" />
                        <br /> <br />
                        <h4>60%
                        Chardonnay<br />
                        40%
                        Pinot Noir,<br />
                        matured
                        12 months</h4>
                    </div>
                </div>
                <br /><br />
                <div className="row">
                    <div className="col-md-3">
                        <button className="btn shop">SHOP</button>
                    </div>
                    <div className="col-md-9">
                        <div className="row" >
                            <p className="line" style={{ animationDirection: "normal" }}>FREE SHIPING - FREE SHIPPING - FREE SHIPING - FREE SHIPPING - FREE SHIPPING - FREE SHIPPING - FREE SHIPPING</p>
                        </div>
                    </div>
                </div>
                <br /><br />
                <div className="row" >
                    <h5 className="t">Made in the traditional champagne method with a Brazilian touch, D.M. is sparkling wine that is uniquely flexible and versatile.
                    You can drink D.M. however you like, whenever you like. Each sip brings the beauty, culture, and expression that is the best of old and new world winemaking.
                         It’s what makes us unmistakably Brazilian.</h5>
                </div>
            </div>
            <br />
            <Footer />
        </div>
    )
}
