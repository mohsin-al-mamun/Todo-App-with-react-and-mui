import React from "react";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
import ShowItems from './ShowItems'


function MakeTodos(){
    const [item, setItem] = useState("");
    const [listItems, setListItems] = useState([]);

    const storeItem = (event)=>{
         setItem(event.target.value);
    }

    const showAllItems = (e)=>{
      
       e.preventDefault();
       setListItems((prevData)=>{
         return [...prevData, item]
       });

       setItem("");
      
    }
    return (
    <>
    <div className='main_div'>
      <div className='center_div'>
        <br />
        <h3>Todo List</h3>
        <br />
        <form onSubmit={showAllItems} > <input type="text" placeholder="Add an item" value={item} onChange={storeItem} />
        <Button className='newBtn'  type='submit' >
            <AddIcon/>
        </Button>
        </form>
        
        <br />
        <ol> 
        {
          listItems.map((value,index)=> <ShowItems text={value} key={index} />) 
        }
            
        </ol>
        
      </div>

    </div>
        
    </> 
    )
    
};

export default MakeTodos;