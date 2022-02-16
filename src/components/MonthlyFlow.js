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

export const MonthlyFlow = () => {

  const [data, setTableData] = useState([]);
  const [columnName, setColumnName] = useState('');
  const [all_columns, updateAllColumns] = useState(APAC_COLUMN_NAMES);
  const column_name = useRef(null);

  useEffect(() => {
    fetch(ApacFlow)
      .then((res) => res.json())
      .then((data) => {
        setTableData(data)
      });
    displayColumnDiv();
  }, []);

  // useEffect(() => {
  //   console.log('inside use effect', APAC_COLUMN_NAMES[0]);
  // }, [APAC_COLUMN_NAMES]);

  const updateColumnName = () => {
    APAC_COLUMN_NAMES[columnName.selectedIndex - 1].name = column_name.current.value;
    updateAllColumns([...APAC_COLUMN_NAMES]);
    console.log(all_columns);
  };

  const displayColumnDiv = () => {
    let element = document.getElementById('column_name_div');
    if (element.style.display === 'none') {
      element.style.display = 'block';
    } else {
      element.style.display = 'none';
    }
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
        <ViewComfyIcon />
        <FormatListBulletedIcon />
        <FindReplaceIcon />
        <FactCheckIcon />
        <FormatColorTextIcon />
        <FunctionsIcon onClick={displayColumnDiv} />
        <FilterAltIcon onClick={() => console.log("Clicked Filter")} />
        <BorderColorIcon />
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
        <input type={'text'} ref={column_name} />
        <Button onClick={updateColumnName}>Update</Button>
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
              {data.map((row, index) => (
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
    </div>
    </>
  )
}
