
import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../App';
import Button from 'react-bootstrap/Button';
import './analytic.css'
import Modal from 'react-bootstrap/Modal';

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
            <div className="user">{comment.user.name} :</div>
            <div className="cont">{comment.content}</div>
            
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

const Analytic = () => {
    const {route ,token ,setLoader,messageError}=useContext(AppContext)
    const [posts,setPosts]=useState([])
    const [ads,setAds]=useState([])
    const [comments,setComments]=useState([])
    const [commentContentt,setCommentContent]=useState("")
    const [modalShow, setModalShow] = React.useState(false);
  
  const handleCommentContent =(e)=>{
    setCommentContent(e.target.value)
  }
  
  const getComments =(id)=>{
    fetch(`${route}/analytic/posts/${id}/postComments`,{
      headers:{
        "Authorization" : `Bearer ${token}`
      }
    })
    .then(res=>res.json())
    .then(data=>{setComments(data.data)
    console.log(data.data)
    })
  
    setModalShow(true)
   
  }
  const createComment =(id)=>{
    setLoader(true)
    fetch(`${route}/analytic/postComments`,{
      method:"POST" ,
      headers:{
        'Content-Type': 'application/json' ,
        "Authorization" : `Bearer ${token}`
      },
      body:JSON.stringify({
        post : id ,
        content : commentContentt
      })
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
    fetch(`${route}/analytic/posts?sort=-createdAt`,{
      headers:{
        "Authorization" : `Bearer ${token}`
      }
    })
    .then(res=>res.json())
    .then(data=>{
       
        setPosts(data.data) })

      },[])
  return (
<div className="analytec">
<MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        comments={comments}
      />
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
                <input type="text" placeholder='Add Comment' value={commentContentt} onChange={handleCommentContent} />  <button onClick={()=>createComment(post._id)}>share</button></label>
            </div>
          )
        })}
</div>
  )
}

export default Analytic
