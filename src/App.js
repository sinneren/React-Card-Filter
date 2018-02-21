import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './components/CardList';
import Filter from './components/Filter';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.state = {
      filter: {
        price: '',
        cashback: false,
        freeprice: false,
        c2c: false,
        withdrawal: false
      }
    }
  }
  handleChange(name, val) {
    this.setState({
      filter: {
        ...this.state.filter,
        [name]: val
      }
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Сравнение банковских карт</h1>
        </header>
        <Filter
          onChange={this.handleChange}
          filter={this.state.filter}
        />
        <CardList filter={this.state.filter} />
      </div>
    );
  }
}

export default App;
