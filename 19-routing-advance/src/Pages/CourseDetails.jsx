import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetails = () => {

    //dynamic routing
    const params =useParams() 

  return (
    <div>
      <h1>{params.courseId} Course Details</h1>
    </div>
  )
}

export default CourseDetails
