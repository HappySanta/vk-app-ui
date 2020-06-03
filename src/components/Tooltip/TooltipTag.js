import React, {Component, Fragment} from "react"
import css from "./Tooltip.scss"
import Tooltip from './Tooltip'
import {createClassName} from "../../tools"
import PropTypes from "prop-types"

class TooltipTag extends Component {

	constructor(props, context) {
		super(props, context)
		this.state = {
			open: false
		}
	}

	enter = () => {
		if (!this.state.open) {
			this.setState({open: true})
		}
	}

	leave = () => {
		if (this.state.open) {
			this.setState({open: false})
		}
	}

	click = () => {
		if (!this.state.open) {
			this.setState({open: true})
		}
	}

	catchRef = node => {
		this.node = node
	}

	render() {
		return <Fragment>
			<div onMouseEnter={this.enter}
				 onMouseLeave={this.leave}
				 onClick={this.click}
				 ref={this.catchRef}
				 className={css['TooltipDesk__tag'] + " " + (this.props.className || "")}>?
			</div>
			{this.state.open && <Tooltip tooltipForElNode={this.node}
										 type="hint"
										 offsetY={2}
										 tooltipIsShown={true}>{this.props.children}</Tooltip>}
		</Fragment>
	}
}

module.exports = TooltipTag

Tooltip.propTypes = {
	className: PropTypes.string,
}