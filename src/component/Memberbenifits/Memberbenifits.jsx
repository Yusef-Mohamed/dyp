import React, { useEffect, useState } from "react";
import "./memberbenifits.css";

import "swiper/css";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper";
import img from "../../assets/panars/Member Benifits.webp";

function Memberbenifits() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://api.wealthmakers-fx.com/api/v1/education/packages`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        console.log(data.data);
      });
  }, []);
  return (
    <div className="memberbenifits">
      <img src={img} className="secBanar" alt="" />

      <div className="container py-5">
        <div className="text-center">
          <h1 className="heading">Benefits</h1>
          <p style={{ fontSize: "20px" }} className="my-5">
            iGenius has a membership for anyone interested in improving their
            relationship with money.
          </p>
        </div>
      </div>
      <div className="container">
        <Swiper
          autoplay={{
            pauseOnMouseEnter: true,
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            500: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
          effect={"coverflow"}
          loop={true}
          grabCursor={true}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
          modules={[EffectCoverflow, Autoplay]}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          {data?.map((packagee) => (
            <SwiperSlide>
              <div className="card-swap">
                <h1>{packagee.title}</h1>
                <h2>{packagee.price}$</h2>

                <p>{packagee.description}</p>
                {packagee?.courses?.length != 0 ? (
                  <>
                    <h4>Courses</h4>
                    <ul>
                      {packagee.courses.map((course) => (
                        <li>{course.title}</li>
                      ))}
                    </ul>
                  </>
                ) : (
                  ""
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Memberbenifits;
