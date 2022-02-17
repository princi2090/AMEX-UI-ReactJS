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
  const FlowTable = "src/assets/static_files/FlowTable.json"

  const [data, setTableData] = useState([]);
  // useEffect(() => {
  //   api_service.get({
  //     baseURL: api_urls.flow_url
  //   }).then((res) => {
  //     console.log('response data: ', res);
  //     setTableData(res.data)
  //   });
  // }, [])

  useEffect(()=>{
    fetch(FlowTable)
    .then((res)=>res.json())
    .then((data)=>setTableData(data))
  },[]);

  
  return <div className='table'>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Flow Names</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Owner</TableCell>
            <TableCell align="right">Contains</TableCell>
            <TableCell align="right">Created At</TableCell>
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
                {row.Flow_Names}
              </TableCell>
              <TableCell align="right" >{row.Status}</TableCell>
              <TableCell align="right">{row.Owner}</TableCell>
              <TableCell align="right">{row.Contains}</TableCell>
              <TableCell align="right">{row.Created_At}</TableCell>
              <TableCell align="right">{row.Last_Updated}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>;
}
