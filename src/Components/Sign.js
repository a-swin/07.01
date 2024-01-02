import './Sign.css';
import logo from './Images/us global.png';
import rightimg from './Images/Mobile login-pana.svg';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdPhoneIphone } from "react-icons/md";
import { MdEmail } from "react-icons/md";

function Sign() {
    return (
        <div className='Sign'>
            <div className='left'>
                <div className='leftimg'>
                    <img src={logo}></img>
                </div>
                <Typography variant='h7' style={{ opacity: '70%' }}>SIGN UP</Typography>

                <div className='inputs'>
                    <div className='input01'>
                        <TextField variant='outlined' placeholder='Username' ></TextField>
                        <FaUser className='icons01'></FaUser>
                    </div>
                    <div className='input01'>
                        <TextField variant='outlined' placeholder='Phone Number' ></TextField>
                        <MdPhoneIphone className='icons01'></MdPhoneIphone>
                    </div>
                    <div className='input01'>
                        <TextField variant='outlined' placeholder='Email' ></TextField>
                        <MdEmail className='icons01'></MdEmail>
                    </div>
                    <div className='input01'>
                        <TextField variant='outlined' placeholder='Password' ></TextField>
                        <RiLockPasswordFill className='icons01'></RiLockPasswordFill>
                    </div>
                    <div className='input01'>
                        <TextField variant='outlined' placeholder='Confirm Password' ></TextField>
                        <RiLockPasswordFill className='icons01'></RiLockPasswordFill>
                    </div>
                    <div className='signbtn'>
                        <Button variant='contained' style={{ width: '222px' }}>SUBMIT</Button>
                    </div>

                </div>

            </div>
            <div className='right'>
                <img src={rightimg}></img>

            </div>


        </div>
    )
}

export default Sign