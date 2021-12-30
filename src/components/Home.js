import React from 'react'
import Footer from './Footer'
import Chatbot from 'react-chatbot-kit';
import MessageParser from '../Messageparser';
import config from '../config';
import ActionProvider from '../Actionprovider';
import 'react-chatbot-kit/build/main.css'
function Home() {
    var maincontainerstyle = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        // backgroundImage: `url("images/gfgcore.jpg")`,
        // backgroundSize: "cover",
        // zIndex: "1",
        // backgroundRepeat: "no-repeat",
        // opacity: "0.5"
        backgroundColor: "#D9AFD9",
        backgroundImage: "linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%)"
    }
    const imgupdate = {
        height: "40vh"
    }

    return (
        <>
            <div className="" style={maincontainerstyle}>
                <h1 className="text-success text-4xl md:text-5xl leading-relaxed" style={{ fontSize: "4rem" }}>GeeksforGeeks Student Chapter</h1>
                <span style={{ fontSize: "2rem" }}>BVUCOEP</span>
                <div className="chatbot" style={{ position: "absolute", bottom: "0", right: "0", left: "81%" }}>
                    <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser} />
                </div>
            </div>


            {/* Events */}
            <div className="text-success text-4xl md:text-5xl leading-relaxed" style={{ fontSize: "2rem" }}>Our Events</div>
            <div className="events" style={{ display: 'flex', justifyContent: "space-around", marginTop: "5rem" }}>
                <div className="card bg-light mb-33" style={{ "maxWidth": "18rem", marginBottom: "5rem" }}>
                    <div className="card-header">Event-1</div>
                    <div className="card-body">
                        <h5 className="card-title">Primary card title</h5>
                        <p className="card-text">President</p>
                    </div>
                </div>
                <div className="card bg-light mb-33" style={{ "maxWidth": "18rem", marginBottom: "5rem" }}>
                    <div className="card-header">Event-2</div>
                    <div className="card-body">
                        <h5 className="card-title">Primary card title</h5>
                        <p className="card-text">President</p>
                    </div>
                </div>
                <div className="card bg-light mb-33" style={{ "maxWidth": "18rem", marginBottom: "5rem" }}>
                    <div className="card-header">Next Event</div>
                    <div className="card-body">
                        <h5 className="card-title">Primary card title</h5>
                        <p className="card-text">President</p>
                    </div>
                </div>
                <div className="card bg-light mb-33" style={{ "maxWidth": "18rem", marginBottom: "5rem" }}>
                    <div className="card-header">Next Event</div>
                    <div className="card-body">
                        <h5 className="card-title">Primary card title</h5>
                        <p className="card-text">President</p>
                    </div>
                </div>
            </div>
            {/* Team Members */}

            <div className="container team">
                <div className="text-success text-4xl md:text-5xl leading-relaxed" style={{ fontSize: "2rem", marginBottom: "5rem" }}>Great Team</div>
                <div className="teamcontainer">
                    <div className="row" style={{ marginBottom: "4rem" }}>
                        <div className="col">
                            <div className="card" style={{ "width": "18rem" }}>
                                <img src="images/Nihal.jpeg" className="card-img-top" alt="..." style={imgupdate} />
                                <div className="card-body">
                                    <h5 className="card-title" >Nihal Sarmalkar</h5>
                                    <p className="card-text">President</p>
                                    <a className="fa fa-instagram" style={{ marginRight: "1rem" }}></a>
                                    <a className="fa fa-linkedin"></a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card" style={{ "width": "18rem" }}>
                                <img src="images/Vinayak.jpg" className="card-img-top" alt="..." style={imgupdate} />
                                <div className="card-body">
                                    <h5 className="card-title" >Vinayak Gupta</h5>
                                    <p className="card-text">Vice-President</p>
                                    <a className="fa fa-instagram" style={{ marginRight: "1rem" }}></a>
                                    <a className="fa fa-linkedin"></a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card" style={{ "width": "18rem" }}>
                                <img src="images/bhavya.jpg" className="card-img-top" alt="..." style={imgupdate} />
                                <div className="card-body">
                                    <h5 className="card-title" >Bhavya Shah</h5>
                                    <p className="card-text">Technical Head</p>
                                    <a className="fa fa-instagram" style={{ marginRight: "1rem" }}></a>
                                    <a className="fa fa-linkedin"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{ marginBottom: "4rem" }}>
                        <div className="col">
                            <div className="card" style={{ "width": "18rem" }}>
                                <img src="images/Shubham.jpg" className="card-img-top" alt="..." style={imgupdate} />
                                <div className="card-body">
                                    <h5 className="card-title" >Shubham Pawaskar</h5>
                                    <p className="card-text">Events Head</p>
                                    <a className="fa fa-instagram" style={{ marginRight: "1rem" }}></a>
                                    <a className="fa fa-linkedin"></a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card" style={{ "width": "18rem" }}>
                                <img src="images/Siddharth.jpeg" className="card-img-top" style={imgupdate} alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title" >Siddharth Kabra</h5>
                                    <p className="card-text">Social Media Head</p>
                                    <a className="fa fa-instagram" style={{ marginRight: "1rem" }}></a>
                                    <a className="fa fa-linkedin"></a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card" style={{ "width": "18rem" }}>
                                <img src="images/Aditi.jpeg" className="card-img-top" style={imgupdate} alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Aditi Gupta</h5>
                                    <p className="card-text">Social Media Co-Head</p>
                                    <a className="fa fa-instagram" style={{ marginRight: "1rem" }}></a>
                                    <a className="fa fa-linkedin"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="card" style={{ "width": "18rem" }}>
                                <img src="images/Muskan.jpg" style={imgupdate} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title" >Muskan Nagpal</h5>
                                    <p className="card-text">PR and Outreach Head</p>
                                    <a className="fa fa-instagram" style={{ marginRight: "1rem" }}></a>
                                    <a className="fa fa-linkedin"></a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card" style={{ "width": "18rem" }}>
                                <img src="images/Akshita.jpg" style={imgupdate} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title" >Akshita Sugandhi</h5>
                                    <p className="card-text">Design Head</p>
                                    <a className="fa fa-instagram" style={{ marginRight: "1rem" }}></a>
                                    <a className="fa fa-linkedin"></a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card" style={{ "width": "18rem" }}>
                                <img src="images/shiv.jpg" style={imgupdate} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title" >Shivraj Sinha</h5>
                                    <p className="card-text">Design Co-Head</p>
                                    <a className="fa fa-instagram" style={{ marginRight: "1rem" }}></a>
                                    <a className="fa fa-linkedin"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <Footer />



        </>
    )
}

export default Home
