import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { Grid } from '@mui/material';
import './Dashboard.css';
import { Link, Outlet } from 'react-router-dom';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import logo from './Images/us global.png';
import TextField from '@mui/material/TextField';
import Navbar from '../Navbar';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Prakash', 9940344758, 18, 29, 3),
  createData('Jaykumar', 9988776652, 9.0, 37, 4),
  createData('Ravendran', 6677854321, 16.0, 24, 6),
  createData('Anieemarie', 8976543891, 3.7, 67, 4),
  createData('Gokul', 9876542319, 16.0, 49, 3),
];

export default function Members() {
  return (


<div className='dash'>
  <Navbar></Navbar>
           
            <div className='rightcontent'>
               

                </div>

                <TableContainer style={{marginTop:"30px"}} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            
            <TableCell style={{fontWeight:'bold' ,marginLeft:"20px"}}>&nbsp;&nbsp;Employee Name</TableCell>
            <TableCell  style={{fontWeight:'bold',marginLeft:"20px"}} align="right">&nbsp;&nbsp;&nbsp;&nbsp;Contact</TableCell>
            <TableCell  style={{fontWeight:'bold',marginLeft:"20px"}} align="right">&nbsp;&nbsp;&nbsp;&nbsp;Attendance</TableCell>
            <TableCell style={{fontWeight:'bold',marginLeft:"20px"}} align="right">&nbsp;&nbsp;&nbsp;&nbsp;Working Days</TableCell>
            <TableCell  style={{fontWeight:'bold',marginLeft:"20px"}} align="right">&nbsp;&nbsp;&nbsp;&nbsp;Number of Projects</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" className='tbs'>
               <img className='iimg' src='https://tse3.mm.bing.net/th?id=OIP.HHVUf3TYqncgpJXyCMmxyAHaHa&pid=Api&P=0&h=220'></img>
                {row.name}
              </TableCell>
              
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>







            </div>

     
  );
}