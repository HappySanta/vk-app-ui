import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {createClassName, isMobile} from "../../tools"
import css from './Radio.scss'

export default class Radio extends Component {
	render() {
		const {className: baseClassName, children, ...restProps} = this.props

		const className = createClassName({
			[css['Radio']]: true,
			[baseClassName]: baseClassName,
			[css['Radio--mobile']]: isMobile(this.props)
		})

		const rp = {...restProps}
		delete rp.mobile
		return <label className={className}>
			<input type="radio" className={css["Radio__input"]} {...rp} />
			<span className={css["Radio__text"]}>{children}</span>
		</label>
	}
}

Radio.propTypes = {
	className: PropTypes.string,
	mobile: PropTypes.bool
}