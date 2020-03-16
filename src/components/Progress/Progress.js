import React from 'react'
import css from './Progress.scss'
import {createClassName} from "../../tools"

export function Progress({children, className, percent, ...rp}) {
	return <div className={createClassName({
		[css["Progress"]]: 1,
		[className]: !!className
	})} {...rp}>
		<div className={css["Progress__line"]} style={{width: (percent * 100) + "%"}}/>
	</div>
}