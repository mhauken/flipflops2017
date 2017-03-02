import React, { Component } from 'react';

class CommentItem extends Component {
  render() {
    return (
      <div className="CommentItem">
        <span>{this.props.comment.username}</span>
        <p>{this.props.comment.comment}</p>
      </div>
    );
  }
}

export default CommentItem;
