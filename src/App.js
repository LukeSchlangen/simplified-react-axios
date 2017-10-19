import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    // store.dispatch(listActions.addNewItem({title: 'Miles says Hello'}));
    // this.props.actions.fetchList();
    this.state = {
      items: []
    }
    // this.newItemChange = this.newItemChange.bind(this);
  }

  componentDidMount() {
    axios
      .get('http://demo1402877.mockable.io/list')
      .then(res => {
        this.setState({ items: res.data })
        console.log('res.data', res.data);
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          {/* <h3>{this.props.listTitle}</h3> */}
          <input onChange={this.newItemChange} />
          {/* <div>{this.props.list.title}</div> */}
          <ul>
            {this.state.items.map(item => (
              <li key={item.title}> {/* key must be unique, used for internal react tracking */}
                {item.title}
              </li>)
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
