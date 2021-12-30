import React from 'react'
import Footer from './Footer'

function Gallery() {
    const stylecontainer = {
        paddingTop: "56px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // height: "100vh",
        marginTop: "2rem"
    }

    return (
        <>
            <div className="container" style={stylecontainer}>
                <div className="ev1images" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <h2>Event 1</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit autem, architecto aliquid inventore rerum impedit voluptas maxime iste molestias sequi perferendis numquam in eum cum, reprehenderit nulla vitae. Ab, totam.F</p>
                    {/* <img style={{ height: "60vh" }} src="images/gfgcore.jpg" alt="" /> */}
                    <div className="maincaraousel" style={{ width: "50vw" }}>
                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-100" style={{ height: "80vh" }} src="images/gfgcore.jpg" alt="First slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" style={{ height: "80vh" }} src="images/gfgcore.jpg" alt="Second slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" style={{ height: "80vh" }} src="images/gfgcore.jpg" alt="Third slide" />
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>

                    {/* Event 2 */}
                    <h2 style={{ marginTop: "4rem" }}>Event 2</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit autem, architecto aliquid inventore rerum impedit voluptas maxime iste molestias sequi perferendis numquam in eum cum, reprehenderit nulla vitae. Ab, totam.F</p>
                    {/* <img style={{ height: "60vh" }} src="images/gfgcore.jpg" alt="" /> */}
                    <div className="maincaraousel" style={{ width: "50vw" }}>
                        <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators2" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselExampleIndicators2" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators2" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-100" style={{ height: "80vh" }} src="images/gfgcore.jpg" alt="First slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" style={{ height: "80vh" }} src="images/gfgcore.jpg" alt="Second slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" style={{ height: "80vh" }} src="images/gfgcore.jpg" alt="Third slide" />
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleIndicators2" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleIndicators2" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>

                    {/* Event-3 */}
                    <h2 style={{ marginTop: "4rem" }}>Event 3</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit autem, architecto aliquid inventore rerum impedit voluptas maxime iste molestias sequi perferendis numquam in eum cum, reprehenderit nulla vitae. Ab, totam.F</p>
                    {/* <img style={{ height: "60vh" }} src="images/gfgcore.jpg" alt="" /> */}
                    <div className="maincaraousel" style={{ width: "50vw" }}>
                        <div id="carouselExampleIndicators3" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators3" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselExampleIndicators3" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators3" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-100" style={{ height: "80vh" }} src="images/gfgcore.jpg" alt="First slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" style={{ height: "80vh" }} src="images/gfgcore.jpg" alt="Second slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" style={{ height: "80vh" }} src="images/gfgcore.jpg" alt="Third slide" />
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleIndicators3" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleIndicators3" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Gallery
