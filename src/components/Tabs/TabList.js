import React, {Component} from 'react'
import PropTypes from 'prop-types'
import css from "./TabList.scss"
import {createClassName} from "../../tools"

export default class TabList extends Component {

	render() {
		return (
			<div className={css["TabList"] + (" ") + (this.props.className || "")}>
				<div className={css["TabList__inner"]}>
					{/*{tabs.map((item, index) => this.renderTab(item, index))}*/}
					{/*<div className="TabsDesktop__slider" style={sliderStyle}/>*/}
					{this.props.children || null}
				</div>
				{!!this.props.after && <div className={css["TabList__after"]}>{this.props.after}</div>}
			</div>
		)
	}
}

TabList.propTypes = {
	after: PropTypes.element,
	className: PropTypes.string,
}