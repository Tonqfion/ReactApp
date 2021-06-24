import React from 'react';

class Movie extends React.Component {
    render() {
        const {title, year,director,summary,posters} = this.props;
        return(
            <div className="">
                <div className="">
                    <h2>{title}</h2>
                    <time>{year}</time>
                    <p>{director}</p>
                    <p>
                        {summary}
                    </p>
                </div>
                <div className="">
                    {posters}
                </div>
            </div>
        )
    }
}

export default Movie;