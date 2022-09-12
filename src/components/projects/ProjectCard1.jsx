import React from 'react'
import { GeoAlt } from 'react-bootstrap-icons'
import './projectcard.css'
import {deletePost} from '../../actions/posts'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'

function PorojectCard({date,post,status,description,agency,title}) {

  const dispatch = useDispatch();
  
  return (
    <div className='projectcard' >
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
          <div className='foot'>
          <p>status:{status}</p> 
          <button onClick={() => dispatch(deletePost(post._id))}>delete</button>
          </div>
    </div>
  )
}

export default PorojectCard