import React, { useContext, useEffect, useState } from "react";
import "./profile.css";
import profile from "../../assets/profile.png";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";

const Profile = () => {
  const [packs, setPacks] = useState([]);
  const [paid, setPaid] = useState([]);
  const { route } = useContext(AppContext);
  const [sub, setSub] = useState(true);

  const downloadBook = (url) => {
    window.location.href = url;
  };

  useEffect(() => {
    fetch(`${route}/education/packages/myPackages`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message == "you are not subscribed to any package") {
          setSub(false);
        }
        setPacks(data.packages);
      });

    fetch(`${route}/store/products/MyProducts`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status == "fail") {
          setSub(false);
        }
        setPaid(data.data);
      });
  }, []);
  return (
    <div className="profile">
      <div className="top">
        <div className="img">
          {sessionStorage.getItem("profile") ? (
            <img src={sessionStorage.getItem("profile")} />
          ) : (
            <img src={profile} />
          )}
        </div>
        <div className="links">
          <Link to="edit">edit profile</Link>
          <Link to="password">change password</Link>
        </div>
        <div className="info">
          <h3>{sessionStorage.getItem("userName")}</h3>
          <div> {sessionStorage.getItem("role")}</div>
          <div> {sessionStorage.getItem("email")}</div>
          <div> {sessionStorage.getItem("phone")}</div>
        </div>
      </div>
      <h3>My Packages</h3>
      {sub ? (
        <div className="packs">
          {packs.map((pack) => {
            return (
              <div className="pack" key={pack._id}>
                <img src={pack.image} alt="" />
                <div>{pack.title}</div>
              </div>
            );
          })}
        </div>
      ) : null}
      {sub ? (
        <div className="my-prods">
          <h3>My Products</h3>
          <div className="paid-products">
            {paid.map((pro, index) => {
              return (
                <div className="pr" key={index}>
                  <img src={pro.imageCover} alt="" />
                  <div className="title">{pro.title}</div>

                  <button
                    onClick={() => downloadBook(pro.pdf[0])}
                    class="cssbuttons-io-button"
                  >
                    <svg
                      height="24"
                      width="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0h24v24H0z" fill="none"></path>
                      <path
                        d="M1 14.5a6.496 6.496 0 0 1 3.064-5.519 8.001 8.001 0 0 1 15.872 0 6.5 6.5 0 0 1-2.936 12L7 21c-3.356-.274-6-3.078-6-6.5zm15.848 4.487a4.5 4.5 0 0 0 2.03-8.309l-.807-.503-.12-.942a6.001 6.001 0 0 0-11.903 0l-.12.942-.805.503a4.5 4.5 0 0 0 2.029 8.309l.173.013h9.35l.173-.013zM13 12h3l-4 5-4-5h3V8h2v4z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <span>Download</span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Profile;
