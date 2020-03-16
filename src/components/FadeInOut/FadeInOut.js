import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {createClassName} from "../../tools"
import css from './FadeInOut.scss'

class FadeInOut extends Component {


	constructor(props, context) {
		super(props, context)
		this.ref = null
	}

	catchRef = node => {
		this.ref = node
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (prevProps.ts !== this.props.ts) {
			if (this.ref) {
				this.ref.classList.remove(css["FadeInOut--anim"])
				setTimeout(() => {
					if (this.ref) {
						if (!this.ref.classList.contains(css["FadeInOut--anim"])) {
							this.ref.classList.add(css["FadeInOut--anim"])
						}
					}
				}, 1)

			}
		}
	}

	render() {
		const {className, ts} = this.props
		return <div ref={this.catchRef} className={createClassName({
			[css["FadeInOut"]]: 1,
			[css["FadeInOut--anim"]]: !!ts,
			[className]: !!className
		})}>
			{this.props.children}
		</div>
	}
}

FadeInOut.propTypes = {
	className: PropTypes.string,
	ts: PropTypes.number,
}

module.exports = FadeInOut