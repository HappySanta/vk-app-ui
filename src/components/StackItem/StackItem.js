import React from "react"
import css from "./StackItem.scss"
import {createClassName} from "../../tools"
import PropTypes from "prop-types"

export default function StackItem({before, header, children, className, ...restProps}) {
	return <div className={createClassName({
		[css["StackItem"]]: true,
		[className]: !!className
	})} {...restProps}>
		<div className={css["StackItem__inner"]}>
			{!!before && <div className={css["StackItem__before"]}>{before}</div>}
			{<div className={css["StackItem__content"]}>
				{!!header && <div className={css["StackItem__header"]}>{header}</div>}
				{children}
			</div>}
		</div>
	</div>
}

StackItem.propsTypes = {
	before: PropTypes.oneOf([PropTypes.string, PropTypes.element]),
	header: PropTypes.oneOf([PropTypes.string, PropTypes.element]),
	className: PropTypes.string,
}