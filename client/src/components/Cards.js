import React from 'react'

const Cards = ({name,hp,type,img}) => {
    return (
        <div>
              <img className="img" src={img} alt='imagen pokemon' height='135px' width='135px' />
            <h2>{name}</h2>
           <h3> Hp:{hp}</h3>
          
            <h4>Types: {type}</h4>
        </div>
    )
}

export default Cards
