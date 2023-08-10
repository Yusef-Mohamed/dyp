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
      desc: "هو المكان المثالي لرواد الأعمال الطموحين الذين يسعون لتعزيز معرفتهم وتوسيع شبكاتهم الريادية في مجال التدوال و الاستثمار.  نقدم  من خلال هذه المنصة بيئة تعليمية وموارد متخصصة تساعد رواد الأعمال على النمو والتطور في رحلتهم.  بدءًا من تطوير الأفكار وإنشاء المحتوى وصولاً إلى استراتيجيات النمو والتسويق. و ستتاح لك الفرصة للتواصل والتعاون مع أشخاص مماثلين لديهم نفس الطموح والتفكير الريادي.",
      heading: "منصة %1",
    },
    {
      img: sk,
      logo: skLogo,
      id: "sk",
      desc: "هو نظام واستراتيجية متكاملة يعتمد على فهم المناطق الذهبية وتوقع تحركات السوق المستقبلية. تعتبر من أقوى الاستراتيجيات نظرا لدقتها في تحديد الأهداف",
      heading: "SK System",
    },
    {
      img: live,
      logo: liveLogo,
      id: "live",
      desc: "مع هذه المنصة ستكون على اتصال مباشر مع نخبة من خبراء السوق المالي وتتلقى توجيهات حية تساعدك على اتخاذ قرارات استثمارية مدروسة وذكية . ستتمكن من الاستفادة من تحليلاتهم العميقة ونصائحهم القيمة بشكل مباشر.",
      heading: "Study Live منصة",
    },
    {
      img: school,
      logo: schoolLogo,
      id: "shcool",
      desc: "هي المكان الذي تجد فيه جميع الدروس التعليمية المسجلة التي تحتاج إليها، بدءًا من الأساسيات وصولًا إلى المستوى المتقدم والاحترافي. نحن نوفر لك واحدة من أكبر مكتبات التدوال التعليمية عبر الإنترنت، حيث يمكنك الوصول إلى مجموعة شاملة من المواد التعليمية بسهولة ومرونة. ستجد فيها مقاطع فيديو مسجلة ودروسًا تعليمية تغطي مختلف التحاليل و الانظمة كما أن المحتوى المسجل يتيح لك الاستفادة منه بالتكرار وفقًا لوتيرتك الخاصة.",
      heading: `"School"  منصة `,
    },
    {
      img: telegram,
      logo: telegramLogo,
      id: "telegram",
      desc: "هو  بوت تليجرام يوفر وصولًا إلى جميع قنوات التوصيات الرائدة التي تقدمها مؤسستنا الرائعة. تتميز هذه القنوات بدقة أهدافها ونتائجها المثيرة. فسواء كنت مبتدئًا أو متداولا ذو خبرة، ستوفر قنوات التوصيات هذه والتي تشتهر بدقتها وسجلها المثبت، رؤى قيمة وتوصيات لمساعدتك في تداولات مستنيرة. ستتلقى منها إشعارات في الوقت المناسب عن اتجاهات السوق والفرص التداولية المحتملة والتحليلات الخبيرة.  و لاننا ندرك أهمية الدقة عند التداول صُممت هذه الميزة خصيصاً لتوفير الراحة والكفاءة في تجربتك معنا.",
      heading: "W.M BOT",
    },
    {
      img: analysis,
      logo: analysisLogo,
      id: "analysis",
      desc: " هي منصة مبتكرة يقوم الخبراء من خلالها بمشاركة صور تحليلية توضح توقعاتهم ورؤاهم حول حركة السوق. يمكن للمتدربين تصفح هذه الصور وقراءة التحليلات المرافقة، والاستفادة من الخبرة والتفكير الاحترافي للخبراء كما تتيح للمتدربين التفاعل المباشر والتعليق على الصور بطرق مختلفة.  بالإضافة إلى ذلك، يمكن للمتدربين أيضًا مشاركة تحليلاتهم الشخصية عبر الصور، مما يسمح لهم بالتعبير عن آرائهم ورؤاهم الخاصة ايظاً بذلك تعد هذه المنصة مكانًا فريدًا لتبادل المعرفة والخبرات في مجال التداول. ومن خلال هذه البيئة التفاعلية والتعليمية، فتتيح للمتدربين اكتساب المعرفة والخبرات القيمة من الخبراء والأفراد ذوي الاهتمام المشترك.",
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
