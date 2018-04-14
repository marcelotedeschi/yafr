import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNews } from '../actions';


class NewsList extends Component {

    componentDidMount(){
        this.props.fetchNews();
    }

    render(){
        return(
            <div>
                Lista:
                {this.props.news}
            </div>
        );
    }

}

function mapStateToProps(state){
    return { news: state.news }
}

export default connect(mapStateToProps, { fetchNews })(NewsList);