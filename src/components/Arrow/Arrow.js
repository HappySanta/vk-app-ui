import React, {Component} from "react"
import PropTypes from 'prop-types'

const block = {
	display: 'block'
}

const none = {}
export default class Arrow extends Component {

	render() {
		const style = this.props.block ? block : none
		if (this.props.direction === "down") {
			return <svg width="8" height="4" style={style} xmlns="http://www.w3.org/2000/svg">
				<path d="M.8.7L4 3.3 7.2.7" stroke={this.props.color} strokeWidth={this.props.strokeWidth} fill="none"
					  fillRule="evenodd"
					  strokeLinecap="round" strokeLinejoin="round"/>
			</svg>
		} else if (this.props.direction === "up") {
			return <svg width="8" height="4" style={style} xmlns="http://www.w3.org/2000/svg">
				<path d="M.8 3.3L4 .7l3.2 2.6" stroke={this.props.color} strokeWidth={this.props.strokeWidth}
					  fill="none"
					  fillRule="evenodd"
					  strokeLinecap="round" strokeLinejoin="round"/>
			</svg>
		} else if (this.props.direction === "left") {
			return <svg width="4" height="8" style={style} xmlns="http://www.w3.org/2000/svg">
				<path d="M3.3 7.2L.7 4 3.3.8" stroke={this.props.color} strokeWidth={this.props.strokeWidth} fill="none"
					  fillRule="evenodd"
					  strokeLinecap="round" strokeLinejoin="round"/>
			</svg>
		} else {
			return <svg width="4" height="8" style={style} xmlns="http://www.w3.org/2000/svg">
				<path d="M.7 7.2L3.3 4 .7.8" stroke={this.props.color} strokeWidth={this.props.strokeWidth} fill="none"
					  fillRule="evenodd"
					  strokeLinecap="round" strokeLinejoin="round"/>
			</svg>
		}
	}
}

Arrow.propTypes = {
	/** Цвет иконки currentColor */
	color: PropTypes.string,
	/** Направление */
	direction: PropTypes.oneOf(['down', 'up', 'left', 'right']),
	block: PropTypes.bool,
	strokeWidth: PropTypes.number,
}

Arrow.defaultProps = {
	color: "#92A0B1",
	direction: "down",
	block: false,
	strokeWidth: 1.3
}