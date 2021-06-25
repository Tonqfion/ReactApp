import React from 'react';
import Header from './components/Header';
import Movie from './components/Movie';
import './App.css';
import movieData from "./data/movieData";

class App extends React.Component {
    render() {
        return (
            <div className="App bg-gray-100 text-white">
                <Header/>
                <main className="my-8">
                    <div className="container mx-auto grid gap-16 grid-cols-2">
                    {movieData.map((movie,i) => <Movie {...movie} key={i}/>
                    )}
                    </div>
                </main>
            </div>
        );
    }
}

export default App;
