import React from 'react'

const CharacterItem = (props) => {

    const {item} = props;

    return (
        <div className="card">

            <div className="card-inner">

                <div className="card-front">
                    <img src={item.img} alt="" />
                </div>

                <div className="card-back">

                    <h1>{item.name}</h1>

                    <ul>
                        <li><strong>Actor Name: </strong>{item.portrayed}</li>
                    </ul>
                    <ul>
                        <li><strong>Nickname: </strong>{item.nickname}</li>
                    </ul>
                    <ul>
                        <li><strong>Birthday: </strong>{item.birthday}</li>
                    </ul>
                    <ul>
                        <li><strong>Status: </strong>{item.status}</li>
                    </ul>

                </div>


            </div>

            
            
        </div>
    )
}

export default CharacterItem
