import React, { Component } from 'react';
import {addComment} from './actions.js';
import styled from 'styled-components';

const Username = styled.input`
  width: 100%;
  display: block;
  background: transparent;
  box-shadow: none;
  border: 0 solid transparent;
  border-bottom: 2px solid #445561;
  border-radius: 0;
  height: 44px;
  font-size: 16px;
  padding-left: 12px;
  margin-bottom: 12px;
  &:focus, &:hover{
    outline: none;
    border-bottom: 2px solid #29A4AC;
  }
`;

const Comment = styled.textarea`
  width: 100%;
  display: block;
  background: transparent;
  box-shadow: none;
  border: 0 solid transparent;
  border-bottom: 2px solid #445561;
  border-radius: 0;
  height: 44px;
  font-size: 16px;
  padding-left: 12px;
  padding-top: 12px;
  margin-bottom: 12px;
  &:focus, &:hover{
    outline: none;
    border-bottom: 2px solid #29A4AC;
  }
`;

const SubmitButton = styled.button`
  display:block;
  width: 100%;
  border: 0 transparent solid;
  padding: 12px;
  background-color: #445561;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #37454F;
  }
  &:focus{
    outline: none;
    background-color: #29A4AC;
  }
`

const Form = styled.form`
  margin-bottom: 12px;
`


class AddComment extends Component {
  constructor(props) {
    super(props);
    this.state = {comment: '', username: ''};
  }

  submitNewComment = (evt) => {
    evt.preventDefault();
    if(!this.state.comment || !this.state.username) {
      return;
    }
    this.props.dispatch(addComment(this.state.username, this.state.comment, this.props.locationId));
    this.setState({
      comment: '',
      username: '',
    })
  }

  render() {
    return (
      <Form onSubmit={this.submitNewComment}>
          <Username placeholder="Your name" type="text" value={this.state.username} onChange={evt => this.setState({username: evt.target.value})}/>
          <Comment placeholder="Comment" value={this.state.comment} onChange={evt => this.setState({comment: evt.target.value})} />
          <SubmitButton type="submit">Add</SubmitButton>
      </Form>
    );
  }
}

export default AddComment;
