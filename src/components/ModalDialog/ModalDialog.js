import React, {Component} from 'react'
import PropTypes from 'prop-types'
import WaitDots from "../WaitDots/WaitDots"
import css from './ModalDialog.scss'
import {createClassName, isMobile} from "../../tools"
import Button from "../Button/Button"

export default class ModalDialog extends Component {

	windowNode = null
	rootNode = null
	bgNode = null

	oldOverflowValue = ''

	onClose = (type, ev) => {
		if (this.props.loading) {
			return
		}
		this.props.onClose(type, ev)
	}

	onCrossClick = ev => this.onClose("cross", ev)

	onCancelBtnClick = ev => this.onClose("cancel", ev)

	onBackgroundClick = ev => this.onClose("background", ev)

	onWindowClick = ev => ev.stopPropagation()

	onConfirmClick = ev => this.props.onConfirm(ev)

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
					this.props.afterResolveHeight(windowHeight + 85)
				}
			}
		}
	}

	renderFooter() {
		return [
			<div className={css['ModalDialog__footer-right']} key={"right"}>
				<Button onClick={this.onCancelBtnClick} type={"transparent"}>{this.props.cancelText}</Button>
				<div className={css['ModalDialog__btn-separator']}/>
				<Button loading={this.props.loading}
						onClick={this.onConfirmClick}>{this.props.confirmText}</Button>
			</div>
		]
	}

	render() {
		return <div ref={this.catchRootNode}
					onClick={this.onBackgroundClick}
					className={css['ModalDialog']}>
			<div ref={this.catchBgNode}
				 className={css['ModalDialog__box']}>
				<div onClick={this.onWindowClick}
					 ref={this.catchWindowNode}
					 className={css['ModalDialog__window']}>
					<div className={css['ModalDialog__header']}>
						{this.props.header}
						<button onClick={this.onCrossClick} aria-label={this.props.closeLabel} className={css['ModalDialog__close']}/>
					</div>
					<div className={createClassName({[css['ModalDialog__body']]:1, [css['ModalDialog__body--padding']]:this.props.padding})}>
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
	header: PropTypes.string,
	closeLabel: PropTypes.string,
	padding: PropTypes.bool,
	onClose: PropTypes.func,
	onConfirm: PropTypes.func,
	cancelText: PropTypes.string,
	confirmText: PropTypes.string,
	catchOverflow: PropTypes.bool,
	loading: PropTypes.bool,
}

ModalDialog.defaultProps = {
	closeLabel: "Закрыть диалог",
	header: " ",
	padding: true,
	cancelText: "Отменить",
	confirmText: "Сохранить",
	catchOverflow:true,
}