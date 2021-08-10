import React, { Component } from 'react'

import classes from './App.css'
import Persons from '../component/persons/Persons'
import Cockpit from '../component/cockpit/Cockpit'
import WithClass from '../HOC/WithClass'
import AuthContext from '../context/auth-context'

class App extends Component {
	constructor(props) {
		super(props)
		console.log('[App.js] Inside Constructor', props)
	}
	state = {
		persons: [
			{ id: 'asfa1', name: 'Max', age: 28 },
			{ id: 'vasdf1', name: 'Manu', age: 29 },
			{ id: 'asdf11', name: 'Stephanie', age: 26 },
		],

		showPersons: false,
		showCockpit: true,
		changeCounter: 0,
		authenticated: false,
	}

	static getDerivedStateFromProps(props, state) {
		console.log('[App.js] Inside getDerivedStateFromProps', props)
		return state
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log('[App.js] shouldComponentUpdate')
		return true
	}

	componentDidUpdate() {
		console.log('[App.js] componentDidUpdate')
	}

	componentDidMount() {
		console.log('[App.js] componentDidMount')
	}

	nameChangeHandler = (event, id) => {
		const personIndex = this.state.persons.findIndex((p) => {
			return p.id === id
		})
		const person = {
			...this.state.persons[personIndex],
		}
		person.name = event.target.value
		const persons = [...this.state.persons]
		persons[personIndex] = person

		this.setState((prevState, props) => {
			return {
				persons: persons,
				changeCounter: prevState.changeCounter + 1,
			}
		})
	}
	toggleHandler = () => {
		const show = this.state.showPerson
		this.setState({
			showPerson: !show,
		})
	}
	deleteHandle = (personIndex) => {
		const persons = [...this.state.persons]
		persons.splice(personIndex, 1)
		this.setState({ persons: persons })
	}

	loginHandler = () => {
		this.setState({
			authenticated: true,
		})
	}
	render() {
		console.log('[App.js] Inside render')
		let persons = null
		if (this.state.showPerson) {
			persons = (
				<div>
					<Persons
						persons={this.state.persons}
						clicked={this.deleteHandle}
						changed={this.nameChangeHandler}
						isAuthenticated={this.state.authenticated}
					/>
				</div>
			)
			// style.backgroundColor = 'red'
		}

		return (
			<WithClass classes='App'>
				<button
					onClick={() => {
						this.setState({ showCockpit: false })
					}}
				>
					Remove Cockpit
				</button>
				<AuthContext.Provider
					value={{ authenticated: this.state.authenticated, login: this.loginHandler }}
				>
					{this.state.showCockpit ? (
						<Cockpit
							showPerson={this.state.showPerson}
							personsLength={this.state.persons.length}
							clicked={this.toggleHandler}
							title={this.props.appTitle}
							login={this.loginHandler}
						/>
					) : null}
					{persons}
				</AuthContext.Provider>
			</WithClass>
		)
	}
}

export default App
