import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {createClassName} from "../../tools"
import Calendar from "../Calendar/Calendar"
import {inMonthNamesFullRU, monthNamesFullRU, weekNamesShortRU} from "../Calendar/helpers"
import Input from '../Input/Input'
import css from './DatePicker.scss'

export default class DatePicker extends Component {

	state = {
		open: false
	}

	isMouseDownEvent = false

	onFocus = () => {
		this.setState({open: true})
	}

	onBlur = () => {
		if (!this.isMouseDownEvent) {
			this.setState({open: false})
		}
		this.isMouseDownEvent = false
	}

	onMouseDown = () => {
		this.isMouseDownEvent = true
	}

	onMouseUp = () => {
		this.isMouseDownEvent = false
	}

	getTextValue() {
		if (this.props.value) {
			return this.props.getDateFormat(this.props.value)
		}
		return ""
	}

	onChange = day => {
		this.setState({open: false})
		this.props.onChange(day)
	}

	popup() {
		return <div onMouseDown={this.onMouseDown}
					onBlur={this.onBlur}
					onMouseUp={this.onMouseUp}
					tabIndex={-10}
					className={css["DatePicker__dropdown"]}>
			<Calendar weekNames={this.props.weekNames || weekNamesShortRU}
					  monthNames={this.props.monthNames || monthNamesFullRU}
					  currentDay={this.props.value || undefined}
                      isActiveDay={this.props.isActiveDay}
					  onChange={this.onChange}/>
		</div>
	}

	render() {
		return <div
			className={createClassName({[css["DatePicker"]]: true, [this.props.className]: !!this.props.className})}>
			<Input value={this.getTextValue()}
				   onFocus={this.onFocus}
				   onBlur={this.onBlur}
				   autoComplete={"off"}
				   onChange={() => {
				   }}
				   className={this.props.inputClassName}
				   autoFocus={this.props.autoFocus}
				   placeholder={this.props.placeholder}/>
			{this.state.open ? this.popup() : null}
		</div>
	}
}


DatePicker.propTypes = {
	isActiveDay: PropTypes.func,
	inputClassName: PropTypes.string,
	/**
	 * momentInstance => {}
	 */
	onChange: PropTypes.func,
	/**
	 * Экзкмпляр moment или null
	 */
	value: PropTypes.object,
	/**
	 * momentInstance => momentInstance.format('D '+ inMonthNamesFullRU[day.month()+1] +' YYYY')
	 * //25 Ноября 2018
	 */
	getDateFormat: PropTypes.func,
	/**
	 * Объект вида {1:Пн ...... 7:Вс} для переводов, по умолчанию русский язык
	 */
	weekNames: PropTypes.object,
	/**
	 * Объект вида {1:Январь ...... 12:Декабрь} для переводов, по умолчанию русский язык
	 */
	monthNames: PropTypes.object,
	autoFocus: PropTypes.bool,
}

DatePicker.defaultProps = {
	weekNames: weekNamesShortRU,
	monthNames: monthNamesFullRU,
	isActiveDay: () => true,
	getDateFormat: day => day.format('D ' + inMonthNamesFullRU[day.month() + 1] + ' YYYY')

}