import React,{useEffect,useState} from 'react';
import { Button,Jumbotron,Spinner } from 'reactstrap';

import axios from 'axios';
import User from "../component/User";

const Data= () => {


useEffect(()=>{
document.title="Data";
getAllData();
},[]);
const getAllData =()=>{
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((response)=>{
    setData(response.data); 
   
    },
    (error)=>{
console.log("error");
    }
    )
};
const[data,setData ]=useState([]);

const n=20;
const data1 = data.slice(0, n);
	return (
		<div  >
 
        <h3 className="mt-1">User List </h3>
        {
            data1.length>0 ?
            data1.map((item,index)=> 
            
            <User key={index} user={item}/>
            )
            :"no"
        }
    </div>
        
	)
}
export default Data;
