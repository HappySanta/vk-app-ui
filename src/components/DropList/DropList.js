import React, {Component} from "react"
import PropTypes from "prop-types"
import {createClassName} from "../../tools"
import css from "./DropList.scss"

class DropList extends Component {


	constructor(props, context) {
		super(props, context)
		this.state = {
			open: false
		}
		this.timer = null
	}

	onClick = () => {
		clearTimeout(this.timer)
		if (!this.state.open) {
			this.setState({open: true})
		}
	}
	onMouseEnter = () => {
		clearTimeout(this.timer)
		if (!this.state.open) {
			this.setState({open: true})
		}
	}
	onMouseLeave = () => {
		clearTimeout(this.timer)
		this.timer = setTimeout(this.forceHide, 100)
	}
	forceHide = () => {
		if (this.state.open) {
			this.setState({open: false})
		}
		clearTimeout(this.timer)
	}

	item({onClick, body, noWhiteSpace}, index) {
		return <div key={index}
					data-index={index}
					onClick={onClick}
					className={createClassName({
						[css['DropList__item']]: 1,
						[css['DropList__item--no-ws']]: noWhiteSpace,
					})}>
			{body}
		</div>
	}

	render() {
		const {block, className, items, pin, windowStyle} = this.props
		const {open} = this.state
		return <div onClick={this.onClick}
					onMouseEnter={this.onMouseEnter}
					onMouseLeave={this.onMouseLeave}
					className={createClassName({
						[css["DropList"]]: 1,
						[css["DropList--block"]]: block,
						[className]: !!className,
					})}>
			{this.props.children}
			{open && <div onClick={this.forceHide} style={windowStyle} className={createClassName({
				[css['DropList__window']]: 1,
				[css['DropList__window--' + pin]]: 1,
			})}>
				{items.map((item, index) => this.item(item, index))}
			</div>}
		</div>
	}
}

DropList.propTypes = {
	block: PropTypes.bool,
	className: PropTypes.string,
	pin: PropTypes.oneOf(['left', 'right']),
	windowStyle: PropTypes.object,
	items: PropTypes.arrayOf(PropTypes.shape({
		body: PropTypes.oneOf([PropTypes.string, PropTypes.element]),
		/**
		 *
		 */
		onClick: PropTypes.func,
		/** Не добавлять white-space: nowrap; */
		noWhiteSpace: PropTypes.bool,
	}))
}

DropList.defaultProps = {
	pin: 'left',
	windowStyle: {}
}

/**
 * Замена пробелов/дефисов на неразрывные пробеылы
 * @param {string} str
 * @return {string}
 */
DropList.clearSpace = str => {
	return (str || "").toString().replace(/ /g, ' ')
		.replace(/-/g, '‑')
}


module.exports = DropList