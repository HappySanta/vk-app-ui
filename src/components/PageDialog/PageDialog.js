import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {createClassName} from "../../tools"
import css from './PageDialog.scss'

export default class PageDialog extends Component {

	windowNode = null
	rootNode = null
	bgNode = null

	oldOverflowValue = ''

	onClose = (type, ev) => {
		this.props.onClose(type, ev)
	}

	onCrossClick = ev => this.onClose("cross", ev)

	onBackgroundClick = ev => this.onClose("background", ev)

	onWindowClick = ev => ev.stopPropagation()

	catchWindowNode = node => this.windowNode = node
	catchRootNode = node => this.rootNode = node
	catchBgNode = node => this.bgNode = node

	componentDidMount() {
		if ( this.props.catchOverflow && window && window.document && window.document.body) {
			this.oldOverflowValue = window.document.body.style.overflow
			window.document.body.style.overflow = 'hidden'
		}
		this.makeCenter()
	}

	componentWillUnmount() {
		if ( this.props.catchOverflow && window && window.document && window.document.body) {
			window.document.body.style.overflow = this.oldOverflowValue
		}
	}

	makeCenter() {
		if (this.windowNode && this.rootNode && this.bgNode) {
			const windowHeight = this.windowNode.clientHeight
			const rootHeight = this.rootNode.clientHeight
			if (rootHeight - windowHeight >= 10) {
				const offset = Math.round((rootHeight-windowHeight)/2)
				this.bgNode.style.paddingTop = offset + 'px'
			} else {
				this.bgNode.style.paddingTop = ''
				if (this.props.afterResolveHeight) {
					this.props.afterResolveHeight(windowHeight + 10)
				}
			}
		}
	}

	render() {
		const hasHeader = !!this.props.header
		return <div ref={this.catchRootNode}
					onClick={this.onBackgroundClick}
					className={css['PageDialog'] + " " + this.props.className}>
			<div ref={this.catchBgNode}
				 className={css['PageDialog__box']}>
				<div onClick={this.onWindowClick}
					 ref={this.catchWindowNode}
					 className={css['PageDialog__window']}>
					<button onClick={this.onCrossClick} aria-label={this.props.closeLabel}
							className={css['PageDialog__close']}/>
					{hasHeader ? <div className={css['PageDialog__header']}>
						{this.props.header}
					</div> : null}
					<div className={createClassName({
						[css['PageDialog__body']]: 1,
						[css['PageDialog__body--header']]: hasHeader
					})}>
						{this.props.children}
					</div>
				</div>
			</div>
		</div>
	}
}

PageDialog.propTypes = {
	closeLabel: PropTypes.string,
	className: PropTypes.string,
	onClose: PropTypes.func,
	catchOverflow: PropTypes.bool,
	header: PropTypes.oneOfType([
		PropTypes.element
	]),
}

PageDialog.defaultProps = {
	closeLabel: "Закрыть диалог",
	className: "",
	catchOverflow: true,
}