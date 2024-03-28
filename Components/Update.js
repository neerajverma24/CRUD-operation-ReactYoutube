import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const Update = () => {
    const [id, setId] = useState(0)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    useEffect(() => {
        setId(localStorage.getItem("id"));
        setName(localStorage.getItem("name"));
        setEmail(localStorage.getItem("email"))
    }, [])

    const navigate = useNavigate()

    const handleUpdate = (e) => {
        e.preventDefault()
        axios.put(`https://65af566f2f26c3f2139a7bf0.mockapi.io/crud-youtube/${id}`, {
            name: name,
            email: email
        })
            .then(() => {
                navigate("/read")
            })
    }

    return (
        <div>
            <h2>Update Operation</h2>
            <form>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input
                        type="email"
                        value={email}
                        className="form-control"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <button type="submit" className="btn btn-primary mx-1" onClick={handleUpdate}>Update</button>

                <Link to='/read'>
                    <button type="submit" className="btn btn-secondary mx-4" onClick={handleUpdate}>Back</button>
                </Link>


            </form>
        </div>
    )
}

export default Update
