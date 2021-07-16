import React from 'react';
import {Link} from 'react-router-dom';
import {Card,CardBody} from 'reactstrap';

function Header({ name, title }) {
	return (
		<div>
		<Card className="my-2 bg-warning">
		<CardBody>
			<h1 className="text-center my-4">{name}</h1>
			<p>{title}</p>
			</CardBody>
			</Card>
		</div>
	);
}
export default Header;
