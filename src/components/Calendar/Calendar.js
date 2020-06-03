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

	setMiddleScorole = node => {
		if (!this.setMiddleScoroleWasCall) {
			this.setMiddleScoroleWasCall = true
			node.scrollTop = node.scrollHeight / 2
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
			[css["Calendar__day--not-active"]]: !(this.props.isActiveMonth(day)),
			[css["Calendar__day--today"]]: (this.props.isCurrentMonth(day)),
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

	setYear = (e) => {
		const year = parseInt(e.target.getAttribute('title'), 10)
		this.setState({
			currentDay: this.state.currentDay.clone().year(year)
		})
	}

	setMonth = (index) => {
		this.setState({
			currentDay: this.state.currentDay.clone().month(index - 1)
		})
	}

	isActiveYear(year) {
		return this.m().year() === year
	}

	isActiveMonth(index) {
		return this.m().month() + 1 === index
	}

	yearAndMonth() {
		const list = []
		for (let i = this.props.startYearList; i < this.props.endYearList; i++) {
			list.push(<div key={i}
						   onClick={this.setYear}
						   title={i}
						   className={createClassName({
							   [css["Calendar__year"]]: 1,
							   [css["Calendar__year--active"]]: this.isActiveYear(i)
						   })}>{i}</div>)
		}
		return <div className={css["Calendar__year-and-month"]}>
			<div ref={this.setMiddleScorole} className={css["Calendar__list"]}>
				{list}
			</div>
			<div ref={this.setMiddleScorole} className={css["Calendar__list"]}>
				{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((index) => <div key={index}
																			 onClick={() => this.setMonth(index)}
																			 title={this.props.monthNames[index]}
																			 className={createClassName({
																				 [css["Calendar__year"]]: 1,
																				 [css["Calendar__year--active"]]: this.isActiveMonth(index)
																			 })}>{this.props.monthNames[index]}</div>)}
			</div>
		</div>
	}

	render() {
		const {showYearAndMonthPicker, className} = this.props
		return <div className={createClassName({
			[css["Calendar"]]: 1,
			[css["Calendar__with-side"]]: showYearAndMonthPicker,
			[className]: !!className,
		})}>
			<div onClick={this.onHeaderClick} className={css["Calendar__header"]}>
				<button onClick={this.onPrevMonthClick} className={css["Calendar__left"]}/>
				<button onClick={this.onNextMonthClick} className={css["Calendar__right"]}/>
				{this.header()}
			</div>
			{this.state.monthPick ? this.month() : this.calendar()}
			{showYearAndMonthPicker ? this.yearAndMonth() : null}
		</div>
	}
}

Calendar.propTypes = {
	className: PropTypes.string,
	monthNames: PropTypes.object,
	weekNames: PropTypes.object,
	currentDay: PropTypes.instanceOf(moment),
	isActiveDay: PropTypes.func,
	isActiveMonth: PropTypes.func,
	isCurrentDay: PropTypes.func,
	isCurrentMonth: PropTypes.func,
	onChangeCurrentMonth: PropTypes.func,
	onChange: PropTypes.func,
	showYearAndMonthPicker: PropTypes.bool,
	startYearList: PropTypes.number,
	endYearList: PropTypes.number,
}

Calendar.defaultProps = {
	className: "",
	currentDay: moment(),
	weekNames: weekNamesShortRU,
	monthNames: monthNamesFullRU,
	isActiveDay: day => day.isSameOrAfter(moment(), 'day'),
	isActiveMonth: day => day.isBefore(moment(), 'month'),
	isCurrentDay: (day, currentDay) => day.isSame(currentDay, 'day'),
	isCurrentMonth: (day, currentDay) => day.isSame(currentDay, 'month'),
	showYearAndMonthPicker: false,
	startYearList: 1900,
	endYearList: 2020,
}