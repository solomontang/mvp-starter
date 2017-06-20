import React from 'react';

class FriendSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term : ''
    }
  }
  render() {
    return (<div>
      <form onSubmit={this.addFriend}>
        <input onChange={this.onChange}placeholder='Add a friend'></input>
        <button>Add</button>
      </form>
      <select>
        <option>Select a Friend</option>
      </select>
    </div>)
  }

} 
  

export default FriendSelect;