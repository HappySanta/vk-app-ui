import React, {Component} from 'react'
import PropTypes from 'prop-types'
import css from './Switch.scss'
import {createClassName} from "../../tools"

export default class Switch extends Component {
	render() {
		return <label className={createClassName({
			[css["Switch"]]: true,
			[css["Switch--left"]]: this.props.left,
			[css["Switch--right"]]: this.props.right,
			[css["Switch--disabled"]]: this.props.disabled,
			[this.props.className]: !!this.props.className,
		})}>
			<input type="checkbox"
				   disabled={this.props.disabled}
				   checked={this.props.checked}
				   onChange={this.props.onChange}/>
			<span className={css["Switch__body"]}/>
		</label>
	}
}

Switch.propTypes = {
	checked: PropTypes.bool,
	onChange: PropTypes.func,
	left: PropTypes.bool,
	right: PropTypes.bool,
	disabled: PropTypes.bool,
	className: PropTypes.string,
}

Switch.defaultProps = {
	disabled: false,
}