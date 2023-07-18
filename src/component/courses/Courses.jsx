import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../App'
import './courses.css'
import ImageWithPopup from '../ImageWithPopup/ImageWithPopup'

const Courses = () => {
    const {categoryId,setCategoryId,token}=useContext(AppContext)
    const {route,setRoute}=useContext(AppContext)
    const [courses,setCourses]=useState([])
    const [lessons,setLessons]=useState([])
    const [chosen,setChosen]=useState(false)
    const [loading,setLoadin]=useState(false)


    const clickCourse =(id)=>{
        setChosen(true)
       setLoadin(true)
        fetch(`${route}/education/lessons/relatedLessons/${id}`,{
            headers:{
                'Authorization': `Bearer ${token}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.data){
             setLessons(data.data)  
            }
            setLoadin(false)
        })
    }

    useEffect(()=>{
   
        let token=sessionStorage.getItem("token")
        fetch(`${route}/education/courses/relatedCourses/${sessionStorage.getItem("catId")}`,{
            headers:{
                'Authorization': `Bearer ${token}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
            setCourses(data.data)  
        })

    },[])

  
  return (
  <div className="courses">
    <div className="courses-data">
    {courses&&courses.map((course)=>{
        return(
            <div onClick={()=>clickCourse(course._id)} className="course" key={course._id}>
                {course.title}               
            </div>
        )
    })}
    </div>

    <div className="content">
    {loading ? (
          <div className="content-loader">
            <div id="wifi-loader">
              <svg class="circle-outer" viewBox="0 0 86 86">
                <circle class="back" cx="43" cy="43" r="40"></circle>
                <circle class="front" cx="43" cy="43" r="40"></circle>
                <circle class="new" cx="43" cy="43" r="40"></circle>
              </svg>
              <svg class="circle-middle" viewBox="0 0 60 60">
                <circle class="back" cx="30" cy="30" r="27"></circle>
                <circle class="front" cx="30" cy="30" r="27"></circle>
              </svg>
              <svg class="circle-inner" viewBox="0 0 34 34">
                <circle class="back" cx="17" cy="17" r="14"></circle>
                <circle class="front" cx="17" cy="17" r="14"></circle>
              </svg>
              <div class="text" data-text="loading"></div>
            </div>
          </div>
        ) : null}
        {chosen ? <h3>recorded</h3> : null}
        {chosen ?<div className="recorded">
        {lessons.map((lesson, index) => {
  if (lesson.type === "recorded") {
    return (
      <div className="lesson" key={index}>
        {/* <img src={lesson.image} /> */}
        <ImageWithPopup
          src={lesson.image}
          class={"w-100"}
          youtube={lesson.videoUrl}
        />
        <div className="title">{lesson.title}</div>
  
      </div>
    );
  } else {
    return null;
  }
})}
        </div> : <div className='chosen'>select a course</div>}
        {chosen ? <h3>live</h3> : null}
        {chosen ?<div className="recorded">
        {lessons.map((lesson, index) => {
  if (lesson.type != "recorded") {
    return (
      <div className="lesson" key={index}>
             <ImageWithPopup
          src={lesson.image}
          class={"w-100"}
          youtube={lesson.videoUrl}
        />
        <div className="title">{lesson.title}</div>

      </div>
    );
  } else {
    return null;
  }
})}
        </div> : <div className='chosen'>select a course</div>}
    </div>
  </div>
  )
}

export default Courses
