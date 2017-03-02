import React, { Component } from 'react';
import {addComment} from './actions.js';

class AddComment extends Component {
  constructor(props) {
    super(props);
    this.state = {comment: '', username: ''};
  }

  submitNewComment = (evt) => {
    evt.preventDefault();
    this.props.dispatch(addComment(this.state.username, this.state.comment, this.props.locationId));
    this.setState({
      comment: '',
      username: '',
    })
  }

  render() {
    return (
      <form onSubmit={this.submitNewComment}>
        <div className="AddComment">
          <input type="text" value={this.state.username} onChange={evt => this.setState({username: evt.target.value})}/>
          <textarea value={this.state.comment} onChange={evt => this.setState({comment: evt.target.value})} />
          <button type="submit">Add</button>
        </div>
      </form>
    );
  }
}

export default AddComment;
