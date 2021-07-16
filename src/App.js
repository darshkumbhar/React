import logo from './logo.svg';
import './App.css';
import {Button,Container,Row,Col} from 'reactstrap';
import Header from './component/Header';
import Home from './component/Home';
import About from './component/About';
import Menus from './component/Menus';
import Data from './component/Data';
import User from './component/User';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
function App() {
	return (
		<div className='App'>
			
			<Router>
			<Container>
			<Header name="React-Router-dom"/>	
			<Row>
			<Col md={4}>
			<Menus/>
			</Col>
			<Col md={8} style={{backgroundColor:'#F5F5F5'}} >
			<Route path="/" component={Home} exact/>
			<Route path="/about" component={About} exact/>
			<Route path="/data" component={Data} exact/>
			
			</Col>
			</Row>
			</Container>
			</Router>
		</div>
	);
}

export default App;
