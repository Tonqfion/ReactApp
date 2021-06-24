import React from 'react';
import Header from './components/Header';
import Movie from './components/Movie';
import './App.css';
import movieData from "./data/movieData";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <main>
                    {movieData.map(movie =>
                        <Movie
                            title={movie.title}
                            year={movie.year}
                            director={movie.director}
                            summary={movie.summary}
                            posters={movie.posterURL.map(poster =>
                                <a
                                    href={poster}
                                    target="_blank"
                                    rel="noreferrer">
                                    <img
                                        src={poster}
                                        alt=""/>
                                </a>
                            )}
                        />
                    )}
                </main>
            </div>
        );
    }
}

export default App;
