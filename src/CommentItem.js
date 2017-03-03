import React, { Component } from 'react';
import styled from 'styled-components';

const Comment = styled.div`
  background-color: ${props => props.color};
  padding: 12px;
  border-radius: 3px;
  margin-bottom: 12px;
  color: ${ props => props.color === "#445561" ? '#fff' : '#000' };
`

const Name = styled.span`
  font-size: 12px;
  margin-bottom: 6px;
  display: inline-block;
`

class CommentItem extends Component {
  render() {
    return (
      <Comment color={this.props.color}>
        <Name>{this.props.comment.username}</Name>
        <p>{this.props.comment.comment}</p>
      </Comment>
    );
  }
}

export default CommentItem;
