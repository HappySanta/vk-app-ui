import React, {Component} from 'react'
import PropTypes from 'prop-types';
import './WaitDots.scss'

export default class WaitDots extends Component {
  render() {
    let { color, className: baseClassName } = this.props
    
    return (
      <span className={`WaitDots${color === 'blue' ? ' WaitDots--blue' : ''}${baseClassName ? ` ${baseClassName}` : ''}`}>
        <span className="dot dot1" />
        <span className="dot dot2" />
        <span className="dot dot3" />
      </span>
    )
  }
}

WaitDots.propTypes = {
  color: PropTypes.oneOf(['blue', 'white', '']),
  className: PropTypes.string
};