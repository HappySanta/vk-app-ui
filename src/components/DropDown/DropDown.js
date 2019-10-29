import React, {Component} from 'react'
import PropTypes from 'prop-types'
import css from './DropDown.scss'
import {createClassName} from "../../tools"

export default class DropDown extends Component {

	state = {
		inputValue: "",
		dropDown: false,
		dropDownY: 'bottom',
		hoverItemIndex: -1,
	}

	constructor(props) {
		super(props)
		this.handleClickOutside = this.handleClickOutside.bind(this)
		this.changeDropDownPosition = this.changeDropDownPosition.bind(this);
	}

	componentDidMount() {
		document.addEventListener('mousedown', this.handleClickOutside)
	}

	t = null

	componentWillUnmount() {
		document.removeEventListener('mousedown', this.handleClickOutside)
		clearTimeout(this.t)
	}

	handleClickOutside(event) {
		if (this.listNode && !this.listNode.contains(event.target) && this.state.dropDown) {
			if (event.target !== this.inputNode) {
				this.setState({dropDown: false})
				this.isOutsideClick = true
				clearTimeout(this.t)
				this.t = setTimeout(() => {
					this.isOutsideClick = false
				}, 200)
			}
		}
	}


	catchInputNode = node => this.inputNode = node
	catchListNode = node => this.listNode = node

	inputNode = null
	listNode = null
	selectedItem = null

	isItemMouseDown = false
	isItemClick = false
	isRemoveClick = false
	isOutsideClick = false

	changeDropDownPosition() {
		const {bottom, top, height} = this.listNode.getBoundingClientRect(),
			{dropDownY} = this.state;

		if (bottom > window.innerHeight && dropDownY === 'bottom') {
			this.setState({dropDownY: 'top'})
		}

		const selectedEl = this.selectedItem

		if (selectedEl) {
			const {top: selectedElTop, height: selectedElHeight} = selectedEl.getBoundingClientRect(),
				topDiff = Math.abs(top - selectedElTop),
				scrolled = this.listNode.scrollTop;

			let newScroll = top <= selectedElTop ? scrolled + topDiff : scrolled - topDiff;
			newScroll = newScroll - height/2 + selectedElHeight/2;

			this.listNode.scrollTop = newScroll
		}
	}

	onChangeInputValue = e => {
		this.setState({inputValue: e.target.value})
	}

	onBlur = e => {
		if (this.isItemMouseDown) {
			this.isItemMouseDown = false
			return
		}
		this.setState({dropDown: false})
		this.onDropdownClose()
	}

	openDropdown = () => {
		this.setState({dropDown: true}, () => {
			this.listNode.style = 'display:block;'
			this.changeDropDownPosition()
		})
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
		if (this.isOutsideClick) {
			this.isOutsideClick = false
			return
		}

		if (this.inputNode) {
			if (document.activeElement !== this.inputNode && !this.state.dropDown) {
				this.inputNode.focus()
			}
		} else {
			this.openDropdown()
		}
	}

	onDropdownClose() {
		const {dropDownY, hoverItemIndex} = this.state
		if (hoverItemIndex !== -1) this.setState({hoverItemIndex: -1})
		if (dropDownY === 'top') this.setState({dropDownY: 'bottom'})
		this.listNode.style = 'display:none;'
	}

	onItemClick = (e, item) => {
		this.isItemClick = true
		this.onSelectItem(item)
		this.setState({dropDown: false, inputValue: ""})
		this.onDropdownClose()
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

	mouseOverHandler(index) {
		this.setState({hoverItemIndex: index})
	}

	renderItem = (item, index) => {
		if (this.props.hideSelectedFromList) {
			if (this.isSelectedItem(item, index)) {
				return null
			}
		}
		const isActive = this.state.hoverItemIndex === -1 && this.props.single && this.isSelectedItem(item, index)
		const className = createClassName({
			[css['DropDown__item']]: true,
			[css['DropDown__item--hover']]: this.state.hoverItemIndex === index,
			[css['DropDown__item--active']]: isActive,
		})
		return <div key={index}
					onClick={e => this.onItemClick(e, item)}
					onMouseDown={this.onItemMouseDown}
					ref={ref => this.props.single && this.isSelectedItem(item, index) ? this.selectedItem = ref : () => {}}
					onMouseOver={() => this.mouseOverHandler(index)}
					className={className}>
			{this.itemText(item)}
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

	isSelectedItem(item) {
		const isSelected = (item, selected) => {
			if (typeof selected === "object" && item.value !== undefined && selected.value !== undefined) {
				return selected.value === item.value
			} else {
				return selected === item
			}
		}

		let selected = this.props.selected
		if (this.props.single) {
			return isSelected(item, selected)
		} else {
			return this.props.selected.some(selectedItem => {
				return isSelected(item, selectedItem)
			})
		}
	}

	isEmpty() {
		if (this.props.single) {
			return !this.props.selected
		} else {
			return !this.props.selected.length
		}
	}

	dropdown() {
		let filterText = this.state.inputValue.trim()
		let items = this.props.items
		if (filterText) {
			items = items.filter((item, index) => this.props.filterItems(filterText, item, index))
		}
		const className = createClassName({
			[css["DropDown__list"]]: true,
		})
		let style = {}
		if (this.props.maxHeight) {
			style.maxHeight = this.props.maxHeight
		}
		return <div ref={this.catchListNode}
					style={style}
					className={className}>
			{!items.length && !this.props.single && this.props.notFoundText ? <div className={css['DropDown__item']}>
				{this.props.notFoundText}
			</div> : items.map(this.renderItem)}
		</div>
	}

	render() {
		const {className: baseClassName, single, width} = this.props

		const className = createClassName({
			[css["DropDown"]]: true,
			[baseClassName]: baseClassName,
			[css[`DropDown--shown`]]: this.state.dropDown,
			[css[`DropDown--${this.state.dropDownY}`]]: true,
			[css[`DropDown--single`]]: !!single,
		})

		const renderInput = this.isEmpty() || !(this.props.single)

		const inputClassName = createClassName({
			[css["DropDown__wide-input"]]: this.isEmpty(),
			[css["DropDown__zero-height-input"]]: !this.isEmpty() && !this.state.dropDown,
		})
		let style = {}
		if (width) {
			style.width = width
		}
		return <div ref={ref => this.wrapper = ref} style={style} onClick={this.onComponentClick} className={className}>
			<div className={css['DropDown__icon']}/>
			{this.selectedItems()}
			{renderInput && <input type="text"
								   className={inputClassName}
								   placeholder={this.isEmpty() ? this.props.placeholder : ""}
								   onChange={this.onChangeInputValue}
								   onFocus={this.openDropdown}
								   onBlur={this.onBlur}
								   ref={this.catchInputNode}
								   value={this.state.inputValue}/>}
			{this.dropdown()}
		</div>
	}
}

DropDown.propTypes = {
	hideSelectedFromList: PropTypes.bool,
	placeholder: PropTypes.string,
	items: PropTypes.array,
	selected: PropTypes.oneOfType([
		PropTypes.array,
		PropTypes.object,
	]),
	onRemove: PropTypes.func,
	onSelect: PropTypes.func,
	filterItems: PropTypes.func,
	className: PropTypes.string,
	/**
	 * true - можно выброать только один элемент из списка, false - много
	 */
	single: PropTypes.bool,
	maxHeight: PropTypes.number,
	width: PropTypes.number,
	notFoundText: PropTypes.string,
}

DropDown.defaultProps = {
	hideSelectedFromList: false,
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