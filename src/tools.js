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