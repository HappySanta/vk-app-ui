import React from 'react'
import css from './P.scss'
import {createClassName} from "../../tools"

export function P({children, className, ...rp}) {
	return <p className={createClassName({
		[css["P"]]: 1,
		[className]: !!className
	})} {...rp}>{children}</p>
}