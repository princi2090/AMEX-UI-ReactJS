import React from 'react';
import ReactFlow from 'react-flow-renderer';
const Flowchart=()=> {
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
            backgroundColor: 'red',
        }
        },
        // default node
        {
          id: '2',
          // you can also pass a React component as a label
          data: { label: <div>
                <select name='Reciepe' multiple>
                    <option value='ADD'>ADD</option>
                    <option value='JOIN'>JOIN</option>
                    <option value='CONCAT'>CONCAT</option>
                    <option value='FILTER'>FILTER</option>
                </select>
                </div> },
          position: { x: 472, y: 86 },
          style:{
            backgroundColor: 'green',
        }
        },
        {
          id: '3',
          type: 'output', // output node
          data: { label: 'Output Node' },
          position: { x: 737, y: 115 },
        },
        {
            id: '4',
            type: 'input', // input node
            data: { label: <select>
              <option value='red'>Red</option>
              <option value='green'>green </option>
              <option value='blue'>blue </option>
              <option value='yellow'>yellow </option>
            </select> },
            position: { x: 245, y: 190 },
            style:{
                backgroundColor: 'blue',
            }
          },
        // animated edge
        { id: 'e1-2', source: '1', target: '2', animated: true },
        { id: 'e1-23', source: '1', target: '4', animated: true },
        { id: 'e1-42', source: '4', target: '2', animated: true },
        { id: 'e2-3', source: '2', target: '3' },
      ];
  return <div style={{width:'100%',height:'100vh'}}>
        <ReactFlow elements={elements}/>
  </div>;
}

export default Flowchart;