
import React from 'react';
import ReactDOM from 'react-dom';
import GifList from './GifList';
import SearchBar from './SearchBar';
import request from 'superagent';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: []
    }
  }

  componentDidMount() {
        request.get('http://api.giphy.com/v1/gifs/search?q=hollywood&api_key=dc6zaTOxFJmzC', function(err, res) {
            this.setState({
                gifs: res.body.data
            });
        }.bind(this));
    }

  handleTermChange(term) {
    const url = `http://api.giphy.com/v1/gifs/search?q=${term}&api_key=dc6zaTOxFJmzC`;   
    
   request.get(url, function(err, res) {
            this.state.gifs= res.body.data;


        });
  }

  render() {
    return (
      <div>
        <SearchBar onTermChange={this.handleTermChange} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default App