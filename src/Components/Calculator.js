import React from 'react';
import '../index.css';
import calculate from '../logic/calculate';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
  }

   handleClick = (events) => {
     const { value } = events.target;
     const answer = calculate(this.state, value);
     this.setState(answer);
   }

  showAnswer = (events) => {
    this.setState({
      total: events.target.value,
    });
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="calcCenter">
        <div className="mainCalculator">
          <div className="screen-row" onChange={this.showAnswer}>
            {total}
            {operation}
            {next}
          </div>
          <div className="button-row one">
            <input type="button" value="AC" onClick={this.handleClick} />
            <input type="button" value="+/-" onClick={this.handleClick} />
            <input type="button" value="%" onClick={this.handleClick} />
            <input type="button" value="÷" className="orange" onClick={this.handleClick} />
          </div>
          <div className="button-row two">
            <input type="button" value="7" onClick={this.handleClick} />
            <input type="button" value="8" onClick={this.handleClick} />
            <input type="button" value="9" onClick={this.handleClick} />
            <input type="button" value="x" onClick={this.handleClick} className="orange" />
          </div>
          <div className="button-row three">
            <input type="button" value="4" onClick={this.handleClick} />
            <input type="button" value="5" onClick={this.handleClick} />
            <input type="button" value="6" onClick={this.handleClick} />
            <input type="button" value="-" onClick={this.handleClick} className="orange" />
          </div>
          <div className="button-row four">
            <input type="button" value="1" onClick={this.handleClick} />
            <input type="button" value="2" onClick={this.handleClick} />
            <input type="button" value="3" onClick={this.handleClick} />
            <input type="button" value="+" onClick={this.handleClick} className="orange" />
          </div>
          <div className="button-row five">
            <input type="button" value="0" onClick={this.handleClick} className="zero" />
            <input type="button" value="." onClick={this.handleClick} />
            <input type="button" value="=" onClick={this.handleClick} className="orange" />
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
