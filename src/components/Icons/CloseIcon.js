import React from "react"


export default function CloseIcon({width, height, color}) {
	return <svg xmlns="http://www.w3.org/2000/svg" width={width || "24"} height={height || "24"} viewBox="0 0 24 24">
		<g fill="none" fillRule="evenodd">
			<path d="M0 0H24V24H0z"/>
			<path fill={color || "#B8C1CC"} fillRule="nonzero"
				  d="M18.3 5.7c-.387-.387-1.013-.387-1.4 0L12 10.6 7.1 5.7c-.387-.387-1.013-.387-1.4 0s-.387 1.013 0 1.4l4.9 4.9-4.9 4.9c-.387.387-.387 1.013 0 1.4s1.013.387 1.4 0l4.9-4.9 4.9 4.9c.387.387 1.013.387 1.4 0s.387-1.013 0-1.4L13.4 12l4.9-4.9c.387-.387.387-1.013 0-1.4z"/>
		</g>
	</svg>
}
