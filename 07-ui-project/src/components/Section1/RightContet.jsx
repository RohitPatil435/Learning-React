import React from 'react'
import RightCard from './RightCard'

const RightContet = (props) => {
    return (
        <div id='right' className='h-full flex flex-nowrap gap-3 overflow-x-auto p-6 w-2/3'>
            {props.users.map(function (elem, idx) {
                return <RightCard key={idx} id={idx} img={elem.img} intro={elem.intro} tag={elem.tag} color={elem.color} />;
            })}
        </div >
    )
}

export default RightContet
