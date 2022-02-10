import React from 'react'
import "../styles/FlowStyles.css"
import ReactFlow from 'react-flow-renderer';

export const Flowaddition=()=> {
    const elements = [
        {
          id: '1',
          type: 'input', // input node
          data: { label: <select>
            <option value='red'>Red</option>
            <option value='purple'>Purple </option>
          </select> },
          position: { x: 245, y: 36 },
          style:{
            backgroundColor: 'red'
        }
    }
    ]
  return (
    <div className='flowaddition'> 
        <div style={{width:'100%',height:'100vh'}}>
        <ReactFlow elements={elements}/>
        <button className='button'>+</button>
        </div>
    </div>
  )
}
