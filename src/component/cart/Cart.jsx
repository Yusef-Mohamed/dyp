import React, { useContext ,useEffect, useState} from 'react'
import './cart.css'
import { AppContext } from '../../App'
const Cart = () => {
    const {route ,token ,setNum ,setLoader}=useContext(AppContext)
    const [products,setProducts]=useState([])
    const [total,setTotal]=useState(0)
    const [refresh ,setRefresh]=useState(false)
    const [copon ,setCopon]=useState("")
    const [cartId,setCartId]=useState("")

    const handleCopon =(e)=>{
        setCopon(e.target.value)
        fetch(`${route}/store/cart/applaycoupon`,{
            method:"POST",
            headers:{
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                coupon : copon
            })
        })
    }

    const deleteFromCart =(id)=>{

        fetch(`${route}/store/cart/${id}`,{
          method:"DELETE",
          headers:{
              'Authorization': `Bearer ${token}`
             
          }
       
      })
      .then(res=>res.json())
      .then(data=>{
        
   
        setNum(data.numberOfCartItems)
        setRefresh(!refresh)
      })
      }

      const pay =()=>{
        setLoader(true)
        fetch(`${route}/store/orders/checkout-session/${cartId}`,{
     
            headers:{
                'Authorization': `Bearer ${token}`,
        
            },
     
        })
        .then(res=>res.json())
        .then(data=>{
            window.location.href = data.session.url;
            setLoader(false)

        })
      }

    useEffect(()=>{
     


       fetch(`${route}/store/cart`,
       {
        headers:{
          'Authorization': `Bearer ${sessionStorage.getItem("token")}`
      }
       })
       .then(res=>res.json())
       .then(data=>{
        setProducts(data.data.cartItems)
      console.log(data)
        setTotal(data.data.totalCartprice)
        setCartId(data.data._id)
   
       })
      
  },[refresh])
  return (
   <div className="cart">
    <h2>My Cart</h2>
    <div className="producs">
{products.map((pro ,index)=>{
    return(
        <div className="pr" key={index}>
            <img src={pro.product.imageCover} alt="" />
            <div className="title">{pro.product.title}</div>
            <div className="price">${pro.product.price}</div>
            <span onClick={()=>deleteFromCart(pro._id)}>Delete</span>
        </div>
    )
})}
    </div>
    <div className="check">
        <h4>Complete The Process</h4>
        <div>Total Price : ${total}</div>
        <label htmlFor="">
            <input value={copon} type="text" onChange={handleCopon} placeholder='Discount Code' />
            <button onClick={pay}>Go To Pay</button>
        </label>
    </div>
   </div>
  )
}

export default Cart
