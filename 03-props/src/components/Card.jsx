import React from 'react'

const Card = (props) => {

  return (
        <div className="card">
            <img src={props.img} alt="img" />
            <h1>{props.user},{props.age}</h1>  
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis nam provident totam qui architecto nostrum amet labore doloribus quod ab debitis ad enim, tenetur porro? Ipsam dicta nisi debitis veniam!</p>
            <button>Click Me</button>
        </div>  
        )
}

export default Card
