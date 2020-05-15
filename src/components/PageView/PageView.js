import React, {Component} from 'react'
import PropTypes from 'prop-types'
import VkSdk from "@happysanta/vk-apps-sdk"
import {HS_RESIZE_REQUEST_EVENT} from "../../tools"

let resizeTimer = null

function resize(w, h) {
	clearTimeout(resizeTimer)
	resizeTimer = setTimeout(() => {
		VkSdk.resizeWindow(w, h).catch(e => {
			console.error("@happysanta/vk-app-ui Page error: " + e)
		})
	}, 10)
}

let resizeEventListener = false

export default class PageView extends Component {
	constructor(props, context) {
		super(props, context)
		this.widthBeforeMount = null
		this.heightBeforeMount = null
	}

	getFrameHeight() {
		const style = window.getComputedStyle(document.body)
		const h = document.body.scrollHeight + parseInt(style.paddingTop, 10) + parseInt(style.paddingBottom, 10)
		return h
	}

	componentDidMount() {
		this.widthBeforeMount = window.innerWidth
		this.heightBeforeMount = window.innerHeight

		if (this.props.width || this.props.height) {
			const w = this.props.width || window.innerWidth
			let h = this.props.height || window.innerHeight
			if (this.props.height === -1) {
				h = this.getFrameHeight()
			}
			resize(w, h)
		}

		if (!resizeEventListener) {
			resizeEventListener = this.onResizeCall
			window.addEventListener(HS_RESIZE_REQUEST_EVENT, this.onResizeCall)
		}
	}

	onResizeCall = e => {
		if (e.width && e.height) {
			resize(e.width, e.height)
		} else if (document.body.scrollHeight > document.body.clientHeight) {
			const h = this.getFrameHeight()
			const w = window.innerWidth
			resize(w, h)
		}
	}

	componentWillUnmount() {
		if (this.props.width || this.props.height) {
			const w = this.widthBeforeMount
			const h = this.heightBeforeMount
			resize(w, h)
		}
		if (resizeEventListener === this.onResizeCall) {
			resizeEventListener = null
			window.removeEventListener(HS_RESIZE_REQUEST_EVENT, this.onResizeCall)
		}
	}

	render() {
		if (this.props.center) {
			const {width, height} = this.props
			const style = {
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center'
			}
			if (width) {
				style.width = width + 'px'
			}
			if (height) {
				style.height = height + 'px'
			}
			return <div style={style}>{this.props.children}</div>
		}
		return this.props.children || null
	}
}

PageView.propTypes = {
	id: PropTypes.string,
	/** Ширина в пикселях, обязательна константа если задано **/
	width: PropTypes.number,
	/** Высота в пикселях, обязательна константа если задано -1 -- авто высота **/
	height: PropTypes.number,
	center: PropTypes.bool,
}