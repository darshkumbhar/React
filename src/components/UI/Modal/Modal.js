import React, { Component } from 'react'
import classes from './Modal.module.css'
import Aux from '../../../HOC/Auxilliary/Auxilliary'
import BackDrop from '../BackDrop/BackDrop'
class Modal extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		return nextProps.show !== this.props.show || nextProps.children !== this.props.children
	}
	componentDidUpdate() {
		console.log('[modal] will update ')
	}
	render() {
		return (
			<Aux>
				<BackDrop show={this.props.show} clicked_BackDrop={this.props.modalClose} />
				<div
					className={classes.Modal}
					style={{
						transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
						opacity: this.props.show ? '1' : '0',
					}}
				>
					{this.props.children}
				</div>
			</Aux>
		)
	}
}
export default Modal
