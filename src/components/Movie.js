import React from 'react';
import PosterLink from "./PosterLink";
import Casting from "./Casting";

class Movie extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            "isFullSummary" : false,
        }
    }


    showMoreClick = () => {
        console.log(this.props.summary);
        this.setState(
            {
                "isFullSummary" : !this.state.isFullSummary
            }
        );
    }

    render() {
        console.log('Je suis prêt !')
        const {title, year,director, posterURL, summary, Distribution} = this.props;
        const {isFullSummary} = this.state;

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
                        {isFullSummary ? summary : summary.slice(0,20)}
                    </p>
                    <button onClick={this.showMoreClick} className="px-4 py-2 m-4 bg-gray-600 text-white rounded-sm hover:bg-gray-100 hover:text-gray-500 transition ease-in-out duration-300">{isFullSummary ? "Show Less" : "Show More"}</button>
                    <Casting Cast = {Distribution}/>
                </div>
                    <PosterLink posterURL = {posterURL} info={title} />
            </div>
        )
    }


    componentDidMount() {
        console.log("J'arrive !");
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("J'ai été mis à jour");
    }
}

export default Movie;