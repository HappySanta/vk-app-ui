export function isMobile(props) {
	if (props.mobile !== undefined) {
		return props.mobile
	}
	if (window && window._hsMobileUI !== undefined) {
		return window._hsMobileUI
	}
	return false
}

export function createClassName(object) {
	let str = []
	for (let key in object) {
		if (object.hasOwnProperty(key)) {
			if (object[key]) {
				str.push(key)
			}
		}
	}
	return str.join(" ")
}

export const NARROW_NO_BREAK_SPACE = ' '

/**
 * Формирует число из 45678923 в 45 678 923, разделитель -- тонкий пробел
 * https://ru.wikipedia.org/wiki/%D0%A3%D0%B7%D0%BA%D0%B8%D0%B9_%D0%BF%D1%80%D0%BE%D0%B1%D0%B5%D0%BB
 * @param {number} number
 * @param {string} divider
 * @param {boolean} sign Добавлять или нет лидирующий + или -
 * @return {string}
 */
export function numberFormat(number, divider = NARROW_NO_BREAK_SPACE, sign = false) {
	if (number === undefined) number = 0
	if (number === null) number = 0
	if (typeof number === 'object') number = 0
	const res = number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + divider)
	if (sign) {
		if (number > 0) {
			return '+' + res
		} else if (number < 0) {
			return '–' + res
		}
	}

	return res
}

/**
 *
 * @param number
 * @param tagBefore
 * @param tagAfter
 * @param divider
 * @param sign
 * @return {string}
 */
export function priceFormat(number, tagBefore = '', tagAfter = ' ₽', divider = NARROW_NO_BREAK_SPACE, sign = false) {
	return `${tagBefore}${numberFormat(number, divider, sign)}${tagAfter}`
}

export function resizeForNode(node) {
	const event = new Event(HS_RESIZE_REQUEST_EVENT)
	event.width = node.offsetWidth
	event.height = node.offsetHeight
	window.dispatchEvent(event)
}

export const HS_RESIZE_REQUEST_EVENT = 'hs_resize_request_event'


export const RUS_MONTH_NAMES = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек']
export const RUS_MONTH_NAMES_INF = [
	'январь',
	'февраль',
	'март',
	'апрель',
	'май',
	'июнь',
	'июль',
	'август',
	'сентябрь',
	'октябрь',
	'ноябрь',
	'декабрь',
]

export const RUS_MONTH_NAMES_GEN = [
	'января',
	'февраля',
	'марта',
	'апреля',
	'мая',
	'июня',
	'июля',
	'августа',
	'сентября',
	'октября',
	'ноября',
	'декабря',
]


/**
 *
 * @param {string} format
 * @param {null|number|Date} date timestamp или Date или null
 * @param {string[]} monthArray названия месяцов
 * @param {string} today название для "сегодня"
 * @return {string}
 */
export function dateFormat(format, date = null, monthArray = RUS_MONTH_NAMES, today = 'сегодня') {
	const time = getDateFromValue(date)
	let now = new Date()
	const keys = {
		'y': time.getFullYear() === now.getFullYear() ? '' : time.getFullYear(),
		'j': monthArray[time.getMonth()],
		'Y': time.getFullYear(),
		'm': time.getMonth(),
		'M': leadingZero(time.getMonth()),
		'd': time.getDate(),
		'D': leadingZero(time.getDate()),
		'H': leadingZero(time.getHours()),
		'I': leadingZero(time.getMinutes()),
		'S': leadingZero(time.getSeconds()),
		'h': time.getHours(),
		'i': time.getMinutes(),
		's': time.getSeconds(),
	}

	const data = Object.keys(keys)
	let str = format.replace('J', isSameDay(now, time) ? today : 'd\u00A0j')
	data.forEach(key => {
		str = str.replace(key, keys[key])
	})
	return str
}

/**
 *
 * @param value
 * @return {Date}
 */
export function getDateFromValue(value) {
	if (!value) return new Date()
	if (value instanceof Date) {
		return value
	}
	if (typeof value === 'number') {
		return new Date(value * 1000)
	}
	return new Date(value)
}


/**
 * @param {number} value
 * @return {string}
 */
export function leadingZero(value) {
	if (value < 10) {
		return '0' + value
	} else {
		return value.toString()
	}
}

export function isSameDay(d1, d2) {
	return d1.getFullYear() === d2.getFullYear() &&
		d1.getMonth() === d2.getMonth() &&
		d1.getDate() === d2.getDate()
}