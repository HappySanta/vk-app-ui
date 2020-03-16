import React from "react"
import css from "./Red.scss"
import PropTypes from "prop-types"
import {createClassName} from "../../tools"

export default function Red({children, className, ...restProps}) {
	return <div
		className={createClassName({[css["Red"]]: true, [className]: !!className})} {...restProps}>{children}</div>
}

Red.propTypes = {
	/** Доп. css класс если надо **/
	className: PropTypes.string
}