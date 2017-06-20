import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      friend: ''
    };
    this.userChange = this.userChange.bind(this);
    this.search = this.search.bind(this);

    this.friendChange = this.friendChange.bind(this);
    this.addFriend = this.addFriend.bind(this);
  }

  userChange(e) {
    this.setState({
      user: e.target.value
    })
  }

  friendChange(e) {
    this.setState({
      friend: e.target.value
    })
  }

  search(e) {
    // console.log(this.state.user);
    this.props.onSearch(this.state.user, '/stats');
    e.preventDefault();
  }

  addFriend(e) {
    var body = {
      user: this.state.user,
      friend: this.state.friend
    }
    console.log(this.state.friend);
    this.props.onSearch(body, '/add')
    e.preventDefault();
  }

  render() {
    return (<div>
      <form onSubmit={this.search}>
        <input onChange={this.userChange} placeholder={'Your username'}></input>
        <button type='submit'>Submit</button>
      </form>

        <input onChange={this.friendChange} placeholder='Add a friend'></input>
        <button onClick={this.addFriend}>Add</button>

      <select>
        <option>Select a Friend</option>
      </select>
    </div>)
  }

}
export default Search;