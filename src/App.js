import React from 'react';
// eslint-disable-next-line import/no-named-as-default
import Calculator from './Components/Calculator';
import './index.css';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (<Calculator />);
  }
}

export default App;
