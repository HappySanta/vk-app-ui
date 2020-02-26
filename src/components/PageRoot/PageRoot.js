import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'

class PageRoot extends Component {

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
	activePage: PropTypes.string
}

PageRoot.defaultProps = {}

module.exports = PageRoot