import React from 'react'

function Footer() {
    return (
        <>
            <footer style={{ marginTop: "3rem", backgroundColor: "#28a745", paddingTop: "1rem" }}>
                <div className="contact" style={{ display: "flex", justifyContent: "space-around" }}>
                    <div className="address " style={{ textAlign: "left" }}>
                        <h5 className="fa fa-university" style={{ fontSize: "1.5rem" }}>Bharati Vidyapeeth Deemed University</h5>
                        <p>Bharati Vidyapeeth Campus, Dhankawadi, Pune, Maharashtra 411043</p>
                    </div>
                    <div className="social" style={{ fontSize: "1.5rem" }}>
                        <h5 className="fa fa-address-card">Contact Us:</h5><br />
                        <a className="fa fa-instagram" style={{ marginRight: "1rem" }}></a>
                        <a className="fa fa-linkedin"></a>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
