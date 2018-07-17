import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Input.scss'

export default class Input extends Component {
  render() {
  	const { className: baseClassName, ismobile, ...restProps } = this.props,
          isMobile = ismobile !== undefined ? ismobile : window.isMobile !== undefined ? window.isMobile : ~window.location.pathname.indexOf('mobile') ? true : false

    return (
    	<input className={`Input${baseClassName ? ` ${baseClassName}` : ''}${isMobile ? ' Input--mobile' : ''}`} {...restProps} />
    )
  }
};

Input.propTypes = {
  className: PropTypes.string,
  ismobile: PropTypes.bool
};