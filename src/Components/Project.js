import './Project.css';
import { Link, Outlet } from 'react-router-dom';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import logo from './Images/us global.png';
import Navbar from '../Navbar';


function Dashboard() {
    return (
        <div className='dash'>

            <Navbar></Navbar>
            <div className='boxcontents'>
            <div className='box'>
                <div className='box01'></div>
                <div className='box02'></div>
                <div className='box03'></div>
            </div>
            </div>




        </div>


    )
}

export default Dashboard