import React,{useState} from 'react'
import './ongoing.css'
import Appbar from '../Appbar/Appbar'
import PorojectCard from './PorojectCard'
import { Chart } from '../Body/Chart'
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { Search } from 'react-bootstrap-icons'
// search
import { Paper, Typography, CircularProgress, Divider } from '@mui/material';
import {Link } from 'react-router-dom'
import {getPostsBySearch} from '../../actions/posts'
import { useNavigate,useLocation } from 'react-router-dom';
import BottomNav from '../pagination/BottomNav/BottomNav'

function useQuery() {
  return new URLSearchParams(useLocation().search);
}


function Completed({post}) {


 
// searcher
const query = useQuery();
    const page = query.get('page') || 1;
    const searchQuery = query.get('searchQuery');
  
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();
  
    const [search, setSearch] = useState('');
    const [tags, setTags] = useState([]);
    const history = useNavigate();

    const handleKeyPress = (e) => {
        if (e.keyCode === 13) {
          searchPost();
        }
      };
  
  const searchPost = () => {
    if (search.trim() || tags) {
      dispatch(getPostsBySearch({ search}));
      history.push(`/search?searchQuery=${search || 'none'}`);
    } else {
      history('/');
     
    }
  };
  const {posts,isLoading}=useSelector((state)=>state.posts)
  console.log(posts)
  if(!posts?.length && !isLoading){
  return 'no data'
  }
  
  return (
    <div className='ongoing'>
        <Appbar/>
      <div className='ongoing_main'  >
      <div className='searchcompo'>
         <div className="search_main">
      <input type="text" placeholder='search'value={search}onChange={(e)=>setSearch(e.target.value) } name="search"
       onKeyDown={handleKeyPress}/>
     <Search onClick={searchPost} color='crimson'/>
      </div>
      
      <h5>status</h5>
     <Chart/>
    </div>

    <div className='procard'  >
    {posts?.map((post,index)=>(
    <PorojectCard
    key={post.date}
    title={post.title}
    description={post.description}
    agency={post.name}
    date={post.date}
    post={post}
    />  
    ))}
        </div>  

      </div>
    </div>
  )
}

export default Completed