import React, { Component } from 'react';
import AddComment from './AddComment';
import CommentItem from './CommentItem';
import styled from 'styled-components';

const Colors = ['#FDD161', '#E8A13D', '#29A4AC', '#445561', '#AFD5D9'];

const Heading = styled.h2`
  margin-bottom: 12px;
  margin-top: 24px;
`

class CommentList extends Component {
  render() {
    return (
      <div className="CommentList">
        <AddComment dispatch={this.props.dispatch} locationId={this.props.locationId}/>
        { this.props.comments.length >= 1 &&
          <Heading>Comments</Heading>
        }
          {this.props.comments.map((comment, index) => <CommentItem key={index} color={Colors[index % Colors.length]} comment={comment}/>)}
      </div>
    );
  }
}

export default CommentList;
