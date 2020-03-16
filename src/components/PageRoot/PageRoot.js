import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'
import css from "./PageRoot.scss"

class PageRoot extends Component {

	componentDidMount() {
		if (this.props.bodyStyle) {
			try {
				document.body.classList.add(css["PageRoot"])
			} catch (e) {

			}
		}
	}

	componentWillUnmount() {
		if (this.props.bodyStyle) {
			try {
				document.body.classList.remove(css["PageRoot"])
			} catch (e) {

			}
		}
	}

	render() {
		const page = React.Children.toArray(this.props.children).filter(page => page && (page.props.id === this.props.activePage)).pop()
		return <Fragment>
			{page}
			{this.props.popup}
		</Fragment>
	}
}

PageRoot.propTypes = {
	/** Node которя будет отрендерена после попапа, должна имкть position:fixed **/
	popup: PropTypes.element,
	/** Активная страница **/
	activePage: PropTypes.string,
	/** Добавялет стили для шрифта к тегу body **/
	bodyStyle: PropTypes.bool,
}

PageRoot.defaultProps = {
	bodyStyle: false,
}

module.exports = PageRoot