import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Radio.scss'

export default class Radio extends Component {
  render() {
  	const { className: baseClassName, children, ismobile, ...restProps } = this.props,
          isMobile = ismobile !== undefined ? ismobile : window.isMobile !== undefined ? window.isMobile : ~window.location.pathname.indexOf('mobile') ? true : false

    return (
        <label className={`Radio${baseClassName ? ` ${baseClassName}` : ''}${isMobile ? ' Radio--mobile' : ''}`}>
    	    <input type="radio" className="Radio__input" {...restProps} />
            <span className="Radio__text">{children}</span>
        </label>
    )
  }
};

Radio.propTypes = {
  className: PropTypes.string,
  ismobile: PropTypes.bool
};