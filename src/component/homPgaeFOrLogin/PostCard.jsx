import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../App";
import TimeAgo from "timeago-react";
import { Button } from "react-bootstrap";
import { fa0 } from "@fortawesome/free-solid-svg-icons";
import { AiFillHeart, AiFillLike, AiOutlineLike } from "react-icons/ai";
import { FaRegLaughBeam } from "react-icons/fa";

const PostCard = ({ post }) => {
  const { token, setLoader, messageError, route } = useContext(AppContext);
  const [comments, setComments] = useState([]);
  const [commentContentt, setCommentContent] = useState("");
  const [reactsNum, setReactsNum] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [profileImg, setProfileImg] = useState(null);
  const [myReact, setMyReact] = useState("");
  const myName = window.sessionStorage.getItem("userName");
  const [refresh, setRefresh] = useState(0);
  useEffect(() => {
    fetch(`${route}/analytic/posts/${post._id}/postComments`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setComments(data.data);
      });
    fetch(`${route}/analytic/posts/${post._id}/postReacts`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setReactsNum(data.data);
        console.log(data.data);
      });
  }, [post._id, route, refresh]);
  const createComment = (e) => {
    e.preventDefault();
    setLoader(true);
    console.log(post._id);
    const formData = new FormData();
    formData.append("post", post._id);
    formData.append("content", commentContentt);
    if (profileImg) {
      formData.append("image", profileImg, profileImg.name);
    }
    fetch(`${route}/analytic/postComments`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.data) {
          setCommentContent("");
          setLoader(false);
          messageError("Comment Added");
          setRefresh((prev) => prev + 1);
        } else {
          setLoader(false);
          messageError("Comment not shared");
        }
        console.log(data);
      })
      .catch((err) => console.log(err));
  };
  const CreateReact = (type) => {
    setLoader(true);
    fetch(`${route}/analytic/postReacts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        postId: post._id,
        type: type,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setLoader(false);
          messageError("React Added");
          setRefresh((prev) => prev + 1);
        } else {
          setLoader(false);
          messageError("React not shared");
        }
      })
      .catch((err) => console.log(err));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setProfileImg(file);
    } else {
      setProfileImg(null);
    }
  };
  useEffect(() => {
    if (reactsNum.length != 0) {
      setMyReact(
        reactsNum.find((react) => react?.userId?.name === myName)?.type
      );
    }
  }, [reactsNum]);
  return (
    <div className="post">
      <div className="post-head">
        <div className="details">
          <div>
            <div>{post.user.name}</div>
            <div className="date">
              <TimeAgo datetime={post.createdAt} />
            </div>
          </div>
        </div>
        <div className="cont">{post.content}</div>
      </div>

      {post.image ? (
        <img src={post.image} className="mainImg" alt="postLogo" />
      ) : null}
      <div className="comments-emo">
        <div>{reactsNum.length} Reacts</div>
        <div>{comments.length} comments</div>
      </div>
      <div className="reacts">
        <div
          onClick={() => CreateReact("like")}
          className={`${myReact === "like" ? "active" : ""}`}
        >
          <AiOutlineLike size={28} />
        </div>
        <div
          onClick={() => CreateReact("love")}
          className={`${myReact === "love" ? "active" : ""}`}
        >
          <AiFillHeart size={28} />
        </div>
        <div
          onClick={() => CreateReact("haha")}
          className={`${myReact === "haha" ? "active" : ""}`}
        >
          <FaRegLaughBeam size={28} />
        </div>
      </div>
      <div className="post-foot">
        <form
          onSubmit={(e) => {
            createComment(e);
          }}
        >
          <input
            type="text"
            placeholder="Add Comment"
            onChange={(e) => setCommentContent(e.target.value)}
          />
          <div class="file-input-wrapper">
            <input type="file" id="file-input" onChange={handleImageChange} />
            <label for="file-input" class="custom-file-button">
              upload image
            </label>
          </div>
          <button onClick={() => createComment(post._id)}>share</button>
        </form>
        <div className="commentBox">
          {showAll ? (
            <>
              {comments.map((comment) => (
                <div className="comment">
                  <div className="content">{comment.content}</div>
                  {comment.image && (
                    <img className="imgg" src={comment.image} alt="" />
                  )}
                  <div className="date">
                    <TimeAgo datetime={comment.createdAt} />
                  </div>
                </div>
              ))}
              <div className="commentControl" onClick={() => setShowAll(false)}>
                Show Less
              </div>
            </>
          ) : (
            <>
              {comments.slice(0, 2).map((comment) => (
                <div className="comment">
                  <div className="content">{comment.content}</div>
                  {comment.image && (
                    <img className="imgg" src={comment.image} alt="" />
                  )}
                  <div className="date">
                    <TimeAgo datetime={comment.createdAt} />
                  </div>
                </div>
              ))}
              {comments.length > 3 && (
                <div
                  className="commentControl"
                  onClick={() => setShowAll(true)}
                >
                  Show More
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostCard;
