import React,{useEffect,useState} from 'react';
import './App.css';
import Home from './components/home/Home'
import Ongoing from './components/projects/Ongoing'
import Bidding from './components/projects/Bidding'
import Completed from './components/projects/Completed'
import Admin from './components/dashboard/Admin'
import Login from './components/dashboard/Adminsingnin'
import Client from './components/dashboard/Client'
import Contact from './components/contact/Contact'
import Bottomnav from './components/pagination/BottomNav/BottomNav'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ProjectDetails from './components/projects/ProjectDetails';
function App() {
  const [currentId, setCurrentId] = useState(0);
  return (
    <div className="App">
 <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/ongoing" element={<Ongoing/>} />
    <Route path="/bidding" element={<Bidding/>} />
    <Route path="/available" element={<Completed/>} />
    <Route path="/567398757" element={<Admin/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/signup" element={<Client/>} />
    <Route path="/contact" element={<Contact currentId={currentId} setCurrentId={setCurrentId}/>} />
    <Route path="/details/:id" element={<ProjectDetails/>}/>
    
    </Routes>
    <Bottomnav/>
  </BrowserRouter>
    </div>
  );
}

export default App;
