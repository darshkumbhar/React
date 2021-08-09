import React from 'react'

import HomeView from '../src/container/HomeView'
import Home from '../src/component/Home'
import About from '../src/component/About'
import Data from '../src/component/Data'
import AddUser from './component/AddUser'

import { Switch, Route } from 'react-router-dom'
function App() {
	return (
		<main>
			<Switch>
				<HomeView>
					<Route path='/' exact component={Home} />
					<Route path='/about' exact component={About} />
					<Route path='/data' exact component={Data} />
					<Route path='/add' exact component={AddUser} />
				</HomeView>
			</Switch>
		</main>
	)
}

export default App
