import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../App";
import "./product.css";
import { toast } from "react-toastify";
const MainComponent = () => {
  const { route, token, setNum } = useContext(AppContext);
  const [product, setProduct] = useState({});
  const [images, setImages] = useState([]);
  const [imageIndex, setImageIndex] = useState(0);
  const id = useParams().id;
  useEffect(() => {
    if (token) {
      fetch(`${route}/store/products/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setProduct(data.data);
          if (data.data) {
            console.log([data.data?.imageCover, ...data.data?.images]);
            setImages([data.data?.imageCover, ...data.data?.images]);
          }
        });
    }
  }, [token]);
  const handelAction = function () {
    if (product.isFree) {
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
  return (
    <div class="details container py-4">
      <div class="row py-5">
        <div class="col-lg-5">
          <img src={images[imageIndex]} className="w-100" alt="" />
          <div className="miniImages">
            {images?.map((image, index) => (
              <img
                src={image}
                onClick={() => setImageIndex(index)}
                className={index === imageIndex ? "active" : ""}
                alt=""
              />
            ))}
          </div>
        </div>
        <div class="col-lg-7 product-info">
          <div class="bg-white p-4 t-ddark">
            <h2>{product?.title}</h2>

            <h4 class="price t-ddark py-4 m-0">
              {product.isFree ? (
                "Free"
              ) : (
                <>
                  <span style={{ color: "red", marginRight: "15px" }}>
                    <del>${product.price}</del>
                  </span>
                  <span>${product.priceAfterDiscount}</span>
                </>
              )}
            </h4>
            <p class="m-0">{product.description}</p>
            <div class="btn btn-warning" onClick={handelAction}>
              {product.isFree ? <>Get it for free</> : <>Add To Cart</>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
