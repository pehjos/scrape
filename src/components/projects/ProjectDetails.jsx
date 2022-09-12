import React, {useState, useEffect } from 'react';
import {  CircularProgress, Divider } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory, Link } from 'react-router-dom';
import { useNavigate } from 'react-router'
import './details.css'
import { createCart } from '../../actions/book';
import { getPost, getPostsBySearch } from '../../actions/posts';
import Appbar from '../Appbar/Appbar'
import { Person } from 'react-bootstrap-icons';
function ProjectDetails() {
    const [currentRoom4, setCurrentRoom4] = useState(1)
    const user = JSON.parse(localStorage.getItem('profile'));
    const { post, posts, isLoading } = useSelector((state) => state.posts);
    const dispatch = useDispatch();
    const history = useNavigate();
    const { id } = useParams();
  
const [postData, setPostData] = useState({   
   expected_payment:"",
    name:"" ,
   completed_date:"",
  start_date:"",
 title:"" ,
description:"",
total_workers:"",
  hrs_perweek:"",}); 
   
    const changeRoom4 = (newRoom4) => {
        setCurrentRoom4(newRoom4)
        }  
   
    useEffect(() => {
    dispatch(getPost(id));
    }, [id]);
    
    if (!post) return null;
  
   const openPost = (_id) => history.push(`/posts/${_id}`);
  if (!post) {
      // window.location.reload()
  return (
  <div  className="loadingPaper">
  <CircularProgress size="2em" />
  </div>
  
  );
  
  }

  
    const recommendedPosts = posts.filter(({ _id }) => _id !== post._id);
  // DATA IS THE MAIN 
  const handleSubmit = () => {
  
  
    dispatch(createCart({ 

...postData,
user_id:user.result._id,
        project_id:post._id,
        project_title:post.title,
        project_description:post.description,
        project_agency:post.agency,
    }, ));
    // clear();
    
    };


  return (
    <div className='postdetails'>
        <Appbar/>
        <div className='post_details'>
        <div className='post_details_left'>
        <p><Person/>{post.name}</p>
<h3>{post.title}</h3>
<p>{post.description}</p>
<h3>{post.date}</h3>


        </div>
        <div className='post_details_right'>

        <div className="form">
    
<form  onSubmit={handleSubmit}> 
<div className="form_main"  >  

<h4>Express your interest by bidding</h4>
<div className="form_1">
  
{/* <select required  onChange={(event) => changeRoom4(event.target.value)}
value={currentRoom4}>
<option value={""}>PROJECT STATUS</option>
<option value="ongoing">ongoing</option>
<option value="completed">completed</option>
<option value="bidding">bidding</option>
</select> */}
<input required type="text" placeholder="Title" value={postData.title}
onChange={(e)=>setPostData({...postData,     title:e.target.value})}/>
<input required type="text" placeholder="Name"value={postData.name}
onChange={(e)=>setPostData({...postData,name:e.target.value})}/>
<input required type="text" placeholder="start date"value={postData.start_date}
onChange={(e)=>setPostData({...postData,start_date:e.target.value})}/>
<input required type="text" placeholder="completion date"value={postData.completed_date}
onChange={(e)=>setPostData({...postData,completed_date:e.target.value})}/>
<input required type="number" placeholder="expected payment"value={postData.expected_payment}
onChange={(e)=>setPostData({...postData,expected_payment:e.target.value})}/>
<input required type="number" placeholder="hours per week"value={postData.hrs_perweek}
onChange={(e)=>setPostData({...postData,hrs_perweek:e.target.value})}/>
<input required type="number" placeholder="total workers"value={postData.total_workers}
onChange={(e)=>setPostData({...postData,total_workers:e.target.value})}/>


</div>

<div className="form_1">

<textarea value={postData.description} required
onChange={(e)=>setPostData({...postData,    description:e.target.value})} type="text" placeholder="add description to your post (eg.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. )"/>
</div>

</div>
<button  type="submit" id="btnsub">
SEND BID
</button>

</form>

</div>




        </div>

        </div>
        </div>
  )
}

export default ProjectDetails