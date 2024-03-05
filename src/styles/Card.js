import React from 'react'


const Card = ({title, onMouseEnter, style, className}) => (
        <div onMouseEnter={onMouseEnter} style={style}  className={`card text-light text-center bg-dark shadow p-5`}>
            <h3>{title}</h3>
        </div>
)


export default Card