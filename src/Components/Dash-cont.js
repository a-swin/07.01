import './Dash-cont.css';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';


function Dashcon() {

    const [currentDate, setCurrentDate] = useState(new Date());
    const [currentTime, setCurrentTime] = useState(new Date());


    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000); // Update every second

        return () => clearInterval(intervalId);
    }, []);




    return (
        <div className="dashcon-right">
            <Typography variant='h5'><pre>Hello <span style={{color:'blue'}}>User</span> !</pre></Typography>
            <div className='info'>
                <p className='date'>{currentDate.toLocaleDateString()}</p>
                <p className='time'>{currentTime.toLocaleTimeString()}</p>
            </div>
            <p className='tasks'> Today Tasks</p>
        </div>
    )
}


export default Dashcon









