import './index.css';
// eslint-disable-next-line import/extensions
import Calculator from './Components/Calculator ';

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
