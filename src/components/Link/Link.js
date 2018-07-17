import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Link.scss'

export default class Link extends Component {
  render() {
  	const { type, component, className: baseClassName, children, ismobile, ...restProps } = this.props,
          isMobile = ismobile !== undefined ? ismobile : window.isMobile !== undefined ? window.isMobile : ~window.location.pathname.indexOf('mobile') ? true : false,
          Component = this.props.component

    return (
    	<Component className={`Link ${type ? `Link--${type}` : ''}${baseClassName ? ` ${baseClassName}` : ''}${isMobile ? ' Link--mobile' : ''}`} {...restProps}>
    		{children}
    	</Component>
    )
  }
};

Link.propTypes = {
  type: PropTypes.oneOf(['medium', 'bold', '']),
  component: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.any,
  ismobile: PropTypes.bool
};

Link.defaultProps = {
  component: 'a'
};