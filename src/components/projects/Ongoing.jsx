import React,{useState} from 'react'
import './ongoing.css'
import Appbar from '../Appbar/Appbar'
import PorojectCard from './PorojectCard'
import { Chart } from '../Body/Chart'
import axios from "axios";
import { Search } from 'react-bootstrap-icons'

// search
import { Paper, Typography, CircularProgress, Divider } from '@mui/material';
import {Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import {getPostsBySearch} from '../../actions/posts'
import { useNavigate,useLocation } from 'react-router-dom';
import BottomNav from '../pagination/BottomNav/BottomNav'

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Ongoing() {
  const [data,setData]=useState([])
axios.get('http://localhost:8000/results')
  .then(res => {
    console.log(res.data);
    setData(res.data);
  });
  console.log(data,"data is here")
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
  // if(!posts.length && !isLoading){
  //     return 'no data'
  //   }
    // if (isLoading) {
    //    return (
    //      <div  className="loadingPaper">
    //        <CircularProgress size="2em" />
    //      </div>
    //    );
    //  } 



  return (
    <div className='ongoing'>
        <Appbar/>
      <div className='ongoing_main'  >
      <div className='searchcompo'>
         <div className="search_main">
      <input type="text" placeholder='search'value={search}onChange={(e)=>setSearch(e.target.value) } name="search"
       onKeyDown={handleKeyPress} />
     <Search onClick={searchPost} color='crimson'/>
      </div>
      
      <h5>status</h5>
     <Chart/>
    </div>
{
!data.length?(<CircularProgress/>):(
    <div className='procard'  >
    {data.map((post,index)=>(
    <PorojectCard
    key={post.date}
    title={post.title}
    description={post.desc}
    agency={post.agency}
    date={post.date}
    />  
    ))}
        </div>  
)

}
  
      </div>
    </div>
  )
}

export default Ongoing