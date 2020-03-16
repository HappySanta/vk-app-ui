import React, {Children, Component, Fragment} from 'react'
import PropTypes from 'prop-types'
import css from './FormLayout.scss'
import {createClassName} from "../../tools"

export function FormItem({children, top, bottom, ...restProps}) {
	return <div {...restProps}>{children}</div>
}

export class FormLayout extends Component {

	onSubmit = e => {
		e.preventDefault()
		this.props.onSubmit()
	}

	render() {
		const {
			children,
			TagName,
			className,
			getRef,
			onSubmit,
			grow,
			...restProps
		} = this.props


		return React.createElement(TagName, {
				...restProps,
				className: createClassName({
					[css['FormLayout']]: 1,
					[css['FormLayout--grow']]: grow,
					[className]: !!className,

				}),
				onSubmit: this.onSubmit,
				ref: getRef
			},
			<Fragment>
				<div className={css['FormLayout__container']}>
					{Children.toArray(children).map((field, i) => {
						if (field) {
							const {status, top, bottom} = field.props

							return (
								<div
									className={createClassName({
										[css['FormLayout__row']]: 1,
										[css[`FormLayout__row--s-${status}`]]: !!status
									})}
									key={field.key || `row-${i}`}
								>
									{top && <div className={css['FormLayout__row-top']}>{top}</div>}
									{field}
									{bottom && <div className={css['FormLayout__row-bottom']}>{bottom}</div>}
								</div>
							)
						} else {
							return null
						}
					})}
				</div>
			</Fragment>)
	}
}

FormLayout.propTypes = {
	status: PropTypes.oneOf(["error"]),
	top: PropTypes.oneOf([
		PropTypes.string,
		PropTypes.element,
	]),

	bottom: PropTypes.oneOf([
		PropTypes.string,
		PropTypes.element,
	]),

	TagName: PropTypes.string,
	onSubmit: PropTypes.func,
	/**
	 * flex-grow:1
	 */
	grow: PropTypes.func,
}

FormLayout.defaultProps = {
	TagName: 'form',
	onSubmit: () => {
	}
}