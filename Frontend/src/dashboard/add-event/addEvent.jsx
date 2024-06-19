import React, { useState } from 'react'
import './addevent.css'
import axios from 'axios'

export default function AddEvent() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")
    const [date, seDate] = useState("")

    const submit = async (e) => {
        e.preventDefault()
        console.log(title
            , description
            , date
            , image)

        let data = await axios.post('http://localhost:3000/events', {
            title
            , description
            , date
            , image
        })
        let result = await data.data    
        console.log(result); 

        window.location.href ='/dashboard'

    }

    return (
        <section className='full-section'>
            <form>
                <h1>Add Event</h1>
                <input type="text" placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
                <input type="text" placeholder='Image' value={image} onChange={(e) => setImage(e.target.value)} />
                <input type='date' value={date} onChange={(e) => seDate(e.target.value)} />
                <textarea type="text" placeholder="Description" value={description} rows={15} onChange={(e) => setDescription(e.target.value)} >

                </textarea>

                <button onClick={submit}>Submit Event</button>
            </form>
        </section>
    )
}
