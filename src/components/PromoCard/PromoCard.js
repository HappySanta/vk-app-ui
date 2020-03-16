import React from 'react'
import css from './PromoCard.scss'
import {createClassName} from "../../tools"

export function PromoCard({children, className, footer, ...rp}) {
	return <div className={createClassName({
		[css["PromoCard"]]: 1,
		[css["PromoCard--with-footer"]]: !!footer,
		[className]: !!className
	})} {...rp}>
		<div className={css['PromoCard__body']}>{children}</div>
		{!!footer && <div className={css['PromoCard__footer']}>{footer}</div>}
	</div>
}