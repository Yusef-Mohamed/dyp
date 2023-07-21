import React, { useContext, useEffect ,useState} from 'react'
import { AppContext } from '../../App'
import './lives.css'

const Lives = () => {
    const {route ,token ,setOnload ,messageError}=useContext(AppContext)
    const [lives, setLives] = useState([]);


    const followLive =(course ,id)=>{
        fetch(`${route}/education/lives/followLive/${course}/${id}`, {
            method: "PUT",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then(res=>res.json())
          .then(data=>{console.log(data)
          if (data.succes=='true'){
            messageError("You Are Follow This Live Now")
          }
          else{
            messageError("You Are Already follow this live")
          }
          })
    }

    useEffect(()=>{
        fetch(`${route}/education/lives`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => res.json())
          .then((data) => {
          
            setLives(data.data);
           
           
          });

          
    
    },[])
  return (
<div className="lives">
    {lives.map((live)=>{
        return(
            <div className="live" key={live._id}>
                <div className="head">
                    <div className="creator">instructor : {live.creator.name}</div>
                    {live.course ? <div className='course'>course Name : {live.course.title}</div>:<div className='course'>3</div>}
                  
                    <span onClick={()=>followLive(live.course._id,live._id)}>follow this</span>
                </div>
                <div className="second">
                    <div className="title">title : {live.title}</div>
                    <div className="date">started at : {live.day} / {live.month} , at {live.hour}</div>
                    <div className="durate">duration : {live.duration} hour</div>
                </div>
                {live.link ? <a href={live.link} target='_blank' className='start-live'>start live</a> : <div className='prevent-life'>live will start at {live.day}/{live.month}</div>}
            </div>
        )
    })}
</div>
  )
}

export default Lives
