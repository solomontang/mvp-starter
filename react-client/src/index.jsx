import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import Stats from './components/Stats.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: [],
      stats: {
        fighting: 0,
        versitility: 0,
        supporting: 0,
        farming: 0,
        pushing: 0
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

  search(term) {
    console.log(term);
    $.ajax({
      type: 'POST',
      url: '/stats', 
      data: {name: term},
      success: (data) => {
        console.log(data);
        // this.setState({

        //   items: data
        // })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render () {
    return (<div>
      <h1>Your Stats</h1>
      <Search onSearch ={this.search.bind(this)} />
      <Stats stats={this.state.stats}/>

    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));