import React, { Component, PureComponent } from 'react'
import Person from './Person/person'

class Persons extends PureComponent {
	// static getDerivedStateFromProps(props, state) {
	// 	console.log('[persons.js] Inside getDerivedStateFromProps', props)
	// 	return state
	// }
	// shouldComponentUpdate(nextProps, nextState) {
	// 	console.log('[persons.js] Inside shouldComponentUpdate ')
	// 	if (
	// 		nextProps.persons !== this.props.persons ||
	// 		nextProps.changed !== this.props.changed ||
	// 		nextProps.clicked !== this.props.clicked
	// 	) {
	// 		return true
	// 	} else {
	// 		return false
	// 	}
	// }

	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log('[persons.js] Inside getSnapshotBeforeUpdate ')
		return { message: 'Snapshot!!' }
	}
	// componentWillReceiveProps(props) {
	// 	console.log('[persons.js] Inside receiveprops ')
	// }

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('[persons.js] Inside componentDidUpdate ')
		console.log(snapshot)
	}
	componentWillUnmount() {
		console.log('[persons.js] Inside componentWillUnmount ')
	}
	render() {
		console.log('[Persons.js] Rendering....')
		return this.props.persons.map((person, Index) => {
			return (
				<Person
					key={person.id}
					name={person.name}
					age={person.age}
					click={() => this.props.clicked(Index)}
					changed={(event) => this.props.changed(event, person.id)}
				/>
			)
		})
	}
}

export default Persons
