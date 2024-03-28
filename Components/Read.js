import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Read = () => {
    const [data, setData] = useState([])
    const [tabledark, setTableDark] = useState("")

    function getData() {
        axios.get('https://65af566f2f26c3f2139a7bf0.mockapi.io/crud-youtube')
            .then((res) => {
                console.log(res.data)
                setData(res.data)
            })
    }

    function handleDelete(id) {
        axios.delete(`https://65af566f2f26c3f2139a7bf0.mockapi.io/crud-youtube/${id}`)
            .then(() => {
                getData();
            })
    }

    useEffect(() => {
        getData();
    }, [])

    const setToLocalStorage = (id, name, email) => {
        localStorage.setItem("id", id)
        localStorage.setItem("name", name)
        localStorage.setItem("email", email)
    }

    return (
        <>
            <div class="form-check form-switch">
                Dark mode
                <input
                    className="form-check-input"
                    type="checkbox"
                    onClick={() => {
                        if (tabledark === "table-dark") setTableDark("")
                        else setTableDark("table-dark")
                    }}
                />
            </div>

            <div className='d-flex justify-content-between'>
                <h2>Read Operation</h2>
                <Link to='/'>
                    <button className='btn btn-warning'>Create Data</button>
                </Link>
            </div>
            <table className={`table ${tabledark}`}>
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col"></th>
                        <th scope="col"></th>

                    </tr>
                </thead>

                {
                    data.map((eachData, i) => {
                        return (
                            <>
                                <tbody key={i} id={i}>
                                    <tr >
                                        <th scope="row">{eachData.id}</th>
                                        <td>{eachData.name}</td>
                                        <td>{eachData.email}</td>
                                        <td>
                                            <Link to='/update'>
                                                <button className='btn-success' onClick={() => setToLocalStorage(
                                                    eachData.id,
                                                    eachData.name,
                                                    eachData.email
                                                )}>
                                                    Edit
                                                </button>
                                            </Link>
                                        </td>
                                        <td>
                                            <button
                                                className='btn-danger'
                                                onClick={() => handleDelete(eachData.id)}>Delete
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </>
                        )
                    })
                }
            </table>
        </>
    )
}

export default Read
