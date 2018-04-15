import React, { Component } from 'react';
import FeedList from './components/feed-list';

class App extends Component {
  render() {
    return (
      <div className="container">
        <FeedList></FeedList>
      </div>
    );
  }
}

export default App;
