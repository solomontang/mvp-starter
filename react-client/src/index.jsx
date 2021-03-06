import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import Stats from './components/Stats.jsx';
import FriendSelect from './components/FriendSelect.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      recentMatches: [],
      stats: {
        farming: 0.5,
        fighting: 0.5,
        versitility: 0.5,
        pushing: 0.5,
        supporting: 0.5
      }
    }
  }

  componentDidMount() {
    // $.ajax({
    //   url: '/stats', 
    //   success: (data) => {
    //     console.log(data);
    //     // this.setState({

    //     //   items: data
    //     // })
    //   },
    //   error: (err) => {
    //     console.log('err', err);
    //   }
    // });
  }

  search(term, endpoint) {
    // console.log(term);
    console.log(endpoint);
    $.ajax({
      type: 'POST',
      url: endpoint, 
      data: {name: term},
      success: (data) => {
        console.log(data);
        if(typeof data === 'object') {
          this.setState({
            stats: data.stats
          });
        }
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render () {
    return (<div>
      <h1>Dota 2 Stats Overview</h1>
      <Search onSearch={this.search.bind(this)} />
      <Stats stats={this.state.stats}/>

    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));