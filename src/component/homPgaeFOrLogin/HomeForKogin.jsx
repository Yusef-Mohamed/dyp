import React, { useContext, useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import logo from "../../assets/logs.png";
import "./hflogin.css";
import { AppContext } from "../../App";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import PostCard from "./PostCard";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Comments</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.comments.map((comment) => {
          return (
            <div className="comment" key={comment._id}>
              {/* <div className="user">{comment.user.name} </div>  */}
              <div className="cont">{comment.content}</div>

              {comment.image ? <img src={comment.image} /> : null}
            </div>
          );
        })}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const HomeForKogin = () => {
  const { route } = useContext(AppContext);
  const [posts, setPosts] = useState([]);
  const [ads, setAds] = useState([]);

  useEffect(() => {
    let token = sessionStorage.getItem("token");
    fetch(`${route}/analytic/posts/public`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setPosts(data.data));
    fetch(`${route}/advertisements`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setAds(data.data);
      });
  }, []);
  return (
    <div className="home-for-login">
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

      <div className="second">
        <div className="left">
          {posts.map((post) => {
            return <PostCard post={post} key={post._id} />;
          })}
        </div>
        <div className="right">
          <h2>Ads</h2>
          {ads.map((ad) => {
            return (
              <div className="add" key={ad._id}>
                <div className="tit">{ad.title}</div>

                <a href={ad.link} className="ad">
                  <img src={ad.image} alt="" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeForKogin;
