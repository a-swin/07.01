import './Login.css';
import logo from './Images/us global.png';
import rightimg from './Images/right.svg';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link, BrowserRouter, Route, Routes } from 'react-router-dom';
import Sign from './Sign';
import { useState } from 'react';
import { Password } from '@mui/icons-material';
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import google from './Images/google.png';
import facebook from './Images/facebook.png';
import Dashboard from './Dashboard';

function Login() {



   

    return (
        <div className='loginpage'>
            <div className='leftside'>

                <div className='logoimg'>
                    <img src={logo}></img>
                </div>
                <Typography variant='h7' style={{ opacity: '70%' }}>LOGIN</Typography>

                <div className='input1'>
                    <TextField variant='outlined' placeholder='Username' id='username' className='text01' ></TextField>
                    <FaUser className='icons1' id='icon'></FaUser>
                </div>
                <div className='input2'>
                    <TextField variant='outlined' placeholder='Password' id='password'></TextField>
                    <RiLockPasswordFill className='icons2'></RiLockPasswordFill>
                </div>
                <div className='btn'>
                <Link to='/Dash' style={{color:'white',textDecoration:'none'}}><Button variant='contained' style={{ width: '222px' }} > LOGIN</Button></Link>
                </div>

                {/* <BrowserRouter> */}
                <Typography variant='h7'>Already have account?<Link to='/sign'><Button variant='type' style={{ width: '100px' }}>Sign up</Button></Link></Typography>
                {/* </BrowserRouter> */}
                <div className='txts'>
                    <div className='lines'></div>
                    <div className='lnks'>
                        <img src={google} className='googlelogo'></img>
                        <Button variant='text' className='lnk1'>Login with google</Button>
                    </div>
                    <div className='lnks'>
                    <img src={facebook} className='fblogo'></img>
                        <Button variant='text' className='lnk1'>Login with Facebook</Button>
                    </div>
                </div>


            </div>
            <div className='rightside'>
                <img src={rightimg}></img>

            </div>



        </div>
    )
}

export default Login










