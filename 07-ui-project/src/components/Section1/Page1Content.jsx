import React from 'react'
import LeftContent from './LeftContent'
import RightContet from './RightContet'

const Page1Content = (props) => {
    return (
        <div className='pb-20 h-[90vh] items-center flex gap-10  px-18 '>
            <LeftContent />
            <RightContet users={props.users} />
        </div>
    )
}

export default Page1Content
