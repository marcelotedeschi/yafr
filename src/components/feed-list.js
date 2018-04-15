import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFeed } from '../actions';

class FeedList extends Component {
  componentDidMount() {
    this.props.fetchFeed();
  }

  renderFeed() {
    if (this.props.feed) {
      return this.props.feed.map((item) => {
        return (
          <li key={ item.title } className="card">
            <div className="card-header">
              { item.title }
            </div>
            <div className="card-body">
              <h5 className="card-title">{ item.title }</h5>
              <p className="card-text">{ item.description }</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </li>
        );
      });
    }
  }

  render() {
    return (
      <div className="feed-list">
        <h1 className="display-4">News:</h1>
        <ul>
          { this.renderFeed() }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { feed: state.feed }
}

export default connect(mapStateToProps, { fetchFeed })(FeedList);
