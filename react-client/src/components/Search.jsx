import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
    this.onChange = this.onChange.bind(this);
    this.search = this.search.bind(this);

  }

  onChange(e) {
    this.setState({
      term: e.target.value
    })
  }

  search(e) {
    this.props.onSearch(this.state.term);
    e.preventDefault();
  }

  render() {
    return (<div>
      <form onSubmit={this.search}>
        <input onChange={this.onChange}></input>
        <button type='submit'>Submit</button>
      </form>
    </div>)
  }

}
export default Search;