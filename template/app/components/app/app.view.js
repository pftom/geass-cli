import { React, Component } from 'geassjs';

import logo from '../../images/logo.svg';
import './app.style.css';

export default class AppView extends Component {
  render() {
    const { dispatch } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Geass</h1>
        </header>
        <button onClick={() => dispatch({ type: 'app/sayHello' })}>Sync say hello to Geass</button>
        <button onClick={() => dispatch({ type: 'app/asyncSayHello' })}>Async say hello to Geass</button>
      </div>
    );
  }
}