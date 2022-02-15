import React, { useState, useCallback, useEffect } from 'react'
import "../styles/FlowStyles.css"
import ReactFlow, {
  addEdge,
  ReactFlowProvider
} from 'react-flow-renderer';
import CalculateIcon from '@mui/icons-material/Calculate';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import {useNavigate} from "react-router-dom";

export const Flowaddition = () => {

  const navigate=useNavigate();
  const initialElements = [
    {
      id: '1',
      type: 'input', // input node
      data:
      {
        label:<div>
        <CalculateIcon/>
        <br/>
        Apac Monthly Flow
        </div>
        
        // <select>
        //   <option value='red'>Red</option>
        //   <option value='purple'>Purple </option>
        // </select>
      },
      position: { x: 245, y: 36 },
      style: {
        backgroundColor: "whitesmoke",
        borderRadius: "25px",
        height: "77px"
      },
    },
    {
      id: 2,
      data: { 
        label: <div onClick={()=>navigate("/monthlyFlow")}>
        <CalendarTodayIcon/>
        <br/>
        Recipe 
        </div>
      },
      type:'default',
      position: {
        // x: Math.random() * window.innerWidth - 100,
        // y: Math.random() * window.innerHeight,
        //472.76,37.1204
        x: 472.76, 
        y: 37.1204
      },
      style: {
        backgroundColor: "whitesmoke",
        borderRadius: "25px",
        height: "77px"
      },
    },
    {
      id: '3',
      type: 'output', // output node
      data: { label: 'Output Node' },
      position: { x: 817, y: 36 },
      style: {
        backgroundColor: "whitesmoke",
        borderRadius: "25px",
        height: "77px"
      },
    },

    { id: 'e1-2', source: '1', target: '2', animated: true },
    { id: 'e1-23', source: '2', target: '3', animated: true },
  ]

  const getNodeId = () => `randomnode_${+new Date()}`;

  const [elements, setElements] = useState(initialElements);
  const onConnect = (params) => setElements((els) => addEdge(params, els));

  const onAdd = useCallback(() => {
    const newNode = {
      id: getNodeId(),
      data: { 
        label: <CalendarTodayIcon/> 
      },
      type:'default',
      position: {
        // x: Math.random() * window.innerWidth - 100,
        // y: Math.random() * window.innerHeight,
        //472.76,37.1204
        x: 472.76, 
        y: Math.random() * window.innerHeight
      },
      style: {
        backgroundColor: "whitesmoke",
        borderRadius: "25px",
        height: "77px"
      },
    };
    setElements((els) => els.concat(newNode));
    console.log(newNode.id);
  }, [setElements]);

  return (
    <div className='flowaddition'>
      <div style={{ width: '100%', height: '100vh' }}>
        {/* <ReactFlowProvider> */}
          <ReactFlow elements={elements} onConnect={onConnect}>
            {/* <button className='button' onClick={onAdd}> */}
            <button className='button'>
            +
            </button>
          </ReactFlow>
        {/* </ReactFlowProvider> */}
      </div>
    </div>
  )
}
