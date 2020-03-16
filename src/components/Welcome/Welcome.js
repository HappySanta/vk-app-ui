import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {createClassName} from "../../tools"
import css from './Welcome.scss'

export default class Welcome extends Component {
	render() {
		const {
			className: baseClassName,
			children,
			header,
			description,
			iconUrl,
			iconHeight,
			icon,
			footer,
		} = this.props

		const className = createClassName({
			[css['Welcome']]: true,
			[baseClassName]: baseClassName,
		})

		return <div className={className}>
			{!!icon && <div className={css["Welcome__icon"]}>{icon}</div>}
			{!!iconUrl && <div className={css["Welcome__icon"]}>
				<img src={iconUrl} height={iconHeight} alt={""}/>
			</div>}
			{!!header && <div className={css["Welcome__header"]}>{header}</div>}
			{!!description && <div className={css["Welcome__description"]}>{description}</div>}
			{!!footer && <div className={css["Welcome__footer"]}>{footer}</div>}
			{children}
		</div>
	}
}

Welcome.propTypes = {
	header: PropTypes.oneOf([PropTypes.string, PropTypes.element]),
	footer: PropTypes.oneOf([PropTypes.string, PropTypes.element]),
	description: PropTypes.oneOf([PropTypes.string, PropTypes.element]),
	icon: PropTypes.oneOf([PropTypes.element]),
	iconUrl: PropTypes.oneOf([PropTypes.string]),
	/** высота икноки */
	iconHeight: PropTypes.oneOf([PropTypes.number]),
}