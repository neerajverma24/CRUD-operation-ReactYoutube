import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const Create = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const history = useNavigate()

    const header = { "Access-Control-Allow-Origin": "*" }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Clicked")
        axios
            .post(
                'https://65af566f2f26c3f2139a7bf0.mockapi.io/crud-youtube',
                {
                    name: name,
                    email: email,
                    header
                }
            )
            .then(() => {
                history("/read")
            })
    }

    return (
        <>
            <div className='d-flex justify-content-between'>
                <h2>Create Operation</h2>
                <Link to='/read'>
                    <button className='btn btn-primary'>Show Data</button>
                </Link>
            </div>
            <form>
                <div className="mb-3">
                    <label
                        className="form-label">
                        Name
                    </label>
                    <input type="text"
                        className="form-control"
                        onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        aria-describedby="emailHelp"
                        onChange={(e) => setEmail(e.target.value)} />
                </div>

                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>


            </form>
        </>
    )
}

export default Create
