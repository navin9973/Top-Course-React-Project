import { useState } from "react";
import Card from "./card"
import "./cards.css";
function Cards({courses,category}){
  const [likedcourse,setlikecourse]=useState([]);
  const getcourse = ()=>{   //bina function ke v kr shte h 
    if(category=="All"){
      let allCourse=[];
      Object.values(courses).forEach((coursecatogory)=>{
        coursecatogory.forEach((course)=>{
          allCourse.push(course);
        })
      })
  return allCourse;
    }
    else{
      return courses[category]
    }
    
  }
  return(
    <div className="cards">
      {
      getcourse().map((course)=>{
  return <Card key={course.id} course={course} likedcourse={likedcourse} setlikecourse={setlikecourse}/>
      })
    }
    </div>
  )
}
export default Cards;