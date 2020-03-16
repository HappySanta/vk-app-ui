import React from 'react'
import css from './Header.scss'
import {createClassName} from "../../tools"

export function Header({children, className, ...rp}) {
	return <h1 className={createClassName({
		[css["Header"]]: 1,
		[className]: !!className
	})} {...rp}>{children}</h1>
}