import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {createClassName, HS_RESIZE_REQUEST_EVENT} from "../../tools"
import css from './Textarea.scss'

class Textarea extends Component {


	constructor(props, context) {
		super(props, context)
		this.node = null
		this.timer = null
	}

	getRef = node => {
		this.node = node
		if (this.props.getRef) {
			this.props.getRef(node)
		}
	}

	resize = () => {
		if (!this.node) return
		if (this.node.scrollHeight > this.node.clientHeight) {
			const style = window.getComputedStyle(this.node)
			const h = this.node.scrollHeight + parseInt(style.paddingTop, 10) + parseInt(style.paddingBottom, 10)
			if (this.props.maxHeight) {
				this.node.style.minHeight = Math.min(h, this.props.maxHeight) + 'px'
			} else {
				this.node.style.minHeight = h + 'px'
			}
			window.dispatchEvent(new Event(HS_RESIZE_REQUEST_EVENT))
		} else {
			clearTimeout(this.timer)
			this.timer = setTimeout(this.resizeDown, 300)
		}
	}

	resizeDown = () => {
		if (!this.node) return
		this.node.style.minHeight = ''
		this.resize()
	}


	componentDidUpdate(prevProps, prevState, snapshot) {
		this.resize()
	}

	componentDidMount() {
		this.resize()
	}

	render() {
		const {className: baseClassName, adapt, ...restProps} = this.props

		const className = createClassName({
			[css["Textarea"]]: true,
			[baseClassName]: baseClassName,
		})
		const rp = {...restProps}
		delete rp.getRef
		delete rp.maxHeight
		delete rp.adapt
		return <textarea ref={this.getRef} className={className} {...rp} />
	}
}

Textarea.propTypes = {
	className: PropTypes.string,
	adapt: PropTypes.bool,
	maxHeight: PropTypes.number,
	getRef: PropTypes.func,
}

Textarea.defaultProps = {
	maxHeight: 500,
}

module.exports = Textarea