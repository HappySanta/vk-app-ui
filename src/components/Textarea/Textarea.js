import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {createClassName, isMobile} from "../../tools"
import css from './Textarea.scss'

class Textarea extends Component {
	render() {
		const {className: baseClassName, ...restProps} = this.props

		const className = createClassName({
			[css["Textarea"]]: true,
			[css['Textarea--mobile']]: isMobile(this.props),
			[baseClassName]: baseClassName,
		})
		return <textarea className={className} {...restProps} />
	}
}

Textarea.propTypes = {
	className: PropTypes.string,
	mobile: PropTypes.bool
}

module.exports = Textarea