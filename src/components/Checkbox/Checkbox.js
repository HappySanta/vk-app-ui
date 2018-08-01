import React, {Component} from 'react'
import PropTypes from 'prop-types'
import css from './Checkbox.scss'
import {createClassName, isMobile} from "../../tools"

export default class Checkbox extends Component {
	render() {
		const {className: baseClassName, children, ...restProps} = this.props

		const className = createClassName({
			[css['Checkbox']]: true,
			[baseClassName ? ` ${baseClassName}` : '']: true,
			[css['Checkbox--mobile']]: isMobile(this.props)
		})

		const rp = {...restProps}
		delete rp.className

		return <label className={className}>
			<input type="checkbox" className={css["Checkbox__input"]} {...rp} />
			{children ? <span className={css["Checkbox__text"]}>{children}</span> : null}
		</label>
	}
}

Checkbox.propTypes = {
	checked: PropTypes.bool,
	onChange: PropTypes.func,
	className: PropTypes.string,
	mobile: PropTypes.bool
}