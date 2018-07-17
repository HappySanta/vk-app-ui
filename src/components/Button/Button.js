import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Button.scss'
import WaitDots from "../WaitDots/WaitDots";

export default class Button extends Component {
  componentDidMount(){
    if (this.props.fixedwidth) this.VKButton.style.minWidth = `${this.VKButton.offsetWidth}px`
  }

  render() {
  	let { type, component, className: baseClassName, children, ismobile, loading, fixedwidth, ...restProps } = this.props,
        isMobile = ismobile !== undefined ? ismobile : window.isMobile !== undefined ? window.isMobile : ~window.location.pathname.indexOf('mobile') ? true : false,
				Component = this.props.component

    return (
    	<Component
        ref={button => {this.VKButton = button}}
        className={`Button${type ? ` Button--${type}` : ''}${loading ? ' Button--loading' : ''}${baseClassName ? ` ${baseClassName}` : ''}${isMobile ? ' Button--mobile' : ''}`}
        {...restProps}
      >
    		{loading ? <WaitDots color={type === 'secondary' || type === 'transparent' ? 'blue' : ''}/> : children}
    	</Component>
    )
  }
};

Button.propTypes = {
  type: PropTypes.oneOf(['default', 'secondary', 'transparent', '']),
  component: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.any,
  ismobile: PropTypes.bool,
  loading: PropTypes.bool,
  fixedwidth: PropTypes.bool
};

Button.defaultProps = {
  type: 'default',
  component: 'button'
};