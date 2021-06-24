import React from 'react';
import Header from './components/Header';
import Movie from './components/Movie';
import './App.css';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <main>
                    <Movie title="podium" date="12/06/2021" director="Jean-Louis Real" summary="lorem lorem"/>
                    <Movie title="sql" date="13/05/1999" director="Pouet le Chat" summary="lorem lorem"/>
                </main>
            </div>
        );
    }
}

export default App;
