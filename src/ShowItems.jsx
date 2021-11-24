import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

function ShowItems(props){
    const[line, setLine] = useState(false);
    const CutLine = ()=>{
        setLine(true);
    }
    return (
    <div className="todo_div">
        <span className='delete_icon' onClick={CutLine}> <DeleteIcon/> </span>
        <li style={{textDecoration: line? 'line-through':"none"}}> 
         {props.text} 
        </li>
    </div>)
    
}
 
export default ShowItems;