import React from 'react'
import './Mywork.css'
import mywork_data from '../../assets/mywork_data'

function Mywork() {
  return (
    <div id='work' className='mywork'>
        <div className="mywork-title">
            <h1>My latest work</h1>
        </div>
<div className="mywork-container">
{mywork_data.map((work,index)=>{
  return <img key={index} src={work.w_img} alt="" />
})}
</div>
<div className="show-more">
 <p>show more </p><img src="https://www.svgrepo.com/show/28675/right-arrow.svg" alt="" />
</div>       
    </div>
  )
}

export default Mywork