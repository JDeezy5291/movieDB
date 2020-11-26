 import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    console.log("This is my initializer")

    const movies = [
      {id: 0, title: "Avengers: Infinity War", overview: "this is the overview"},
      {id: 1, title: "Avengers: Infinity War 2", overview: "this is the overview 2"}
    ]

    this.state = { rows: <p>This is my row</p> }

    var movieRows = []
    movies.forEach((movie) => {
      console.log(movie.id)
      movieRows.push(<p key={movie.id}>{movie.title}</p>)
    })

      this.state = {rows: movieRows}
    
  }
  render() {
    return (
      <div className="App">
        <table>
          <tbody>
            <tr>
              <td>
                <h2>MovieDB</h2>
              </td>
              <td> Search</td>
            </tr>
          </tbody>
        </table>
        <input type="text" placeholder="Enter Search term"/>

        {this.state.rows}
        
      </div>
    );
  }
}

export default App;
