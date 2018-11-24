import moment from "moment"


/**
 * Возвращает кол-во недель которые занимает месяц
 * @param date
 * @return {number}
 */
export function getWeeksInMonth(date) {
	date = date.clone()
	let count = date.endOf('month').isoWeek() - date.startOf('month').isoWeek()
	if (count > 0) {
		return count + 1
	} else {
		return date.endOf('month').isoWeeksInYear() - date.startOf('month').isoWeek() + 1
	}
}


export function testGetWeeksInMonth() {
	window.moment = moment
	const day = moment("2018-04-01")
	console.assert(getWeeksInMonth(day) === 6, "Expect 6 got " + getWeeksInMonth(day))
	console.assert(getWeeksInMonth(moment("2018-10-01")) === 5, "Expect 5 got " + getWeeksInMonth(moment("2018-10-01")))
	console.assert(getWeeksInMonth(moment("2018-09-01")) === 5, "Expect 5 got " + getWeeksInMonth(moment("2018-09-01")))
}

export const weekNamesShortRU = {
	1: "Пн",
	2: "Вт",
	3: "Ср",
	4: "Чт",
	5: "Пт",
	6: "Сб",
	7: "Вс",
}

export const monthNamesFullRU = {
	1: "Январь",
	2: "Февраль",
	3: "Март",
	4: "Апрель",
	5: "Май",
	6: "Июнь",
	7: "Июль",
	8: "Август",
	9: "Сентябрь",
	10: "Октябрь",
	11: "Ноябрь",
	12: "Декабрь",
}

export const inMonthNamesFullRU = {
	1: "Января",
	2: "Февраля",
	3: "Марта",
	4: "Апреля",
	5: "Мая",
	6: "Июня",
	7: "Июля",
	8: "Августа",
	9: "Сентября",
	10: "Октября",
	11: "Ноября",
	12: "Декабря",
}