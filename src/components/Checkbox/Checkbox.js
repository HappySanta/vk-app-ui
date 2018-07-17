import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Checkbox.scss'

export default class Checkbox extends Component {
  render() {
  	const { className: baseClassName, children, ismobile, ...restProps } = this.props,
          isMobile = ismobile !== undefined ? ismobile : window.isMobile !== undefined ? window.isMobile : ~window.location.pathname.indexOf('mobile') ? true : false

    return (
        <label className={`Checkbox${baseClassName ? ` ${baseClassName}` : ''}${isMobile ? ' Radio--mobile' : ''}`}>
    	    <input type="checkbox" className="Checkbox__input" {...restProps} />
            <span className="Checkbox__text">{children}</span>
        </label>
    )
  }
};

Checkbox.propTypes = {
  className: PropTypes.string,
  ismobile: PropTypes.bool
};