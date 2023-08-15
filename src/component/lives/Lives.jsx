import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../App";
import "./lives.css";
import "react-calendar/dist/Calendar.css";
import Carousel from "react-bootstrap/Carousel";
import logo from "../../assets/logs.png";
import one from "../../assets/panars/1-15.webp";
import two from "../../assets/panars/1-16.webp";
import three from "../../assets/panars/1-17.webp";
import Calendar from "react-calendar";
const Lives = () => {
  const { route, token, setOnload, messageError } = useContext(AppContext);
  const [lives, setLives] = useState([]);
  const [noLives, setNoLves] = useState(false);
  const [date, setDate] = useState(new Date());

  // const onChange =(date)=>{
  //   setDate(date)
  //   fetch(`${route}/education/lives/searchByDate/${date}`)
  //   .then(res=>res.json())
  //   .then(data=>console.log(data))
  // }

  const onChange = (date) => {
    setDate(date);
    fetch(`${route}/education/lives/searchByDate/${date}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status) {
          setLives(data.data);
        } else {
          setLives([]);
          setNoLves(true);
        }
      });
  };

  const followLive = (course, id) => {
    console.log(course + id);
    fetch(`${route}/education/lives/followLive/${course}/${id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.succes == "true") {
          messageError("You Are Follow This Live Now");
        } else {
          messageError("You Are Already follow this live");
        }
      });
  };

  useEffect(() => {
    fetch(`${route}/education/lives`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.msg == "no lives for you") {
          setNoLves(true);
          return <div>no lives</div>;
        } else {
          setLives(data.data);
        }
      });
  }, []);
  return (
    <div className="lives">
      <Carousel>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100" src={one} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100" src={two} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100" src={three} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
      <div className="row">
        <div className="col-lg-8 col-md-6">
          <Calendar onChange={onChange} value={date} />
        </div>
        <div className="col-lg-4 col-md-6 my-3 my-md-0">
          {lives?.length ? (
            lives?.map((live) => {
              return (
                <div className="live" key={live._id}>
                  <div className="head">
                    <div className="creator">
                      <span>{live.creator.name}</span>
                      <span
                        className="styled"
                        onClick={() => followLive(live.course._id, live._id)}
                      >
                        follow this
                      </span>
                      <span>
                        {live.day} / {live.month} , at {live.hour}
                      </span>
                    </div>
                    <div>
                      {live.course ? (
                        <div className="course">{live.course.title}</div>
                      ) : (
                        <div className="course">public</div>
                      )}
                    </div>
                  </div>
                  <div>
                    <div className="title"> {live.title}</div>
                  </div>
                  {live.link ? (
                    <a href={live.link} target="_blank" className="start-live">
                      Watch live
                    </a>
                  ) : (
                    <div className="prevent-life">
                      live will start at {live.day}/{live.month}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div
              style={{ textAlign: "center", margin: "40px", fontSize: "40px" }}
            >
              there is no lives{" "}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Lives;
