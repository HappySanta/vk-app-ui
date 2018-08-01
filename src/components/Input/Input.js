import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {createClassName, isMobile} from "../../tools"
import css from './Input.scss'

export default class Input extends Component {
	render() {
		const {className: baseClassName, ...restProps} = this.props

		const className = createClassName({
			[css["Input"]]: true,
			[css['Input--mobile']]: isMobile(this.props),
			[baseClassName]: baseClassName,
		})
		return <input className={className} {...restProps} />
	}
}

Input.propTypes = {
	className: PropTypes.string,
	mobile: PropTypes.bool
}