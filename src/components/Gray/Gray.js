import React from "react"
import css from "./Gray.scss"
import PropTypes from "prop-types"
import {createClassName} from "../../tools"

export default function Gray({children, className, ...restProps}) {
	return <div
		className={createClassName({[css["Gray"]]: true, [className]: !!className})} {...restProps}>{children}</div>
}

Gray.propTypes = {
	/** Доп. css класс если надо **/
	className: PropTypes.string
}