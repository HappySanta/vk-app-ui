import React from "react"

export default function CheckIcon({width, height, color}) {
	return <svg xmlns="http://www.w3.org/2000/svg" width={width || "24"} height={height || "24"} viewBox="0 0 24 24">
		<g fill="none" fillRule="evenodd">
			<path d="M0 0H24V24H0z"/>
			<path fill={color || "#4BB34B"} fillRule="nonzero"
				  d="M9 16.2l-3.5-3.5c-.387-.387-1.013-.387-1.4 0s-.387 1.013 0 1.4l4.193 4.193c.39.39 1.024.39 1.414 0L20.3 7.7c.387-.387.387-1.013 0-1.4s-1.013-.387-1.4 0L9 16.2z"/>
		</g>
	</svg>
}