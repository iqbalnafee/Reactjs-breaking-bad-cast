import React from 'react'

const CharacterItem = (props) => {

    const {item} = props;

    return (
        <div>

            <h1>{item.name}</h1>
            
        </div>
    )
}

export default CharacterItem
