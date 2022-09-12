import React,{useState} from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Message from '../messages/Message'
import Bid from '../bids/Bid'
import Form from '../forms/Form';
import { useDispatch, useSelector } from 'react-redux';
import PorojectCard from '../projects/ProjectCard1';
function Body() {
    const [val, setValue] = React.useState('1');
    const user = JSON.parse(localStorage.getItem('profile'));
  const handleChange = (event, newValue) => {
    setValue(newValue);
    
  };
  const [currentId, setCurrentId] = useState(0);
  const {posts,isLoading}=useSelector((state)=>state.posts)
  const {order,isLoading1}=useSelector((state)=>state.order)
  const {cart,isLoading3}=useSelector((state)=>state.cart)
  console.log(posts)
  if(!posts?.length && !isLoading){
  return 'no data'
  }
 
 
  return (
    <div>      <Box sx={{ width: '100%', typography: 'body1' }}>
    <TabContext value={val} >
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <TabList onChange={handleChange} aria-label="lab API tabs example">
          <Tab label="ADD PROJECT" value="1" />
          <Tab label="MANAGE PROJECT" value="2" />
          <Tab label="BIDS" value="3" />
          <Tab label="MESSAGES" value="4" />
        
        </TabList>
      </Box>
      <TabPanel value="1">
      <Form currentId={currentId} setCurrentId={setCurrentId}/>
      </TabPanel>
      <TabPanel value="2">
        
      {posts?.map(post=> (
<PorojectCard
title={post.title}
date={post.date}
description={post.description}
agency={post.name}
status={post.category}
post={post}
key={post.description}
/>
  ))}


      </TabPanel>
      <TabPanel value="3">
        
        {cart?.map(post=> (
  <Bid

  description={post.message}
  project_id={post. project_id}
  project_title={post. project_title}
  project_description={post. project_description}
  name={post.name}
  expected_payment={post.  expected_payment}
  title={post.  title}
  start_date={post.  start_date}
  total_workers={post.total_workers}
  />
  
    ))}
  
  
        </TabPanel>
      <TabPanel value="4">
        
        {order?.map(post=> (
  <Message

  description={post.message}
  name={post.name}
  email={post.email}
  phone={post.phone}
  />
  
    ))}
  
  
        </TabPanel>
    </TabContext>
  </Box></div>
  )
}

export default Body
