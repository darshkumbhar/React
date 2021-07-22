import logo from './logo.svg'
import './App.css'
import { Button, Container, Row, Col } from 'reactstrap'
import HomeView from '../src/container/HomeView'
import Home from '../src/component/Home'
import About from '../src/component/About'
import Data from '../src/component/Data'

import { Switch, Route } from 'react-router-dom'
function App() {
	return (
		<main>
			<Switch>
				<HomeView>
					<Route path='/' exact component={Home} />
					<Route path='/about' exact component={About} />
					<Route path='/data' exact component={Data} />
				</HomeView>
			</Switch>
		</main>
	)
}

export default App
