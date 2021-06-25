import React from 'react';

class Casting extends React.Component {
    render() {

        const {Cast} = this.props;
        return(
            <ul className="my-8">

                {
                    Cast.map((castMember) =>
                    <li className="self-end" test={btoa((castMember.name + castMember.role).replace(/\s/g, '').toLowerCase())} key={btoa((castMember.name + castMember.role).replace(/\s/g, '').toLowerCase())}>
                        <p>{castMember.role} : {castMember.name}
                        </p>
                    </li>
                )
                }
            </ul>
        )
    }
}


export default Casting;