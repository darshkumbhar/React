import React from 'react';
import { Button,Container ,Card,CardBody,CardSubtitle,CardText,CardTitle} from 'reactstrap';

const User=({user})=> {
	return (
        <Card className="m-1">
        <CardBody className="font-weight-bold"> 
         <CardTitle>{user.id}</CardTitle>
        <CardText>{user.username}</CardText>
         <CardText>{user.email}</CardText>
         </CardBody>
        </Card>
      
        
	);
}
export default User;
