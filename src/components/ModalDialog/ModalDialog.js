import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {createClassName} from "../../tools"
import Button from "../Button/Button"
import css from './ModalDialog.scss'

export default class ModalDialog extends Component {

	windowNode = null
	rootNode = null
	bgNode = null
	skipNextClick = false

	oldOverflowValue = ''

	onClose = (type, ev) => {
		if (this.props.loading) {
			return
		}
		this.props.onClose(type, ev)
	}

	onWindowMouseDown = () => {
		this.skipNextClick = true
	}
	onCrossClick = ev => this.onClose("cross", ev)

	onCancelBtnClick = ev => this.onClose("cancel", ev)

	onBackgroundClick = e => {
		if (!this.skipNextClick) {
			this.onClose("background", e)
		}
		this.skipNextClick = false
	}

	onWindowClick = ev => {
		this.skipNextClick = false
		ev.stopPropagation()
	}

	onConfirmClick = ev => this.props.onConfirm(ev)

	catchWindowNode = node => this.windowNode = node
	catchRootNode = node => this.rootNode = node
	catchBgNode = node => this.bgNode = node

	componentDidMount() {
		if (this.props.catchOverflow && window && window.document && window.document.body) {
			this.oldOverflowValue = window.document.body.style.overflow
			window.document.body.style.overflow = 'hidden'
		}
		this.makeCenter()
		if (this.props.topOffset !== undefined) {
			if (this.bgNode) {
				this.bgNode.style.paddingTop = this.props.topOffset + 'px'
			}
		}
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (prevProps.topOffset !== this.props.topOffset) {
			if (this.bgNode) {
				this.bgNode.style.paddingTop = this.props.topOffset + 'px'
			}
		}
	}

	componentWillUnmount() {
		if (this.props.catchOverflow && window && window.document && window.document.body) {
			window.document.body.style.overflow = this.oldOverflowValue
		}
	}

	makeCenter() {
		if (this.windowNode && this.rootNode && this.bgNode && !this.props.preventCenterPopup) {
			const windowHeight = this.windowNode.clientHeight
			const rootHeight = this.rootNode.clientHeight
			if (rootHeight - windowHeight >= 10) {
				const offset = Math.round((rootHeight - windowHeight) / 2)
				this.bgNode.style.paddingTop = offset + 'px'
			} else {
				this.bgNode.style.paddingTop = ''
				if (this.props.afterResolveHeight) {
					this.props.afterResolveHeight(windowHeight + 85)
				}
			}
		}
	}

	renderFooter() {
		return [
			<div className={css['ModalDialog__footer-box']} key={"right"}>
				<div>
					{this.props.footerLeft || null}
				</div>
				<div>
					{!!this.props.cancelText && <Button onClick={this.onCancelBtnClick}
														right={true}
														mode="secondary">{this.props.cancelText}</Button>}
					{!!this.props.confirmText && <Button loading={this.props.loading}
														 mode="primary"
														 onClick={this.onConfirmClick}>{this.props.confirmText}</Button>}
				</div>
			</div>
		]
	}

	render() {
		return <div ref={this.catchRootNode}
					onClick={this.onBackgroundClick}
					className={css['ModalDialog']}>
			<div ref={this.catchBgNode}
				 className={css['ModalDialog__box'] + ' ' + this.props.className}>
				<div onClick={this.onWindowClick}
					 onMouseDown={this.onWindowMouseDown}
					 ref={this.catchWindowNode}
					 className={css['ModalDialog__window']}>
					<div className={css['ModalDialog__header']}>
						{this.props.header || null}
						<button onClick={this.onCrossClick} aria-label={this.props.closeLabel}
								className={css['ModalDialog__close']}/>
					</div>
					<div className={createClassName({
						[css['ModalDialog__body']]: 1,
						[css['ModalDialog__body--padding']]: this.props.padding
					})}>
						{this.props.children}
					</div>
					<div className={css['ModalDialog__footer']}>
						{this.props.footer || this.renderFooter()}
					</div>
				</div>
			</div>
		</div>
	}
}

ModalDialog.propTypes = {
	footer: PropTypes.oneOfType([
		PropTypes.element
	]),
	footerLeft: PropTypes.element,
	header: PropTypes.string,
	closeLabel: PropTypes.string,
	padding: PropTypes.bool,
	onClose: PropTypes.func,
	onConfirm: PropTypes.func,
	cancelText: PropTypes.string,
	confirmText: PropTypes.string,
	catchOverflow: PropTypes.bool,
	loading: PropTypes.bool,
	preventCenterPopup: PropTypes.bool,
	className: PropTypes.string,
	topOffset: PropTypes.number,
}

ModalDialog.defaultProps = {
	closeLabel: "Закрыть диалог",
	header: " ",
	padding: true,
	cancelText: "Отменить",
	confirmText: "Сохранить",
	catchOverflow: true,
	preventCenterPopup: false,
	className: "",
}