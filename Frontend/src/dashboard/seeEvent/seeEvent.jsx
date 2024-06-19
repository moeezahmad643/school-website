import React, { useEffect, useState } from 'react';
import './seeEvent.css';
import axios from 'axios';

export const SeeEvent = () => {
  const [data, setdata] = useState([])
  useEffect(() => {

    const fetchData = async () => {
      let response = await axios.get('http://localhost:3000/event'); // Corrected URL
      let result = response.data; // No need to await data here, just access it directly
      console.log(result);
      setdata(result)
    };

    fetchData();
  }, []); // Empty dependency array to run effect only once

  return (
    <section id='event'>

      {data.map((element,index) => (



        <div key={index} className='card'>
          <img src={element.img} alt="" />
          <h3>{element.mytitle}</h3>
          <p>{element.date}</p>
        </div>

      ))

      }
    </section>
  );
};
