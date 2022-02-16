import React from 'react'
import "../styles/MonthlyFlow.css"
import { ApacFlow } from '../utils/constants';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useNavigate} from "react-router-dom";
import api_service from '../services/api_service';
import { useState,useEffect } from 'react';

import ViewComfyIcon from '@mui/icons-material/ViewComfy';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FindReplaceIcon from '@mui/icons-material/FindReplace';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import FunctionsIcon from '@mui/icons-material/Functions';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import BorderColorIcon from '@mui/icons-material/BorderColor';

export const MonthlyFlow=()=> {
  
    const [data, setTableData] = useState([]);

    useEffect(()=>{
        fetch(ApacFlow)
        .then((res)=>res.json())
        .then((data)=>{
            // console.log(data)
            setTableData(data)
        })
    },[])
    return (
     <>
     <div style={{display: "flex",
        flexDirection: "row",
        marginLeft: "10%",
        marginTop: "3%",
        marginInline: "6%",
        marginInlineStart: "9%"}}>
        <ViewComfyIcon/>
            <FormatListBulletedIcon/>
            <FindReplaceIcon/>
            <FactCheckIcon/>
            <FormatColorTextIcon/>
            <FunctionsIcon onClick={()=>console.log("Clicked Namechange")}/>
            <FilterAltIcon onClick={()=>console.log("Clicked Filter")}/>
            <BorderColorIcon/>
        </div>
    <div className='monthlyFlowTable'>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>cm_12</TableCell>
            <TableCell align="right">portfolio_cd</TableCell>
            <TableCell align="right">product_cd</TableCell>
            <TableCell align="right">state_cd</TableCell>
            <TableCell align="right">age_cd</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell 
               component="th" 
               scope="row" 
               >
                {row.cm_11}
              </TableCell>
              <TableCell align="right" >{row.portfolio_cd}</TableCell>
              <TableCell align="right">{row.product_cd}</TableCell>
              <TableCell align="right">{row.state_cd}</TableCell>
              <TableCell align="right">{row.age_cd}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
    <div style={{
      display:"flex",
      flexDirection:"row",
      justifyContent:"spaceBetween",
      position:"absolute",
      right:"1%",
      top:"17%"}}> 
        Recipie
        <div style={{
          paddingLeft:"5px"
        }}>
          <button style={{width:"134px",height:"28px"}}>Publish</button>
          <button style={{width:"134px",height:"28px"}}>Version History</button>
        </div>
    </div>
      <div style={{
        position: "relative",
        left: "227px",
      }}>
        <h1>Quality</h1>
        <h3>Valid</h3>
        <h3>Mismatched</h3>
        <h3>Missing</h3>
        
        <h1>Suggestions</h1>
        <TableHead>
          <TableCell>
          Rename
          </TableCell>
        </TableHead>
        <TableBody>
        <TableCell><b>Rename</b> cm_11 to card__member_acount_id_11</TableCell>
        </TableBody>
        
      </div>
      
    </div>
    </>
  )
}
