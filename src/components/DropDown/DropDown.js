import React, {Component} from 'react'
import PropTypes from 'prop-types'
import WaitDots from "../WaitDots/WaitDots"
import css from './DropDown.scss'
import {createClassName, isMobile} from "../../tools"

export default class DropDown extends Component {

	state = {
		inputValue: "",
		dropDown: false,
	}


	catchInputNode = node => this.inputNode = node
	catchListNode = node => this.listNode = node

	justFocused = false

	inputNode = null
	listNode = null

	isItemMouseDown = false
	isItemClick = false
	isRemoveClick = false

	onChangeInputValue = e => {
		this.setState({inputValue: e.target.value})
	}

	onBlur = e => {
		if (this.isItemMouseDown) {
			this.isItemMouseDown = false
			return
		}
		this.setState({dropDown: false})
	}

	onFocus = () => {
		this.justFocused = true
		this.setState({dropDown: true})
	}

	onComponentClick = e => {
		if (this.isItemClick) {
			this.isItemClick = false
			return
		}
		if (this.isRemoveClick) {
			this.isRemoveClick = false
			return
		}

		if (this.inputNode) {
			if (document.activeElement !== this.inputNode) {
				this.inputNode.focus()
			}
		} else {
			this.onFocus()
		}
	}

	onItemClick = (e, item) => {
		this.isItemClick = true
		this.onSelectItem(item)
		this.setState({dropDown: false, inputValue: ""})
	}

	onItemMouseDown = e => {
		this.isItemMouseDown = true
	}

	onSelectItem(item) {
		if (this.props.single) {
			if (this.props.selected === item) {
				return
			}
		} else {
			if (this.props.selected.indexOf(item) !== -1) {
				return
			}
		}
		this.props.onSelect(item)
	}

	onRemoveItem(index, item) {
		this.isRemoveClick = true
		this.props.onRemove(item)
	}

	itemText(item) {
		if (typeof item === "string") {
			return item
		} else {
			if (this.props.renderItem) {
				return this.props.renderItem(item)
			} else if (item.text) {
				return item.text
			} else if (item.title) {
				return item.title
			} else {
				return JSON.stringify(item)
			}
		}
	}

	renderItem = (item, index) => {
		return <div key={index}
					onClick={e => this.onItemClick(e, item)}
					onMouseDown={this.onItemMouseDown}
					className={css['DropDown__item']}>
			{this.itemText(item)}
		</div>
	}

	dropdown() {
		if (!this.state.dropDown) {
			return null
		}
		let filterText = this.state.inputValue.trim()
		let items = this.props.items
		if (filterText) {
			items = items.filter( (item,index) => this.props.filterItems(filterText, item, index) )
		}
		return <div ref={this.catchListNode}
					className={css["DropDown__list"]}>
			{items.map(this.renderItem)}
		</div>
	}

	renderSelectedItem = (item, index) => {
		return <div className={css["DropDown__selected-item"]} key={index}>
			{this.itemText(item)}
			<button onClick={() => this.onRemoveItem(index, item)}
					className={css["DropDown__remove"]}/>
		</div>
	}

	renderSingleItem(item) {
		return <div className={css["DropDown__selected-item"] + ' ' + css['DropDown__selected-item--single']}>
			{this.itemText(item)}
		</div>
	}

	selectedItems() {
		if (this.props.single) {
			if (this.props.selected) {
				return this.renderSingleItem(this.props.selected)
			} else {
				return null
			}
		} else {
			return this.props.selected.map(this.renderSelectedItem)
		}
	}

	isEmpty() {
		return !this.props.selected || !this.props.selected.length
	}

	render() {
		const {className: baseClassName} = this.props

		const className = createClassName({
			[css["DropDown"]]: true,
			[css["DropDown--empty"]]: this.isEmpty(),
			[baseClassName]: baseClassName,
		})

		const renderInput = this.isEmpty() || !(this.props.single)

		return <div onClick={this.onComponentClick} className={className}>
			<div className={css['DropDown__icon']}/>
			{this.selectedItems()}
			{renderInput && <input type="text"
								   placeholder={this.isEmpty() ? this.props.placeholder : ""}
								   onChange={this.onChangeInputValue}
								   onFocus={this.onFocus}
								   onBlur={this.onBlur}
								   ref={this.catchInputNode}
								   value={this.state.inputValue}/>}
			{this.dropdown()}
		</div>
	}
}

DropDown.propTypes = {
	placeholder: PropTypes.string,
	items: PropTypes.array,
	selected: PropTypes.oneOfType([
		PropTypes.array,
		PropTypes.object,
		PropTypes.null,
	]),
	onRemove: PropTypes.func,
	onSelect: PropTypes.func,
	filterItems: PropTypes.func,
	className: PropTypes.string,
	/**
	 * true - можно выброать только один элемент из списка, false - много
	 */
	single: PropTypes.bool
}

DropDown.defaultProps = {
	filterItems: (text, item) => {
		let itemText = null
		if (typeof item === "string") {
			itemText = item
		} else if (item.text) {
			itemText =  item.text
		} else if (item.title) {
			itemText = item.title
		} else {
			return true
		}
		if (itemText !== null) {
			return itemText.toString().toLowerCase().trim().indexOf(text.toString().toLowerCase()) !== -1
		} else {
			return true
		}
	}
}