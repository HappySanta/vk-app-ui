import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {createClassName, isMobile} from "../../tools"
import css from './Link.scss'

export default class Link extends Component {
	render() {
		const {type, component, className: baseClassName, children, ...restProps} = this.props,
			Component = component

		const className = createClassName({
			[css['Link']]: 1,
			[type ? css[`Link--${type}`] : '']: !!type,
			[baseClassName]: baseClassName,
			[css['Link--mobile']]: isMobile(this.props)
		})

		return <Component
			className={className} {...restProps}>
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