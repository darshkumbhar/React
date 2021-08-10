import React, { useEffect, useRef, useContext } from 'react'
import AuthContext from '../../context/auth-context'

const Cockpit = (props) => {
	const toggleBtnRef = useRef(null)
	const authContext = useContext(AuthContext)
	console.log(authContext.authenticated)
	useEffect(() => {
		console.log('[cockpit.js] in im useEffect')
		// setTimeout(() => {
		// 	alert('saved data to coloud')
		// }, 1000)
		toggleBtnRef.current.click()
		return () => {
			console.log('clean up in use effect---')
		}
	}, [])

	useEffect(() => {
		console.log('[cockpit.js] in im 2nd useEffect')
		return () => {
			console.log('clean up in 2nd use effect !!!!!!')
		}
	})

	const Assingedclasses = []
	const style = {
		backgroundColor: 'green',
		color: 'white',
		font: 'inherit',
		border: '1px solid blue',
		padding: '8px',
		cursor: 'pointer',
	}
	if (props.personsLength <= 2) {
		Assingedclasses.push('red')
	}
	if (props.personsLength <= 1) {
		Assingedclasses.push('bold')
	}

	if (props.showPerson) {
		style.backgroundColor = 'red'
	}

	return (
		<div>
			<h1>{props.title}</h1>
			<p className={Assingedclasses.join(' ')}>This is Really Working!!</p>
			<button ref={toggleBtnRef} style={style} onClick={props.clicked}>
				Switch name
			</button>

			<button onClick={authContext.login}>Login</button>
		</div>
	)
}
export default React.memo(Cockpit)
