import axios from "axios";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { AppContext } from "../../App";
import { AiFillStar } from "react-icons/ai";

function Reviews({ product }) {
  const [rating, setRating] = useState(1);
  const [text, setText] = useState("");
  const [myRewId, setMyRevId] = useState(0);
  const [edit, setEdit] = useState(false);
  const { route, setRefresh, setLoader } = useContext(AppContext);
  const handleRatingClick = (value) => {
    setRating(value);
  };
  const renderStars = () => {
    return Array.from({ length: 5 }).map((_, index) => (
      <AiFillStar
        size={25}
        key={index}
        onClick={() => handleRatingClick(index + 1)}
        style={{ cursor: "pointer" }}
        color={index + 1 <= rating ? "gold" : "black"}
      />
    ));
  };

  let handel = async function () {
    setLoader(true);
    if (edit) {
      await axios
        .put(
          `${route}/store/reviews/${myRewId}`,
          {
            title: text,
            ratings: rating,
            product: product._id,
          },
          {
            headers: {
              Authorization: "Bearer " + sessionStorage.getItem("token"),
            },
          }
        )
        .then((res) => {
          if (res.status === 200) {
            toast.success("Review has been updated");
            setRefresh((prev) => prev + 1);
            setText("");
            setRating(1);
          }
        })
        .catch((err) => {
          if (err.error.statusCode === 403) {
            toast.error("Admin cannot add review");
          }
        });
    } else {
      await axios
        .post(
          `${route}/store/reviews`,
          {
            title: text,
            ratings: rating,
            product: product._id,
          },
          {
            headers: {
              Authorization: "Bearer " + sessionStorage.getItem("token"),
            },
          }
        )
        .then((res) => {
          if (res.status === 201) {
            toast.success("Review has been added");
            setRefresh((prev) => prev + 1);
            setText("");
            setRating(1);
          }
        })
        .catch((err) => {
          if (err?.error?.statusCode === 403) {
            toast.error("Admin cannot add review");
          }
          if (err?.response?.status === 400) {
            toast.error("You already have a review ");
          }
        });
    }
    setLoader(false);
  };
  const deletee = function (id) {
    setLoader(true);

    axios
      .delete(`${route}/store/reviews/${id}`, {
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("token"),
        },
      })
      .then((res) => {
        if (res.status === 200) {
          toast.success("Review has been deleted");
          setRefresh((prev) => prev + 1);
          setEdit(false);
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setLoader(false));
  };
  return (
    <div>
      <h2 className="heading mb-8 w-1/2 ">
        <span className="text-2xl">Reviews</span>
      </h2>
      <div className="d-lg-flex bg-white">
        <div className="reviews-box">
          <h2 className="line-clamp-2 text-xl  mb-4 border-b border-b-dark">
            {`${product?.reviews?.length} review for "${product?.title}"`}
          </h2>
          <div style={{ maxHeight: "500px", overflowY: "auto" }}>
            {product?.reviews?.length === 0 && (
              <div className=" text-center my-5">There is no reviews</div>
            )}
            {product?.reviews?.map((e) => {
              return (
                <div key={e._id} className="p-4 border">
                  <div className="flex justify-between">
                    <h4 className="mb-4">
                      Review from {e?.user?.name}{" "}
                      {e?.user?._id == sessionStorage.getItem("id") && "(You)"}
                    </h4>
                    {e?.user?._id == sessionStorage.getItem("id") && (
                      <div
                        style={{ width: "fit-Content", margin: "10px auto" }}
                      >
                        <button
                          className="btn btn-success mx-2"
                          onClick={(ele) => {
                            setEdit(true);
                            setText(e.title);
                            setRating(e.ratings);
                            setMyRevId(e._id);
                          }}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-danger"
                          onClick={(event) => deletee(e._id)}
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                  <div>
                    <>
                      {[...Array(Math.floor(e.ratings))].map((_, index) => (
                        <AiFillStar
                          size={25}
                          key={index}
                          style={{ cursor: "pointer" }}
                          color="gold"
                        />
                      ))}
                      {[...Array(5 - Math.ceil(e?.ratings))].map((_, index) => (
                        <AiFillStar
                          size={25}
                          key={index}
                          style={{ cursor: "pointer" }}
                          color="black"
                        />
                      ))}
                    </>
                  </div>
                  <p className="my-4">{e?.title}</p>
                  <div className="text-right p-2">
                    {e.updatedAt.split("T")[0]}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="add-review">
          <h2>{edit == true ? "Edit" : "Add"} Your review</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handel();
            }}
          >
            <div className="review-maker">
              <h4>Rating:</h4>
              <div className="mb-2">{renderStars()}</div>
              <span className="mx-2">{rating}</span>
            </div>
            <textarea
              onChange={(e) => setText(e.target.value)}
              required
              value={text}
              rows="10"
              minLength={16}
              placeholder="Leaver your review"
              className="w-100 p-4 border"
            ></textarea>
            <button className="btn btn-warning d-block mt-4 w-50 py-2 mx-auto">
              {edit === true ? "Edit" : "Add"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
