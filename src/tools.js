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


export function numberFormat(number) {
	if (number === undefined) number = 0
	if (number === null) number = 0
	if (typeof number === 'object') number = 0
	//https://ru.wikipedia.org/wiki/%D0%A3%D0%B7%D0%BA%D0%B8%D0%B9_%D0%BF%D1%80%D0%BE%D0%B1%D0%B5%D0%BB
	return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')
}

//25 000 ₽ из 100 000 ₽
export function priceFormat(number, tagBefore = '', tagAfter = ' ₽') {
	return `${tagBefore}${numberFormat(number)}${tagAfter}`
}

export function resizeForNode(node) {
	const event = new Event(HS_RESIZE_REQUEST_EVENT)
	event.width = node.offsetWidth
	event.height = node.offsetHeight
	window.dispatchEvent(event)
}

export const HS_RESIZE_REQUEST_EVENT = 'hs_resize_request_event'