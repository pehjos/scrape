import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import './bid.css'
import { Calendar2Event } from 'react-bootstrap-icons';

function Message({
    project_id,
    user_id,
    project_title,
    project_description,
    name,
    expected_payment,
    title,
    description,
    start_date,
    total_workers,
   


}) {
  return (
    <div className='message'>
<Stack sx={{ width: '100%' }} spacing={2} >
    
      <Alert severity="info">
          <h2>Bidder Info</h2>
        <AlertTitle><p>{name}</p></AlertTitle>
        <h3>{title}</h3>
      <p>{description}</p> 
      
       <p><Calendar2Event/> Start Date:{start_date}</p>
       <p>${expected_payment}</p>
       <p>Total workers:{total_workers}</p>
       <h2>Project Info</h2>
     <p>ID:{project_id}</p>
     <p>Title:{project_title}</p>
     <p>{project_description}</p>
      </Alert>
    </Stack>    

    </div>
  )
}

export default Message