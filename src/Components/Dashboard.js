import './Dashboard.css';
import { Link, Outlet } from 'react-router-dom';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import logo from './Images/us global.png';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Navbar from '../Navbar';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Dashcon from './Dash-cont';

 
function Dashboard() {

  const data = [
    { name: 'Jan', pv: 6},
    { name: 'Feb', pv: 10},
    { name: 'Mar', pv: 25},
    { name: 'Apr', pv: 10},
    { name: 'May', pv: 10},
    { name: 'Jun', pv: 6},
    { name: 'Jul', pv: 10},
    { name: 'Aug', pv: 10},
    { name: 'Sept', pv: 18 },
    { name: 'Oct', pv: 10},
    { name: 'Nov', pv: 1},
    { name: 'Dec', pv: 31}, 
  ];
  
  

  return (
    <div className='Dashboards'>
      <Navbar></Navbar>

      <div className='box-content'>

        <div className='box1'>
          <Typography variant='h5' className='t1'>Week</Typography>
          <Typography variant='h5' className='t2'>4/6</Typography>
        </div>
        <div className='box2'>
          <Typography variant='h5' className='t1'>Month</Typography>
          <Typography variant='h5' className='t2'>8/26</Typography>
        </div>
        <div className='box3'>
          <Typography variant='h5' className='t1'>Attendance</Typography>
          <Typography variant='h5' className='t2'>14/26</Typography>
        </div>
      </div>
      <div className='box-content1'>

      <ResponsiveContainer width="100%" height={210}>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Line type="monotone" dataKey="pv"  />
        
      </LineChart>
    </ResponsiveContainer>


      </div>

      <Dashcon></Dashcon>
    </div>
  )
}

export default Dashboard




