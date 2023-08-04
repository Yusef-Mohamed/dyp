import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../App";
import "./lives.css";
import "react-calendar/dist/Calendar.css";
import Carousel from "react-bootstrap/Carousel";
import logo from "../../assets/logs.png";

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
        if (data.status) {
          setLives(data.data);
        } else {
          setLives([]);
          setNoLves(true);
        }
      });
  };


  const followLive = (course, id) => {
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
        "Content-Type": "application/json",
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
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src={logo} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item interval={700}>
          <img className="d-block w-100" src={logo} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item interval={700}>
          <img className="d-block w-100" src={logo} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
      {noLives ? <div>there is no lives </div> : null}
      {noLives ? null : (
        <div>
          <Calendar onChange={onChange} value={date} />
        </div>
      )}
      {lives?.length ? (
        lives?.map((live) => {
          return (
            <div className="live" key={live._id}>
              <div className="head">
                <div className="creator">instructor : {live.creator.name}</div>
                {live.course ? (
                  <div className="course">
                    course Name : {live.course.title}
                  </div>
                ) : (
                  <div className="course">3</div>
                )}

                <span onClick={() => followLive(live.course._id, live._id)}>
                  follow this
                </span>
              </div>
              <div className="second">
                <div className="title">title : {live.title}</div>
                <div className="date">
                  started at : {live.day} / {live.month} , at {live.hour}
                </div>
                <div className="durate">duration : {live.duration} hour</div>
              </div>
              {live.link ? (
                <a href={live.link} target="_blank" className="start-live">
                  start live
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
        <div style={{ textAlign: "center", margin: "40px", fontSize: "40px" }}>
          there is no lives{" "}
        </div>
      )}
    </div>
  );
};

export default Lives;
