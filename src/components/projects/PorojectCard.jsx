import React from 'react'
import { GeoAlt } from 'react-bootstrap-icons'
import './projectcard.css'
import { useNavigate } from 'react-router-dom'
function PorojectCard({date,post,description,agency,title}) {
  const history=useNavigate()
  const user = JSON.parse(localStorage.getItem('profile'));
  const openPost = (e) => {
    history(`/details/${post._id}`);
  };
  const signin = (e) => {
    history(`/login`);
  };
  return (
    <div>
      {user?(
    <div className='projectcard' onClick={openPost}>
      <div className='projectcard_top'>
         <GeoAlt color='teal'/>
         <p>{agency}</p> 
          </div>  
          <div className='projectcard_middle'>
          <p>{title}</p>
          </div>  
          <div className='projectcard_m'>
          <p>{description}</p>
          </div> 
          <div className='projectcard_footer'>
          <p>{date}</p>
          </div>  
    </div>
    ):(<div className='projectcard' onClick={signin}>
    <div className='projectcard_top'>
       <GeoAlt color='teal'/>
       <p>{agency}</p> 
        </div>  
        <div className='projectcard_middle'>
        <p>{title}</p>
        </div>  
        <div className='projectcard_m'>
        <p>{description}</p>
        </div> 
        <div className='projectcard_footer'>
        <p>{date}</p>
        </div>  
  </div>)}
    </div>
  )
}

export default PorojectCard