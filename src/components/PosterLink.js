import React from 'react';

class PosterLink extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "numberImg": 0,
        }
    }

    changePoster = (step) => {
        const {posterURL} = this.props;
        const {numberImg} = this.state;
        this.setState( {
            "numberImg" : numberImg + step,
        })
    }

    render() {
        const {posterURL, info} = this.props;
        const {numberImg} = this.state;

        return (
            <div className="flex items-center justify-center">

                { numberImg > 0 &&
                <button className="bg-blue-700 p-2" onClick={() => this.changePoster(-1)}>&lt;</button>
                }

                <a className="self-end"
                   href={posterURL[numberImg % posterURL.length]}
                   target="_blank"
                   rel="noreferrer" key={posterURL[numberImg % posterURL.length]}>
                    <img className="max-h-96 mx-auto"
                        src={posterURL[numberImg % posterURL.length]}
                        alt={"Affiche du film " + info}
                    />
                </a>

                { numberImg < posterURL.length - 1 &&
                <button className="bg-blue-700 p-2" onClick={() => this.changePoster(1)}>&gt;</button>
                }

            </div>
        )
    }
}

export default PosterLink;