import React from 'react';

const Movie=({name,price,id})=>{
    return(
        <div>
            <h1>{name}</h1>
            <h1>{price}</h1>
            <h1>{id}</h1>
        </div>
    );
};

export default Movie;