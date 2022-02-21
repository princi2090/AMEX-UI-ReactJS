import React, { useRef } from 'react'
import "../styles/MonthlyFlow.css"
import { ApacFlow, APAC_COLUMN_NAMES } from '../utils/constants';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from "react-router-dom";
import api_service from '../services/api_service';
import { useState, useEffect } from 'react';
import ViewComfyIcon from '@mui/icons-material/ViewComfy';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FindReplaceIcon from '@mui/icons-material/FindReplace';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import FunctionsIcon from '@mui/icons-material/Functions';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { Button } from '@mui/material';

import icon1 from "../assets/images/icon1.svg"
import vector from "../assets/images/Vector.svg"
import grid from "../assets/images/Grid.svg"
import codicon from "../assets/images/codicon_replace.svg"
import group627507 from "../assets/images/Group627507.svg"
import group627509 from "../assets/images/Group627509.svg"
import Group627510 from "../assets/images/Group627510.svg"
import Group627548 from "../assets/images/Group627548.svg"
import Group627511 from "../assets/images/Group627511.svg"
import Group627549 from "../assets/images/Group627549.svg"



export const MonthlyFlow = () => {

  const [data, setTableData] = useState([]);
  const [columnName, setColumnName] = useState('');
  const [all_columns, updateAllColumns] = useState(APAC_COLUMN_NAMES);
  const [stored_data,setStoredData]=useState([]);
  const column_name = useRef(null);
  const navigate=useNavigate();

  useEffect(() => {
    fetch(ApacFlow)
      .then((res) => res.json())
      .then((data) => {
        setTableData(data)
        setStoredData(data);
      });
    displayColumnDiv();
  }, []);

 
  // useEffect(() => {
  //   console.log('inside use effect', APAC_COLUMN_NAMES[0]);
  // }, [APAC_COLUMN_NAMES]);

  const updateColumnName = () => {
    if (column_name.current && column_name.current.value) {
      APAC_COLUMN_NAMES[columnName.selectedIndex - 1].name = column_name.current.value;
      updateAllColumns([...APAC_COLUMN_NAMES]);
      // console.log(all_columns);
    }
  };

  const displayColumnDiv = () => {
    let element = document.getElementById('column_name_div');
    if (element.style.display === 'none') {
      element.style.display = 'block';
    } else {
      element.style.display = 'none';
    }
  }

  const filterColumns=()=>{
    // let stored_data=[...data];
    let abc=stored_data
    .filter((data)=>data.state_cd=='BD' || data.state_cd=='BE');
    setStoredData([...abc]);
    console.log(abc);
  }

  return (
    <>
      <div style={{
        display: "flex",
        flexDirection: "row",
        marginLeft: "10%",
        marginTop: "3%",
        marginInline: "6%",
        marginInlineStart: "9%"
      }}>

      <div className='firstEle'>
          <div className='firstGrid'><img src={grid} alt="grid"/></div>
          <div className='firstVector'><img src={vector} alt="vector"/></div>  
      </div>
      <div style={{
        display:'flex',
        flexDirection:'column',
        marginLeft:"10px"
      }}>
      <div className='secondEle'>
        <img src={group627507} alt="group627507"/>
      </div>
      <div className='thirdEle'>
        <img src={group627509} alt="group627509"/>
      </div>
      <div className='fourthEle'>
        <img src={Group627510} alt="Group627510"/>
      </div> 
      </div>   
      <div className='fifthEle'>
        <img src={Group627511} alt="Group627511"/>
      </div>
      <div className='sixthEle'><img src={Group627548} alt="antdesign_filteroutlined"/></div>
      <div className='seventhEle'><img src={Group627549} alt="icon1"/></div>  
        
      </div>
      <div className='column_name_div' id='column_name_div'>
        <select onChange={(e) => { setColumnName(e.target); }}>
          <option>Select</option>
          {all_columns.map((column, index) => {
            return (
              <option key={index}>{column.name}</option>
            );
          })}
        </select>
        {columnName && <input placeholder='Alternate Name' type={'text'} ref={column_name} />}
        {columnName && <Button onClick={updateColumnName}>Update</Button>}
      </div>
      <div className='monthlyFlowTable'>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                {all_columns.map((column, index) => {
                  return (
                    <TableCell key={index} align="center">{column.name}</TableCell>
                  );
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {stored_data.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  {all_columns.map((column, col_index) => {
                    return (
                      <TableCell key={col_index}
                        component="th"
                        scope="row"
                      >
                        {row[column.accessor]}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div >
          <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "spaceBetween",
            position: "absolute",
            right: "1%",
            top: "17%"
          }}>
            Recipe
            <div style={{
              paddingLeft: "5px"
            }}>
              <button 
              style={{ width: "134px", height: "28px" }}
              onClick={()=>navigate("/connection")}
              >
              Publish
              </button>
              <button style={{ width: "134px", height: "28px" }}>Version History</button>
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
      </div>
    </>
  )
}