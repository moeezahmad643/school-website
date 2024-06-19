import React from 'react'

import "./dashboard.css"
import { Link, Route,Routes } from 'react-router-dom'
import AddEvent from './add-event/addEvent'
import { SeeEvent } from './seeEvent/seeEvent'


export const Dashboard = () => {
    return (
        <main>

            <Routes>

                <Route path='/' element={

                    <section>
                        <Link to="/dashboard/addEvent">
                            <div>
                                <i className="bi bi-plus-circle"></i>
                                <p style={{ textDecoration: "none" }}>Add Event</p>
                            </div>
                        </Link>
                        <Link to="/dashboard/seeEvent">
                            <div>
                                <i className="bi bi-eye"></i>
                                <p style={{ textDecoration: "none" }}>See Event</p>
                            </div>
                        </Link>
                    </section>

                }
                />

                <Route path='addEvent' element={<AddEvent/>} />
                <Route path='seeEvent' element={<SeeEvent/>} />

            </Routes>




        </main>
    )
}
