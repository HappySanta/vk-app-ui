import React from "react"
import css from "./Line.scss"
import PropTypes from "prop-types"
import {createClassName} from "../../tools"

export default function Line({children, mode, vertical, className, ...restProps}) {
	return <div
		className={createClassName({
			[css["Line"]]: true,
			[css["Line--" + mode]]: true,
			[css["Line--v-" + vertical]]: true,
			[className]: !!className
		})} {...restProps}>{children}</div>
}

Line.propTypes = {
	/** Доп. css класс если надо **/
	className: PropTypes.string,
	mode: PropTypes.oneOf([
		"center", "left", "right", "split"
	]),
	vertical: PropTypes.oneOf([
		"center", "top", "bottom"
	])
}

Line.defaultProps = {
	mode: "left",
	vertical: "center"
}