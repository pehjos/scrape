import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { PolarArea } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

 

export function Chart() {
  const {posts,isLoading}=useSelector((state)=>state.posts)
  const [selectedId, setSelectedId] = useState(null)
  console.log(posts)
  if(!posts?.length && !isLoading){
  return 'loading...'
  }

// count post 
const recommendedPosts = posts.filter(({category
}) => category== "completed");
const counter1=recommendedPosts?.length+10;

const recommendedPosts1 = posts.filter(({category
}) => category== "bidding");
const counter2=recommendedPosts1?.length+10;
// counter3
const recommendedPosts2 = posts.filter(({category
}) => category== "ongoing");
const counter3=recommendedPosts2?.length+10;

const all=counter1+counter2+counter3;


  const data = {
    labels: ['all', 'opens', 'ongoining', 'completed'],
    datasets: [
      {
        label: '# of Votes',
        data: [all, counter1, counter2,counter3,],
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return(
  <PolarArea data={data} />
  );
}
