import Dashboard from './Components/Dashboard';
import './App.css';
import Login from './Components/Login';
import Sign from './Components/Sign';
import { BrowserRouter, Link, Route, Routes,Outlet } from 'react-router-dom';
import Project from './Components/Project';
import Members from './Components/Members';

import Navbar from './Navbar';

function App() {
  return (
    <BrowserRouter>
   {/* <Navbar/> */}
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/Dash' element={<Dashboard />}></Route>
        <Route path='/sign' element={<Sign />}></Route>
        <Route path='/project' element={<Project />}></Route>
        <Route path='/members' element={<Members/>}></Route>
      </Routes>


    </BrowserRouter>
  );
}

export default App;
