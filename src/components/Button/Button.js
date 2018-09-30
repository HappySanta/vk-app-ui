import React, {Component} from 'react'
import PropTypes from 'prop-types'
import WaitDots from "../WaitDots/WaitDots"
import css from './Button.scss'
import {createClassName, isMobile} from "../../tools"

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
		let {type, component, className: baseClassName, children, loading, fixedWidth, ...restProps} = this.props
		let Component = component ? component : this.props.href ? "a" : 'button'


		const className = createClassName({
			[css.Button]: true,
			[baseClassName ? baseClassName : '']: true,
			[css['Button--loading']]: loading,
			[css["Button--mobile"]]: isMobile(this.props),
			[type ? css['Button--' + type] : '']: !!type,
		})

		if (loading) {
			if (!restProps.style) {
				restProps.style = {}
			}
			if (fixedWidth !== false) {
				restProps.style.minWidth = this.minWidth + 'px'
			}
		}

		return (
			<Component
				ref={this.catchRef}
				className={className}
				{...restProps}
			>
				{loading ? <WaitDots color={type === 'secondary' || type === 'transparent' ? 'blue' : ''}/> : children}
			</Component>
		)
	}
};

Button.propTypes = {
	/** Контент кнопки */
	children: PropTypes.any,
	/** Обработчик события клика, также доступны любые другие обработчики собтий как и на обычных кнопках  */
	onClick: PropTypes.func,
	/** Внешний вид кнопки */
	type: PropTypes.oneOf(['default', 'secondary', 'transparent', '']),
	/** Мобильный вид кнопки или нет */
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
}

Button.defaultProps = {
	type: 'default',
	fixedWidth: true
}

module.exports = Button