import React from 'react';

const SinglePokeInfo = props => {
    return (
        <figure className="singlePokeInfo_data">
            {props.pokemon.name}
        </figure>
    )
}

export default SinglePokeInfo;