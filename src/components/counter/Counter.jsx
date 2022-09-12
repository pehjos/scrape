import React,{useState} from 'react'
import './counter.css'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
function Counter() {
  const {posts,isLoading}=useSelector((state)=>state.posts)
  const [selectedId, setSelectedId] = useState(null)
  console.log(posts)
  if(!posts?.length && !isLoading){
  return 'loading...'
  }

// count post 
const recommendedPosts = posts.filter(({category
}) => category== "completed");
const counter1=recommendedPosts?.length;

const recommendedPosts1 = posts.filter(({category
}) => category== "bidding");
const counter2=recommendedPosts1?.length;
// counter3
const recommendedPosts2 = posts.filter(({category
}) => category== "ongoing");
const counter3=recommendedPosts2?.length;

const all=counter1+counter2+counter3;
  return (
    <div className='counter__reader'>
      <div   className='counter_main'>
      <div   className='counters'>
      <Link to="/available">
          <p>ALL PROJECTS</p>
<p>{all+30}</p>
</Link>
</div>
<div   className='counters'>
<Link to="/bidding">
<p>BIDDING PROJECTS</p>
<p>{counter2+10}</p>
</Link>
</div>
<div   className='counters'>
  <Link to="/ongoing">
<p>ONGOINING PROJECTS</p>
<p>{counter3+10}</p>
</Link>
</div>
<div   className='counters'>
<Link to="/completed">
<p>COMPLETED PROJECTS</p>
<p>{counter1+10}</p>
</Link>
</div>
      </div>
    </div>
  )
}

export default Counter