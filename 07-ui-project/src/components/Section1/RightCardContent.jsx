import React from 'react'

const RightCardContent = (props) => {
    return (
        <div className='absolute top-0 left-0 h-full w-full  p-8 flex flex-col justify-between'>
            <h2 className='bg-white text-2xl font-semibold rounded-full h-10 w-10 flex justify-center items-center'>{props.id + 1}</h2>
            <div>
                <p className='text-shadow-5xs text-s leading-snug text-white mb-5'>{props.intro}
                </p>
                <div className='flex justify-between'>
                    <button style={{ backgroundColor: props.color }} className=' text-white font-medium px-7 py-3 rounded-full'>{props.tag}</button>
                    <button style={{ backgroundColor: props.color }} className=' text-white font-medium px-4 py-3 rounded-full'><i className="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div >
    )
}

export default RightCardContent
