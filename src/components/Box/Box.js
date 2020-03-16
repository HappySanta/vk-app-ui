import React from "react"
import css from "./Box.scss"
import PropTypes from "prop-types"
import {createClassName} from "../../tools"

export default function Box({children, width, large, className, ...restProps}) {
	const style = width ? ({width: width + 'px'}) : ({})
	return <div style={style}
				className={createClassName({
					[css["Box"]]: true,
					[css["Box--large"]]: !!large,
					[className]: !!className
				})} {...restProps}>{children}</div>
}

Box.propTypes = {
	/** Доп. css класс если надо **/
	className: PropTypes.string,
	width: PropTypes.number,
	large: PropTypes.bool,
}