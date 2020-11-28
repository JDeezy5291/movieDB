 import { Component } from 'react';
import './App.css';
import MovieRow from './movieRow'

class App extends Component {
  constructor(props) {
    super(props)
    console.log("This is my initializer")

    const movies = [
      {id: 0, poster_src: "https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_UX182_CR0,0,182,268_AL_.jpg", title: "Avengers: Infinity War", overview: "this is the overview"},
      {id: 1, poster_src: "https://m.media-amazon.com/images/M/MV5BMTcxODgwMDkxNV5BMl5BanBnXkFtZTYwMDk2MDg3._V1_UX182_CR0,0,182,268_AL_.jpg", title: "Avengers: Infinity War 2", overview: "this is the overview 2"}
    ]

    var movieRows = []
    movies.forEach((movie) => {
      console.log(movie.title)
      const movieRow = <MovieRow movie = {movie} />
      movieRows.push(movieRow)
    })

      this.state = {rows: movieRows}
    
  }
  render() {
    return (
      <div className="App">
        <table className="navbar">
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
