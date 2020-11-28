import React from 'react'

class MovieRow extends React.Component {
    render() {
        return  <table key={this.props.movie.id}>
        <tbody>
          <tr>
            <td><img src={this.props.movie.poster_src} alt="poster"/></td>
            <td>{this.props.movie.title}</td>
            <p>{this.props.movie.overview}</p>
          </tr>
        </tbody>
      </table>
    }
}

export default MovieRow