import React, {Component} from "react"
import PropTypes from 'prop-types'
import {createClassName} from "../../tools"
import moment from 'moment'
import css from "./Calendar.scss"
import {getWeeksInMonth, monthNamesFullRU, weekNamesShortRU} from "./helpers"

export default class Calendar extends Component {

	state = {
		currentDay: null,
		monthPick: false,
	}

	constructor(props) {
		super(props)

		this.state.currentDay = this.props.currentDay
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.currentDay !== this.state.currentDay) {
			this.setState({currentDay: nextProps.currentDay})
		}
	}

	onClick = day => {
		if (this.props.onChange) {
			this.props.onChange(day)
		} else {
			this.setState({
				currentDay: this.state.currentDay.clone().date(day.date())
			})
		}
	}

	onHeaderClick = e => {
		this.setState({monthPick: !this.state.monthPick})
	}

	onNextMonthClick = e => {
		e.stopPropagation()
		if (this.state.monthPick) {
			this.setState({currentDay: this.state.currentDay.clone().add(1, 'year')})
		} else {
			this.setState({currentDay: this.state.currentDay.clone().add(1, 'month')})
		}
	}

	onPrevMonthClick = e => {
		e.stopPropagation()
		if (this.state.monthPick) {
			this.setState({currentDay: this.state.currentDay.clone().subtract(1, 'year')})
		} else {
			this.setState({currentDay: this.state.currentDay.clone().subtract(1, 'month')})
		}
	}

	/**
	 * @return {moment}
	 */
	m() {
		return this.state.currentDay
	}

	onSetCurrentMonth(day) {
		if (this.props.onChangeCurrentMonth) {
			this.props.onChangeCurrentMonth(day)
		} else {
			this.setState({
				monthPick: false,
				currentDay: this.state.currentDay.clone().month(day.month())
			})
		}
	}

	isSameMonth(day) {
		return this.m().month() === day.month()
	}

	getFirstDayOfFirstWeek() {
		let firstDayOfMonthWeekDay = this.m().clone().startOf('month').days()
		if (firstDayOfMonthWeekDay === 0) {
			firstDayOfMonthWeekDay = 7
		}
		return this.m().clone().startOf('month').subtract(firstDayOfMonthWeekDay, 'days').add(1, 'day')
	}

	getDayOffset(offset) {
		return this.getFirstDayOfFirstWeek().add(offset, 'days')
	}

	renderDay(offset) {
		const day = this.getDayOffset(offset)
		const name = createClassName({
			[css["Calendar__day"]]: true,
			[css["Calendar__day--from-another-month"]]: !this.isSameMonth(day),
			[css["Calendar__day--from-current-month"]]: this.isSameMonth(day),
			[css["Calendar__day--not-active"]]: !this.props.isActiveDay(day),
			[css["Calendar__day--today"]]: this.props.isCurrentDay(day, this.m()),
		})
		return <td onClick={() => this.isSameMonth(day) && this.onClick(day)}
				   className={name}
				   key={day}>{day.date()}</td>
	}

	renderWeek(weekNumber) {
		return <tr key={weekNumber}>
			{this.renderDay(weekNumber * 7 + 0)}
			{this.renderDay(weekNumber * 7 + 1)}
			{this.renderDay(weekNumber * 7 + 2)}
			{this.renderDay(weekNumber * 7 + 3)}
			{this.renderDay(weekNumber * 7 + 4)}
			{this.renderDay(weekNumber * 7 + 5)}
			{this.renderDay(weekNumber * 7 + 6)}
		</tr>
	}

	renderMonthName(number) {
		return this.props.monthNames[number]
	}

	renderDayOfWeekName(number) {
		return this.props.weekNames[number]
	}

	renderMonth(day) {
		const className = createClassName({
			[css["Calendar__day"]]: true,
			[css["Calendar__month"]]: true,
			[css["Calendar__day--not-active"]]: (day.isBefore(moment(), 'month')),
			[css["Calendar__day--today"]]: (day.isSame(this.m(), 'month')),
		})
		const d = day.clone()
		return <td onClick={() => this.onSetCurrentMonth(d)}
				   className={className}>{this.renderMonthName(day.month() + 1)}</td>
	}

	month() {
		const day = this.m().clone().startOf('year')
		return <table cellSpacing={0} cellPadding={0} className={css["Calendar__table"]}>
			<tbody>
			<tr>
				{this.renderMonth(day)}
				{this.renderMonth(day.add(1, 'month'))}
			</tr>
			<tr>
				{this.renderMonth(day.add(1, 'month'))}
				{this.renderMonth(day.add(1, 'month'))}
			</tr>
			<tr>
				{this.renderMonth(day.add(1, 'month'))}
				{this.renderMonth(day.add(1, 'month'))}
			</tr>
			<tr>
				{this.renderMonth(day.add(1, 'month'))}
				{this.renderMonth(day.add(1, 'month'))}
			</tr>
			<tr>
				{this.renderMonth(day.add(1, 'month'))}
				{this.renderMonth(day.add(1, 'month'))}
			</tr>
			<tr>
				{this.renderMonth(day.add(1, 'month'))}
				{this.renderMonth(day.add(1, 'month'))}
			</tr>
			</tbody>
		</table>
	}

	calendar() {
		const classNameOfWeek = createClassName({
			[css["Calendar__day"]]: true,
			[css["Calendar__name-of-week"]]: true
		})
		const weeks = [
			<tr key={"days"}>
				<td className={classNameOfWeek}>{this.renderDayOfWeekName(1)}</td>
				<td className={classNameOfWeek}>{this.renderDayOfWeekName(2)}</td>
				<td className={classNameOfWeek}>{this.renderDayOfWeekName(3)}</td>
				<td className={classNameOfWeek}>{this.renderDayOfWeekName(4)}</td>
				<td className={classNameOfWeek}>{this.renderDayOfWeekName(5)}</td>
				<td className={classNameOfWeek}>{this.renderDayOfWeekName(6)}</td>
				<td className={classNameOfWeek}>{this.renderDayOfWeekName(7)}</td>
			</tr>
		]
		for (let i = 0; i < getWeeksInMonth(this.m()); i++) {
			weeks.push(this.renderWeek(i))
		}

		return <table cellSpacing={0} cellPadding={0} className={css["Calendar__table"]}>
			<tbody>{weeks}</tbody>
		</table>
	}

	header() {
		if (this.state.monthPick) {
			return this.m().year()
		} else {
			return [this.renderMonthName(this.m().month() + 1), ' ', this.m().year()]
		}
	}

	render() {
		return <div className={css["Calendar"]}>
			<div onClick={this.onHeaderClick} className={css["Calendar__header"]}>
				<button onClick={this.onPrevMonthClick} className={css["Calendar__left"]}/>
				<button onClick={this.onNextMonthClick} className={css["Calendar__right"]}/>
				{this.header()}
			</div>
			{this.state.monthPick ? this.month() : this.calendar()}
		</div>
	}
}

Calendar.propTypes = {
	monthNames: PropTypes.object,
	weekNames: PropTypes.object,
	currentDay: PropTypes.instanceOf(moment),
	isActiveDay: PropTypes.func,
	isCurrentDay: PropTypes.func,
	onChangeCurrentMonth: PropTypes.func,
	onChange: PropTypes.func,
}

Calendar.defaultProps = {
	currentDay: moment(),
	weekNames: weekNamesShortRU,
	monthNames: monthNamesFullRU,
	isActiveDay: day => day.isSameOrAfter(moment(), 'day'),
	isCurrentDay: (day, currentDay) => day.isSame(currentDay, 'day')
}