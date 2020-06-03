import React, {Component, Fragment} from "react"
import css from "./Tooltip.scss"
import {createClassName} from "../../tools"
import PropTypes from "prop-types"
import TimeView from "../TimeView/TimeView"

class Tooltip extends Component {

	state = {
		tooltipTop: 0,
		tooltipLeft: 0,
		cornerOffset: 10,
		cornerIsTop: false,
		offsetX: 'center'
	}

	constructor(props) {
		super(props)

		this.toolTip = React.createRef()
	}

	componentDidMount() {
		this.componentWillReceiveProps(this.props)
	}

	componentWillReceiveProps(nextProps) {
		let {tooltipForElNode, alignY, offsetX, offsetY, cornerOffset} = nextProps

		offsetY = offsetY ? parseInt(offsetY, 15) : 0
		offsetX = offsetX && offsetX !== 'center' ? parseInt(offsetX, 10) : 'center'
		cornerOffset = parseInt(cornerOffset, 15)

		if (tooltipForElNode) {
			const {top, left, width, height} = tooltipForElNode.getBoundingClientRect(),
				{height: toolTipHeight, width: toolTipWidth} = this.toolTip.current.getBoundingClientRect()

			let tooltipLeft = offsetX === 'center' ?
				(left + width / 2) :
				offsetX ?
					(left - parseInt(offsetX, 10)) :
					left,
				tooltipTop = top - toolTipHeight - offsetY,
				cornerIsTop = false

			cornerOffset = !cornerOffset || cornerOffset === 'center' ?
				'center' :
				cornerOffset < 10 ?
					10 :
					toolTipWidth - cornerOffset < 20 ?
						toolTipWidth - 20 :
						cornerOffset

			if (tooltipTop < 10 || (alignY === 'bottom' && window.innerHeight - (top + height + offsetY + toolTipHeight) > 10)) {
				tooltipTop = top + height + offsetY
				cornerIsTop = true
			}

			this.setState({tooltipTop, tooltipLeft, offsetX, cornerOffset, cornerIsTop})
		}
	}

	render() {
		const {tooltipIsShown, children, width, type} = this.props,
			{tooltipTop, tooltipLeft, cornerOffset, cornerIsTop, offsetX} = this.state

		const styles = {
			width: width ? width + 'px' : 'auto',
			top: tooltipTop + 'px',
			left: tooltipLeft + 'px',
			transform: offsetX === 'center' ? 'translateX(-50%)' : 'none'
		}

		const textStyles = {
			whiteSpace: width ? 'initial' : 'nowrap'
		}

		const cornerStyles = {
			left: cornerOffset === 'center' ? '50%' : cornerOffset + 'px',
			transform: cornerOffset === 'center' ? 'translateX(-50%)' : 'none'
		}

		const className = createClassName({
			[css['TooltipDesk']]: true,
			[css['TooltipDesk_hover']]: tooltipIsShown,
			[css['TooltipDesk_hint']]: type === 'hint',
			[this.props.className]: !!this.props.className
		})

		return (
			<div className={className}
				 style={styles}
				 ref={this.toolTip}>
				<div className={css['TooltipDesk__inner']}>
					<div className={css['TooltipDesk__text']} style={textStyles}>
						{children}
					</div>
					<div className={createClassName({
						[css['TooltipDesk__corner']]: true,
						[css['TooltipDesk__corner_top']]: cornerIsTop,
					})} style={cornerStyles}/>
				</div>
			</div>
		)
	}
}


module.exports = Tooltip

Tooltip.propTypes = {
	className: PropTypes.string,
}