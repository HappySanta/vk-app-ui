import React, {Component} from 'react'
import PropTypes from 'prop-types'
import css from "./TabItem.scss"
import {createClassName} from "../../tools"

export default class TabItem extends Component {


	render() {
		const rp = {...this.props}
		delete rp.selected
		return <div className={createClassName({
			[css["TabItem"]]: 1,
			[css["TabItem--selected"]]: this.props.selected,
			[this.props.className]: !!this.props.className,
		})} {...rp}>
			{this.props.children}
		</div>
	}
}

TabItem.propTypes = {
	selected: PropTypes.bool,
	className: PropTypes.string,
}