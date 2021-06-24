import React from 'react';
import './Movie.css';

class Movie extends React.Component {
    render() {
        return(
            <div className="movie-item">
                <h2>{this.props.title}</h2>
                <time>{this.props.date}</time>
                <p>{this.props.director}</p>
                <p>
                    {this.props.summary}
                </p>
            </div>
        )
    }
}

export default Movie;