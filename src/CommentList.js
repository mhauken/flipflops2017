import React, { Component } from 'react';
import AddComment from './AddComment';
import CommentItem from './CommentItem';

class CommentList extends Component {
  render() {
    return (
      <div className="CommentList">
        <AddComment dispatch={this.props.dispatch} locationId={this.props.locationId}/>
        {this.props.comments.map((comment, index) => <CommentItem key={index} comment={comment}/>)}
      </div>
    );
  }
}

export default CommentList;
