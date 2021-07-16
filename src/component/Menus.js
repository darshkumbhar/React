import React from 'react';
import {ListGroup,ListGroupItem } from 'reactstrap';
import {Link} from 'react-router-dom';
const Menus=()=>{
    return(
        <ListGroup>
        <Link className="list-group-item list-group-item-action" tag='a' to="/" action>Home</Link>
        <Link className="list-group-item list-group-item-action" tag='a' to="/about" action>About</Link>
        <Link className="list-group-item list-group-item-action" tag='a' to="/data" action>Data</Link>
        
        </ListGroup>
    )
}
export default Menus;