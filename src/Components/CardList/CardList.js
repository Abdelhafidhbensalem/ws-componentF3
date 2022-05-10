import React from 'react'
import Card from '../Card/Card'

const CardList = () => {
    const arr = [{ name: "Mohamed", age: 30 }, { name: "Arwa", age: 45 }, { name: "Ali", age: 40 }]
    //const arr={name:"ABS"}
    return (
        <div style={{display:"flex",justifyContent: "space-around",flexWrap: 'wrap',gap:10 }}>{arr.map((el,i)=><Card key={i}/>)}</div>

    )
}

export default CardList