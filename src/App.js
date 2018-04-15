import React, { Component } from 'react';
import NewsList from './components/news-list';

class App extends Component {
  render() {
    return (
      <div className="container">
        <NewsList></NewsList>
      </div>
    );
  }
}

export default App;
