import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNews } from '../actions';

class NewsList extends Component {
  componentDidMount() {
    this.props.fetchNews();
  }

  renderNews() {
    if (this.props.news) {
      return this.props.news.map((news) => {
        return (
          <li key={ news.title } className="card">
            <div className="card-header">
              { news.title }
            </div>
            <div className="card-body">
              <h5 className="card-title">{ news.title }</h5>
              <p className="card-text">{ news.description }</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </li>
        );
      });
    }
  }

  render() {
    return (
      <div className="container">
        <h1 className="display-4">News:</h1>
        <ul>
          { this.renderNews() }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { news: state.news }
}

export default connect(mapStateToProps, { fetchNews })(NewsList);
