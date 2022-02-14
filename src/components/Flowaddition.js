import React,{useState,useCallback, useEffect} from 'react'
import "../styles/FlowStyles.css"
import ReactFlow,{
  addEdge,
} from 'react-flow-renderer';

export const Flowaddition=()=> {
  

  const initialElements  = [
    {
      id: '1',
      type: 'input', // input node
      data: 
       { label: <select>
         <option value='red'>Red</option>
         <option value='purple'>Purple </option>
       </select> },
      position: { x: 245, y: 36 },
      style:{
        backgroundColor: "whitesmoke",
        borderRadius: "25px",
        height: "77px"
    },
}
]

const getNodeId = () => `randomnode_${+new Date()}`;

const [elements, setElements] = useState(initialElements);
const onConnect = (params) => setElements((els) => addEdge(params, els));
  
const onAdd = useCallback(() => {
    console.log("Hi");
    const newNode = {
      id: getNodeId(),
      data: { label: 'Added node' },
      position: {
        x: Math.random() * window.innerWidth - 100,
        y: Math.random() * window.innerHeight,
      },
      style:{
        backgroundColor: "whitesmoke",
        borderRadius: "25px",
        height: "77px"
    },
    };
    setElements((els) => els.concat(newNode));
  }, [setElements]);
  
  
  return (
    <div className='flowaddition'> 
        <div style={{width:'100%',height:'100vh'}}>
        <ReactFlow elements={elements} onConnect={onConnect}/>
        <button className='button' onClick={onAdd}>+</button>
        </div>
    </div>
  )
}
