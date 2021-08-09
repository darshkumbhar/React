import Home from '../src/component/Home'

import About from '../src/component/About'

import Data from '../src/component/Data'
import { Router, Route } from 'react-router-dom'

export default (
	<Router>
		<Route path='/about' component={About} />
		<Route path='/home' component={Home} />
		<Route path='/data' component={Data} />
	</Router>
)
