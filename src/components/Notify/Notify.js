import React, {Component} from 'react'
import PropTypes from 'prop-types'
import css from './Notify.scss'
import {createClassName} from "../../tools"

export default class Notify extends Component {
	render() {
		const {type} = this.props
		const className = createClassName({
			[css["Notify"]]:true,
			[css["Notify--"+type]]: 1
		})
		return <div className={className + " " + (this.props.className||"")}>{this.props.children}</div>
	}
}

Notify.propTypes = {
	type: PropTypes.oneOf(["success", "info", "error"])
}

Notify.defaultProps = {
	type: "info"
}