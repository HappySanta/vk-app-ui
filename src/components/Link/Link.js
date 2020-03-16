import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {createClassName} from "../../tools"
import css from './Link.scss'

export default class Link extends Component {
	render() {
		const {type, component, className: baseClassName, children, left, right, ...restProps} = this.props,
			Component = component

		const className = createClassName({
			[css['Link']]: 1,
			[type ? css[`Link--${type}`] : '']: !!type,
			[baseClassName]: baseClassName,
			[css["Link--left"]]: left,
			[css["Link--right"]]: right,
		})

		const rp = {...restProps}
		delete rp.mobile
		return <Component
			className={className} {...rp}>
			{children}
		</Component>
	}
}

Link.propTypes = {
	type: PropTypes.oneOf(['medium', 'bold', '']),
	component: PropTypes.string,
	className: PropTypes.string,
	children: PropTypes.any,
	mobile: PropTypes.bool
}

Link.defaultProps = {
	component: 'a'
}