 import { Component } from 'react';
import './App.css';
import MovieRow from './movieRow'
import $ from 'jquery'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    // console.log("This is my initializer")

    // const movies = [
    //   {id: 0, poster_src: "https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_UX182_CR0,0,182,268_AL_.jpg", title: "Avengers: Infinity War", overview: "this is the overview"},
    //   {id: 1, poster_src: "https://m.media-amazon.com/images/M/MV5BMTcxODgwMDkxNV5BMl5BanBnXkFtZTYwMDk2MDg3._V1_UX182_CR0,0,182,268_AL_.jpg", title: "Avengers: Infinity War 2", overview: "this is the overview 2"}
    // ]

    // var movieRows = []
    // movies.forEach((movie) => {
    //   console.log(movie.title)
    //   const movieRow = <MovieRow movie = {movie} />
    //   movieRows.push(movieRow)
    // })

    //   this.state = {rows: movieRows}

    this.performSearch("avengers")
  }

  performSearch(searchTerm) {
    console.log("Perform search using moviedb")
    const urlString = "https://api.themoviedb.org/3/search/movie?query=" + searchTerm + "&api_key=__key__"
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log("fetched data successfully")

        const results = searchResults.results
        // console.log(results[0])

        var movieRows = []

        results.forEach((movie) => {
          movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path
          // console.log(movie.poster_path)
          const movieRow = <MovieRow key={movie.id} movie={movie} />
          movieRows.push(movieRow)
        })

        this.setState({rows: movieRows})
      },
      error: (xhr, status, err) => {
        console.log("failed to fetch data")
      }
    })
  }

  searchChangeHandler(event) {
    console.log(event.target.value)
    const boundObject = this
    const searchTerm = event.target.value
    boundObject.performSearch(searchTerm)
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
        <input type="text" onChange={this.searchChangeHandler.bind(this)} placeholder="Enter Search term"/>

        {this.state.rows}
        
      </div>
    );
  }
}

export default App;
