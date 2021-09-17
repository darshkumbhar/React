import React from 'react'
import classes from './BackDrop.module.css'
const BackDrop = (props) =>
	props.show ? <div className={classes.Backdrop} onClick={props.clicked_BackDrop}></div> 
	: null
export default BackDrop
