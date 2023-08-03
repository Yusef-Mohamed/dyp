import React, { useContext, useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import logo from "../../assets/logs.png";
import './hflogin.css'
import { AppContext } from '../../App';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function MyVerticallyCenteredModal(props) {

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Comments
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>       
        
         {props.comments.map((comment)=>{
      return(
       <div className="comment" key={comment._id}>
         {/* <div className="user">{comment.user.name} </div>  */}
        <div className="cont">{comment.content}</div>

        {comment.image ? <img src={comment.image} /> : null}
        
      </div>
    
      )
     })} 
 

     
    
 
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const HomeForKogin = () => {
  const {route ,token ,setLoader,messageError}=useContext(AppContext)
  const [posts,setPosts]=useState([])
  const [ads,setAds]=useState([])
  const [comments,setComments]=useState([])
  const [commentContentt,setCommentContent]=useState("")
  const [modalShow, setModalShow] = React.useState(false);
  const [postId,setPostId]=useState("")
  const [profileImg, setProfileImg] = useState(null);

const handleCommentContent =(e ,id)=>{
  setPostId(id)
  setCommentContent(e.target.value)
}

const handleImageChange = (event) => {
  const file = event.target.files[0];
  if (file && file.type.startsWith("image/")) {
    setProfileImg(file);
  } else {
    setProfileImg(null);
  }
};

const getComments =(id)=>{
  fetch(`${route}/analytic/posts/${id}/postComments`,{
    headers:{
      "Authorization" : `Bearer ${token}`
    }
  })
  .then(res=>res.json())
  .then(data=>{
    setComments(data.data)
    console.log(data.data)
 
  })

  setModalShow(true)
 
}
const createComment =(id)=>{
  setLoader(true)
  console.log(id)
  const formData = new FormData();
  formData.append("post", id);
    formData.append("content", commentContentt);
    if(profileImg){
      formData.append("image", profileImg, profileImg.name);
    }
  fetch(`${route}/analytic/postComments`,{
    method:"POST" ,
    headers:{
     
      "Authorization" : `Bearer ${token}`
    },
    body:formData
  })
  .then(res=>res.json())
  .then(data=>{

  if(data.data){
    setCommentContent("")
    setLoader(false)
    messageError("Comment Added")
  }
  else{
    setLoader(false)
    messageError("Comment not shared")
  }
  })
  
}

  useEffect(()=>{
    let token =sessionStorage.getItem("token")
fetch(`${route}/analytic/posts/public`,{
  headers:{
    "Authorization" : `Bearer ${token}`
  }
})
.then(res=>res.json())
.then(data=>setPosts(data.data))
fetch(`${route}/advertisements`,{
  headers:{
    "Authorization" : `Bearer ${token}`
  }
})
.then(res=>res.json())
.then(data=>{setAds(data.data)
})
  },[])
  return (
  <div className="home-for-login">
  
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={logo}
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item interval={700}>
        <img
          className="d-block w-100"
          src={logo}
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item interval={700}>
        <img
          className="d-block w-100"
          src={logo}
          alt="Third slide"
        />
   
      </Carousel.Item>
    </Carousel>

    <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        comments={comments}
      />
    <div className="second">
      <div className="left">
        {posts.map((post)=>{
          return(
            <div className="post" key={post._id}>
              <div className="shared">shared by : {post.user.name}</div>
              <div className="cont">{post.content}</div>
              {post.image ? <img src={post.image} /> : null}
              <Button variant="primary" onClick={()=>getComments(post._id)}>
        Comments
      </Button>
              <label htmlFor="">
                <input type="text" placeholder='Add Comment' value={ postId === post._id ? commentContentt : ""} 
                onChange={ (e)=> handleCommentContent(e,post._id )} /> 
                <div class="file-input-wrapper">
  <input type="file" id="file-input" onChange={handleImageChange} />
  <label for="file-input" class="custom-file-button">upload image</label>
</div>
                 <button onClick={()=>createComment(post._id)}>share</button></label>
            </div>
          )
        })}
      </div>
      <div className="right">
        <h2>Ads</h2>
      {ads.map((ad)=>{
        return(
          <div className="add" key={ad._id}>
              <div className="tit">
                {ad.title}
              </div>

          <a href={ad.link} className="ad" >
            <img src={ad.image} alt="" />
          </a>
          </div>
        )
      })}
      </div>
    </div>
  </div>
  )
}

export default HomeForKogin
