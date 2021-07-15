import {foo } from "./test"
import React from "react"
// var age=29;

class Hello extends React.Component {
	render() {
		return <h1>Hello</h1>
	}
}
export default Hello


function sayHello() {
    return foo
}
sayHello()