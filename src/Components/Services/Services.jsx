import React from 'react'
import './Services.css'
import services_data from '../../assets/services_data'

function Services() {
  return (
    <div id='services' className='Services'>
        <div className="service-title">
            <h1>My Services</h1>
        </div>
        <div className="services-container">
            {services_data.map((service,index)=>{
              return <div className='services-format'>
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>
              <div className="services-readmore">
                <p>Read More</p>
                <img src="https://www.svgrepo.com/show/28675/right-arrow.svg" alt="" />
              </div>
              </div>
            })}
        </div>
    </div>
  )
}

export default Services