import React from 'react'
import Footer from './Footer'

function About() {
    const stylecontainer = {
        paddingTop: "56px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
    }

    return (
        <>
            <div className="container" style={stylecontainer}>
                <h1 style={{ marginBottom: "3rem" }}>About Us</h1>
                <div id="accordion">
                    <div className="card">
                        <div className="card-header" id="headingOne">
                            <h5 className="mb-0">
                                <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    What is GeeksForGeeks Student Chapter is?
                                </button>
                            </h5>
                        </div>

                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                            <div className="card-body">
                                GeeksforGeeks Student Chapters are University-based community chapters for students interested in Computer Science and who want to make their career in this field.
                                By joining a GeeksforGeeks Student Chapters, students grow their knowledge in a peer-to-peer learning environment and build effective and optimized solutions for local businesses and their community.                        </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="headingTwo">
                            <h5 className="mb-0">
                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    How will GeeksforGeeks student Chapters help students?
                                </button>
                            </h5>
                        </div>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                            <div className="card-body">
                                GeeksforGeeks Student Chapters will provide students with various events and webinars on coding or placements. Students may get internship opportunities at GeeksforGeeks. Along with all this student can get exclusive discounts on GFG courses. You will get an opportunity to organize your competition on a PAN India level. It will help students to grow a network among 145+ colleges.                        </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="headingThree">
                            <h5 className="mb-0">
                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    What are some of the events we can organise?
                                </button>
                            </h5>
                        </div>
                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                            <div className="card-body">
                                We have Coding Events collabarating with CODECHEF. We have a webinar session through GFG. We organize a webinar with someone from your network who is good at wished domain. Rest imagination and creativity with out of the box thinking has no limit                        </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>

    )
}

export default About
