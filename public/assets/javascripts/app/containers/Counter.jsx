import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { increment, incrementIfOdd, incrementAsync, decrement } from '../actions/counter';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleIncrementIfOdd = this.handleIncrementIfOdd.bind(this);
    this.handleIncrementAsync = this.handleIncrementAsync.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  handleIncrement() {
    this.props.dispatch(increment());
  }

  handleIncrementIfOdd() {
    this.props.dispatch(incrementIfOdd());
  }

  handleIncrementAsync() {
    this.props.dispatch(incrementAsync());
  }

  handleDecrement() {
    this.props.dispatch(decrement());
  }

  render() {
    return (
      <div>
        <div>counter</div>
        <p>value: {this.props.counter}</p>
        <div>
          <button onClick={this.handleIncrement}>Inclement</button>
          <button onClick={this.handleIncrementIfOdd}>Inclement If Odd</button>
          <button onClick={this.handleIncrementAsync}>Inclement Async</button>
          <button onClick={this.handleDecrement}>Decrement</button>
        </div>
        <Link to="/">back index</Link>
      </div>
    );
  }
}

Counter.propTypes = {
  dispatch: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired
};

function select({ counter }) {
  return { counter };
}

export default connect(select)(Counter);
