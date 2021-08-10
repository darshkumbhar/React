import React from 'react'

const WithClass = (props) => {
	return <div className={props.classes}>{props.children}</div>
}
export default WithClass

// const withClass = (WrappedComponent, className) => {
// 	return (props) => {
// 		;<div className={className}>
// 			<WrappedComponent />
// 		</div>
// 	}
// }
// export default withClass
