import React from 'react';
import PosterLink from "./PosterLink";
import Casting from "./Casting";

class Movie extends React.Component {
    render() {
        const {title, year,director,summary,posterURL, Distribution} = this.props;
        return(
            <div className="bg-green-500 flex flex-col border border-2 border-grey-300 p-4 rounded-xl shadow-2xl">
                <div className="flex-grow mb-4">
                    <h2 className="text-3xl font-extrabold mb-2">
                        {title}
                    </h2>
                    <time>
                        {year}
                    </time>
                    <p className="text-xl italic border-white border-b-2  mb-4">
                        {director}
                    </p>
                    <p className="text-left">
                        {summary}
                    </p>
                    <Casting Cast = {Distribution}/>
                </div>
                    <PosterLink posterURL = {posterURL} info={title} />
            </div>
        )
    }
}

export default Movie;