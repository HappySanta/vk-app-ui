import React, {Component} from 'react'
import PropTypes from 'prop-types'

const months_ru = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек']

export default class TimeView extends Component {

	render() {
		const {timestamp} = this.props
		const time = new Date(timestamp * 1000)
		let year = time.getFullYear()
		let month = months_ru[time.getMonth()]
		let date = time.getDate()
		let hour = time.getHours()
		let min = time.getMinutes()
		let now = new Date()
		if (year === now.getFullYear()) {
			return date + ' ' + month + ' ' + hour + ':' + min
		} else {
			return date + ' ' + month + ' ' + year + ' ' + hour + ':' + min
		}
	}
}

TimeView.propTypes = {
	/** Время в секундах */
	timestamp: PropTypes.number,
	lang: PropTypes.string
}

TimeView.defaultProps = {
	lang: 'ru'
}