import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper";
import "./products.css";
import one from "../../assets/products/photos/1.webp";
import analysis from "../../assets/products/photos/analysis.webp";
import live from "../../assets/products/photos/live.webp";
import school from "../../assets/products/photos/school.webp";
import sk from "../../assets/products/photos/sk.webp";
import telegram from "../../assets/products/photos/telegram.webp";
import oneLogo from "../../assets/products/logos/1.webp";
import analysisLogo from "../../assets/products/logos/analysis.webp";
import liveLogo from "../../assets/products/logos/live.webp";
import schoolLogo from "../../assets/products/logos/school.webp";
import skLogo from "../../assets/products/logos/sk.webp";
import telegramLogo from "../../assets/products/logos/telegram.webp";
import img from "../../assets/Products.webp";
function Products() {
  const products = [
    {
      img: one,
      logo: oneLogo,
      id: "one",
      desc: "The 1% platform is the perfect place for ambitious entrepreneurs seeking to enhance their knowledge and expand their professional networks in the field of entrepreneurship. Through this platform, we provide a comprehensive educational environment and specialized resources that assist entrepreneurs in their journey of growth and development. Starting from ideation and content creation, all the way to growth strategies and marketing, we offer opportunities for you to communicate and collaborate with like-minded individuals who share the same ambition and entrepreneurial mindset.",
      heading: "The 1% platform",
    },
    {
      img: sk,
      logo: skLogo,
      id: "sk",
      desc: "It is an integrated system and strategy based on understanding golden zones and anticipating future market movements. It is considered one of the most powerful strategies due to its precision in setting targets.",
      heading: "SK System",
    },
    {
      img: live,
      logo: liveLogo,
      id: "live",
      desc: "With the Study Live platform, you will have direct access to a select group of financial market experts, receiving real-time guidance that will assist you in making well-informed and intelligent investment decisions. You will benefit from their in-depth analyses and valuable advice.",
      heading: "Study Live platform",
    },
    {
      img: school,
      logo: schoolLogo,
      id: "shcool",
      desc: "The 'School' platform is the place where you can find all the recorded educational lessons you need, starting from the basics and progressing to advanced and professional levels. We provide one of the largest libraries of educational trading materials online, allowing you easy and flexible access to a comprehensive range of learning resources.You'll find video clips and instructional lessons covering various analyses and systems. The recorded content allows you to benefit from repeated learning, following your own pace and schedule.",
      heading: "School platform,",
    },
    {
      img: telegram,
      logo: telegramLogo,
      id: "telegram",
      desc: "W.M BOT is a Telegram bot that provides access to all the leading trading signals channels offered by our institution. These channels are known for their precise targets and impressive results.W.M BOT is designed to offer convenience and efficiency in your trading experience. By using W.M BOT, you'll have direct access to exclusive signal channels carefully prepared and renowned for their accuracy and proven track record. Whether you're a beginner or an experienced trader, it offers valuable insights and recommendations to assist you in making informed trades.Through W.M BOT, you'll receive timely and reliable notifications about market trends, potential trading opportunities, and expert analyses. We understand the importance of accuracy in trading, and our bot aims to provide you with the best possible guidance.",
      heading: "W.M Telegram BOT ",
    },
    {
      img: analysis,
      logo: analysisLogo,
      id: "analysis",
      desc: "Analysis Page is an innovative platform that enables experts to share their market analysis through images, allowing trainees to interact and comment on these analyses in various ways. This platform serves as a unique space for exchanging knowledge and expertise in the field of trading.Through Analysis Page, experts share analytical images that illustrate their forecasts and insights regarding market movements and various financial assets. Trainees can browse through these images, read accompanying analyses, and benefit from the experience and professional thinking of the experts.What sets Analysis Page apart is the ability for direct interaction with these images. Trainees can provide written comments, pose questions, seek clarification, and exchange opinions with both experts and other trainees. Additionally, trainees can also share their own personal analyses through images, allowing them to express their own views and perspectives on the market and its movements.Through this interactive and educational environment, trainees can gain valuable knowledge and experience from experts and like-minded individuals. Everyone is encouraged to participate and engage, contributing to the expansion of knowledge, the development of trading skills, and strengthening our collaborative teamwork.",
      heading: "Analysis Page",
    },
  ];
  return (
    <div>
      <div
        className="container products"
        style={{ padding: " 40px 0", height: "330px" }}
      >
        <Swiper
          autoplay={{
            pauseOnMouseEnter: true,
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            700: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          effect={"coverflow"}
          loop={true}
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
          {products.map((product) => (
            <SwiperSlide
              onClick={() => {
                document
                  .querySelector(`#${product.id}`)
                  .scrollIntoView({ behavior: "smooth" });
              }}
              style={{ cursor: "pointer" }}
            >
              <div className="card-swap2">
                <img src={product.logo} alt="" className="imagess" />
                <div>{product.heading}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <img src={img} className="secBanar" style={{ width: "100%" }} alt="" />

      <div>
        {products.map((product, index) => (
          <div
            id={product.id}
            className={`content-container row align-items-center ${
              index % 2 ? "flex-row-reverse" : ""
            } `}
            style={{ padding: "25px 0" }}
          >
            <div
              className="col-sm p-0"
              data-aos={`${index % 2 ? "fade-left" : "fade-right"}`}
              style={{ display: "flex" }}
              data-aos-duration="1000"
            >
              <img
                src={product.img}
                style={{ maxWidth: "100%", margin: "0 auto" }}
                alt=""
              />
            </div>
            <div
              className="col-sm p-0 pl-sm-5"
              data-aos={`${index % 2 ? "fade-right" : "fade-left"}`}
              data-aos-duration="1000"
            >
              <h2 className="my-4 text-center text-sm-left heading-2">
                {product.heading}
              </h2>
              <div className="border-bottom mx-auto mx-sm-3"></div>
              <p>{product.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
