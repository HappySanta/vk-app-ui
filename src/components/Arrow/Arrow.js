import {Component} from "react"
import PropTypes from 'prop-types'
import React from "react"

export default class Arrow extends Component {

	render() {
		if (this.props.type === "down") {
			return <svg width="8" height="4" xmlns="http://www.w3.org/2000/svg">
				<path d="M.8.7L4 3.3 7.2.7" stroke={this.props.color} strokeWidth="1.3" fill="none" fillRule="evenodd"
					  strokeLinecap="round" strokeLinejoin="round"/>
			</svg>
		} else if (this.props.type === "up") {
			return <svg width="8" height="4" xmlns="http://www.w3.org/2000/svg">
				<path d="M.8 3.3L4 .7l3.2 2.6" stroke={this.props.color} strokeWidth="1.3" fill="none"
					  fillRule="evenodd"
					  strokeLinecap="round" strokeLinejoin="round"/>
			</svg>
		} else if (this.props.type === "left") {
			return <svg width="4" height="8" xmlns="http://www.w3.org/2000/svg">
				<path d="M3.3 7.2L.7 4 3.3.8" stroke={this.props.color} strokeWidth="1.3" fill="none" fillRule="evenodd"
					  strokeLinecap="round" strokeLinejoin="round"/>
			</svg>
		} else {
			return <svg width="4" height="8" xmlns="http://www.w3.org/2000/svg">
				<path d="M.7 7.2L3.3 4 .7.8" stroke={this.props.color} strokeWidth="1.3" fill="none" fillRule="evenodd"
					  strokeLinecap="round" strokeLinejoin="round"/>
			</svg>
		}
	}
}

Arrow.propTypes = {
	/** Цвет иконки */
	color: PropTypes.string,
	/** Направление */
	direction: PropTypes.oneOf(['down', 'up', 'left', 'right']),
}

Arrow.defaultProps = {
	color: "#92A0B1",
	direction: "down",
}