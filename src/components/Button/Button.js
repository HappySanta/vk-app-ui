import React, {Component} from 'react'
import PropTypes from 'prop-types'
import WaitDots from "../WaitDots/WaitDots"
import css from './Button.scss'
import {createClassName} from "../../tools"

class Button extends Component {

	minWidth = null
	node = null

	componentDidMount() {
		this.updateMinWith()
	}

	componentDidUpdate() {
		this.updateMinWith()
	}

	catchRef = node => {
		this.node = node
	}

	updateMinWith() {
		if (!this.node) {
			this.minWidth = null
			return
		}
		if (!this.props.loading) {
			this.minWidth = this.node.offsetWidth
		}
	}

	render() {
		let {
			type, mode, component,
			left, right, top, bottom,
			className: baseClassName,
			children,
			loading,
			fixedWidth,
			wide,
			...restProps
		} = this.props
		let Component = component ? component : this.props.href ? "a" : 'button'


		const className = createClassName({
			[css.Button]: true,
			[baseClassName ? baseClassName : '']: true,
			[css['Button--loading']]: loading,
			[css['Button--wide']]: wide,
			[css['Button--left']]: left,
			[css['Button--right']]: right,
			[css['Button--top']]: top,
			[css['Button--bottom']]: bottom,
			[!!(mode || type) ? css['Button--' + (mode || type)] : '']: !!(mode || type),
		})

		if (loading) {
			if (!restProps.style) {
				restProps.style = {}
			}
			if (fixedWidth !== false) {
				restProps.style.minWidth = this.minWidth + 'px'
			}
		}

		const rp = {...restProps}
		// if (!this.props.href) {
		// 	this.props.

		// }
		return (
			<Component
				ref={this.catchRef}
				className={className}
				{...rp}
			>
				{loading ? <WaitDots color={type === 'secondary' || type === 'transparent' ? 'blue' : ''}/> : children}
			</Component>
		)
	}
}

Button.propTypes = {
	/** Контент кнопки */
	children: PropTypes.any,
	/** Обработчик события клика, также доступны любые другие обработчики собтий как и на обычных кнопках  */
	onClick: PropTypes.func,
	/** Внешний вид кнопки @deprecated используете атрибут mode */
	type: PropTypes.oneOf(['default', 'secondary', 'transparent', '']),
	/** Внешний вид кнопки */
	mode: PropTypes.oneOf([
		"primary",
		"secondary",
		"tertiary",
		"outline",
		"commerce",
		"destructive",
	]),
	/** Мобильный вид кнопки или нет @deprecated используйтк VKUI для мобильных кнопок */
	mobile: PropTypes.bool,
	/** Дополнительный css класс */
	className: PropTypes.string,
	/** URL ссылки */
	href: PropTypes.string,
	/** target ссылки, для внешник ссылок используйте _blank */
	target: PropTypes.string,
	/** Показывать анимацию загрузки вместо конктета */
	loading: PropTypes.bool,
	/** Фиксировать ширину кнопки при переключении на анимацию загрузки */
	fixedWidth: PropTypes.bool,
	/** Компонен, button или a, по умолчанию будет выбран button если нет атрибута href, иначе a  */
	component: PropTypes.string,
	/** Для кнопок ссылок не забудьте указывать rel="noopener noreferrer" чтобы не раскрыть referrer строннему сайту */
	rel: PropTypes.string,
	/** Блочная нопка на всю ширину */
	wide: PropTypes.bool,

	/** Отступ слева **/
	left: PropTypes.bool,
	/** Отступ справа **/
	right: PropTypes.bool,
	/** Отступ сверху **/
	top: PropTypes.bool,
	/** Отступ снизу **/
	bottom: PropTypes.bool,
}

Button.defaultProps = {
	// mode: 'primary',
	fixedWidth: true,
	rel: "noopener noreferrer"
}

module.exports = Button