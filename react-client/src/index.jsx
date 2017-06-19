import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
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
    $.ajax({
      url: '/items', 
      success: (data) => {
        console.log(data);
        this.setState({

          items: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render () {
    return (<div>
      <h1>Your Stats</h1>
      <Stats stats={this.state.stats}/>

    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));