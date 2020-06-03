import React, {Component} from 'react'
import PropTypes from 'prop-types'
import css from './Notify.scss'
import {createClassName} from "../../tools"

export default class Notify extends Component {
	render() {
		const {type, className: bClassName} = this.props
		const className = createClassName({
			[css["Notify"]]: true,
			[css["Notify--" + type]]: 1,
			[bClassName]: !!bClassName,
		})
		return <div className={className + " " + (this.props.className || "")}>{this.props.children}</div>
	}
}

Notify.propTypes = {
	type: PropTypes.oneOf(["success", "info", "error"]),
	className: PropTypes.string,
}

Notify.defaultProps = {
	className: "",
	type: "info"
}