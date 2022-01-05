import React from 'react';
import propTypes from 'prop-types';

class CalcButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { text } = this.props;
    return (
      <div className="calcButton">
        <p>{text}</p>
      </div>
    );
  }
}

CalcButton.propTypes = {
  text: propTypes.string.isRequired,
};

export default CalcButton;
