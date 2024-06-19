import React from 'react'
import image from "./student.png"
import "./header.css"

function Header() {
    return (
        <header>
            <div className='ball1'></div>
            <div className='ball2'></div>
            <section>
                <h1>FATHER ABRAHAM CHILDREN ACADEMY</h1>
                <p> Welcome to Father Abraham Children Academy, where we nurture young minds with a foundation of excellence, inclusivity, and creativity. Our experienced faculty, state-of-the-art facilities, and innovative curriculum foster a love of learning, critical thinking, and personal growth, preparing students to thrive in a rapidly changing world. Join us in empowering the next generation of compassionate, creative, and capable leaders.</p>
            </section>
            <section>
                <img src={image} alt="" />
            </section>


        </header>
    )
}

export default Header