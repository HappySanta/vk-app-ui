import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {createClassName} from "../../tools"
import css from './WaitDots.scss'

export default class WaitDots extends Component {
	render() {
		let {color, className: baseClassName} = this.props

		const className = createClassName({
			[css['WaitDots']]: true,
			[css['WaitDots--blue']]: color === 'blue',
			[baseClassName]: baseClassName
		})

		return <span className={className}>
        <span className={createClassName({[css['dot']]: 1, [css['dot1']]: 1})}/>
        <span className={createClassName({[css['dot']]: 1, [css['dot2']]: 1})}/>
        <span className={createClassName({[css['dot']]: 1, [css['dot3']]: 1})}/>
      </span>

	}
}

WaitDots.propTypes = {
	color: PropTypes.oneOf(['blue', 'white', '']),
	className: PropTypes.string
}