import React from 'react';
import propTypes from 'prop-types';

class CalcButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      text,
      className,
    } = this.props;
    return (
      <div className={`calcButton ${className}`}>
        {text}
      </div>
    );
  }
}

CalcButton.propTypes = {
  text: propTypes.string.isRequired,
  className: propTypes.string.isRequired,
};

export default CalcButton;
