import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "../styles/TableStyle.css"
import {useNavigate} from "react-router-dom";
import api_service from '../services/api_service';
import { api_urls } from '../services/api_urls';
import Flowchart from './Flowchart';


export const TableDemo1 = () => {

  const navigate=useNavigate();

  const [data, setTableData] = useState([]);
  useEffect(() => {
    api_service.get({
      baseURL: api_urls.flow_url
    }).then((res) => {
      console.log('response data: ', res);
      setTableData(res.data)
    });
  }, [])

  // const clickHandler=()=>{
  //   console.log("Hello");
                    
  // }

  return <div className='table'>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Owner</TableCell>
            <TableCell align="right">Email ID</TableCell>
            <TableCell align="right">Last Updated</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell 
               component="th" 
               scope="row" 
               onClick={()=>navigate("/connection")}>
                {row.name}
              </TableCell>
              <TableCell align="right" >{row.username}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.address.zipcode}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>;
}
