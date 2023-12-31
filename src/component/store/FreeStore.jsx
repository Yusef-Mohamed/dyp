import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { AppContext } from "../../App";
import Loader from "../loader/Loader";
import Carousel from "react-bootstrap/Carousel";
import imagePlaceholder from "../../assets/no-image-svgrepo-com.svg";
import one from "../../assets/panars/1-15.webp";
import two from "../../assets/panars/1-16.webp";
import three from "../../assets/panars/1-17.webp";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AiFillStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
const FreeStore = () => {
  const { route, token, setNum } = useContext(AppContext);
  const [products, setProducts] = useState([]);
  const [cats, setCats] = useState([]);
  const [load, setLoad] = useState(false);

  const getProducts = (id) => {
    setLoad(true);
    fetch(`${route}/store/products?category=${id}&isFree=true`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.data);
        setLoad(false);
      });
  };

  const addToCart = (id, isFree) => {
    if (isFree) {
      fetch(`${route}/store/products/getFree/${id}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) =>
          data.status === "success"
            ? toast.success("The product in your profile now")
            : ""
        );
    } else {
      fetch(`${route}/store/cart`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId: id,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          setNum(data.numberOfCartItems);
          toast.success("The product in your cart now");
        });
    }
  };

  const all = () => {
    setLoad(true);
    fetch(`${route}/store/products`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setLoad(false);
        setProducts(data.data);
      });
  };

  useEffect(() => {
    let token = sessionStorage.getItem("token");
    fetch(`${route}/store/products?isFree=true`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.data);
        console.log(data.data);
      });
    fetch(`${route}/store/categories`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCats(data.data);
      });
  }, []);
  return (
    <div className="store">
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
      <div className="cats">
        <div class="wrapper">
          <div class="option" onClick={all}>
            <input class="input" type="radio" name="btn" value="All" />
            <div class="btn">
              <span class="span">All</span>
            </div>
          </div>
          {cats.map((cat) => {
            return (
              <div class="option" onClick={() => getProducts(cat._id)}>
                <input
                  class="input"
                  type="radio"
                  name="btn"
                  value={cat.title}
                />
                <div class="btn">
                  <span class="span">{cat.title}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className=" row">
        {load ? <Loader /> : null}
        {products.map((pro) => {
          return (
            <div key={pro._id} className=" col-6 col-md-4 col-lg-3 w-100">
              <div class="card ">
                <div class="card-img">
                  <Link to={`product/${pro._id}`}>
                    <img
                      src={pro.imageCover}
                      onError={(e) => {
                        e.target.src = imagePlaceholder;
                      }}
                      alt=""
                    />{" "}
                  </Link>
                </div>
                <div class="card-info mb-4">
                  <Link to={`product/${pro._id}`}>
                    <p class="text-title">{pro.title}</p>
                  </Link>

                  <div className=" text-center ">
                    {pro?.ratingsQuantity === 0 && "No Rating "}
                    {pro?.ratingsAverage && (
                      <>
                        {[...Array(Math.floor(pro?.ratingsAverage))].map(
                          (_, index) => (
                            <AiFillStar size={25} key={index} color="gold" />
                          )
                        )}
                        {pro?.ratingsAverage % 1 !== 0 && (
                          <BsStarHalf size={25} color="gold" />
                        )}
                        {[...Array(5 - Math.ceil(pro?.ratingsAverage))].map(
                          (_, index) => (
                            <AiFillStar size={25} key={index} />
                          )
                        )}
                        ({pro?.ratingsQuantity})
                      </>
                    )}
                  </div>
                </div>
                <div class="card-footer">
                  <span class="text-title hoverGold">
                    {pro.isFree ? <>Free</> : <>${pro.price}</>}
                  </span>
                  <div
                    class="card-button hoverGold"
                    onClick={() => addToCart(pro._id, pro.isFree)}
                  >
                    {pro.isFree ? (
                      <>Add it for free</>
                    ) : (
                      <>
                        <svg class="svg-icon" viewBox="0 0 20 20">
                          <path d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"></path>
                          <path d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"></path>
                          <path d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"></path>
                        </svg>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FreeStore;
