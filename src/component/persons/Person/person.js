import React, { Component } from 'react'
import PropTypes from 'prop-types'
import aux from '../../../HOC/Auxilliary'
import WithClass from '../../../HOC/WithClass'
import AuthContext from '../../../context/auth-context'
import './person.css'

class Person extends Component {
	constructor(props) {
		super(props)
		this.InputElementRef = React.createRef()
	}
	static contextType = AuthContext
	componentDidMount() {
		this.InputElementRef.current.focus()
		console.log(this.context.authenticated)
	}
	render() {
		console.log('[person.js] rendering!!!!!!!!')
		return (
			<WithClass classes='Person'>
				{this.context.authenticated ? <p>Authenticated....</p> : <p>Please Log in</p>}

				<p onClick={this.props.click}>
					I m {this.props.name} and I m {this.props.age} years old
				</p>
				<p>{this.props.children}</p>
				<input
					type='text'
					onChange={this.props.changed}
					value={this.props.name}
					// ref={(inputEl) => {
					// 	this.InputElement = inputEl

					// }}
					ref={this.InputElementRef}
				/>
			</WithClass>
		)
	}
}
Person.propTypes = {
	click: PropTypes.func,
	name: PropTypes.string,
	age: PropTypes.number,
	changed: PropTypes.func,
}
export default Person
