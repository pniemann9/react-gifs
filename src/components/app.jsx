import React, { Component } from "react";
import giphy from 'giphy-api';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';


// import '../assets/stylesheets/application.scss';
// import App from './components/app.jsx';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      gifs: [],
      selectedGifId: "TObbUke0z8Mo"
    }
    this.search("curious panda");
  }

  search = (query) => {
    giphy('Z0lGSbFmQWX4gqK5qSzl6UofkhFAeZK3').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (error, result) => {
      this.setState({
        gifs: result.data
        // Res contains gif data!
      });
    });
  }

  render() {
    const gifs = [
      { id: "xT9IgDEI1iZyb2wqo8" },
      { id: "oVpjKztlM9joc" }
    ];
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;
