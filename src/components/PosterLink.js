import React from 'react';

class PosterLink extends React.Component {
    render() {

        const {posterURL, info} = this.props;
        return(
            <div className="grid grid-flow-col items-center gap-2">

                {posterURL.map((poster) =>
                <a className="self-end"
                           href={poster}
                           target="_blank"
                           rel="noreferrer" key={poster}>
                            <img
                                src={poster}
                                alt={"Affiche du film " + info}
                            />
                        </a>

            )
                }

            </div>
        )
    }
}


export default PosterLink;