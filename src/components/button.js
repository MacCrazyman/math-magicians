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
      onClick,
    } = this.props;
    return (
      <button key={text} type="button" onClick={onClick} className={`calcButton ${className}`}>
        {text}
      </button>
    );
  }
}

CalcButton.propTypes = {
  text: propTypes.string.isRequired,
  className: propTypes.string.isRequired,
  onClick: propTypes.func,
};

CalcButton.defaultProps = {
  onClick: () => {},
};

export default CalcButton;
