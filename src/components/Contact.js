import React, { useState } from 'react'


function Contact() {
    const [credentials, setcredentials] = useState({ name: "", email: "", description: "" })

    const handlesubmit = async (e) => {
        e.preventDefault();
        const { name, email, description } = credentials;
        const response = await fetch(`http://localhost:5002/api/contact/storedcontact`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, description }),
        })
        // .then(res => {
        //     console.log("response: ", res);
        // })
        // .catch(err => {
        //     console.log("error:", err);
        // });
        const json = await response.json();
        console.log(json);
        e.target.reset();

    }

    // const cleartext = () => {
    //     setcredentials({ name: "", email: "", description: "" })
    // }

    const onchange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    return (
        <>
            <div className="container" style={{ 'marginTop': '4rem' }}>
                <h1>Contact Us</h1>
                <form onSubmit={handlesubmit}>
                    <div className="form-group">
                        <label style={{ 'float': 'left' }} htmlFor="name">Name:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            minLength={5}
                            onChange={onchange}
                            required
                            aria-describedby="emailHelp"
                            placeholder="Bhavya Shah"
                        />
                    </div>
                    <div className="form-group">
                        <label style={{ 'float': 'left' }} htmlFor="email">Email:</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            onChange={onchange}
                            name="email"
                            required
                            placeholder="iwndiwni@gmail.com"
                        />
                    </div>
                    <div className="form-group">
                        <label style={{ 'float': 'left' }} htmlFor="description">Description</label>
                        <input
                            type="text"
                            minLength={5}
                            required
                            onChange={onchange}
                            className="form-control"
                            id="description"
                            name="description"
                            placeholder="Description"
                        />
                    </div>

                    <button type="submit" className="btn btn-primary"  >Submit</button>
                </form>
            </div>
        </>
    )
}

export default Contact
