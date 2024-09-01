import React, { useEffect, useState } from 'react'
import {useClickedCart ,useClickedX} from "../context/ZustendStore"
import { Chat, Notification } from '../components'
const Test = () => {
  const {iscliked ,setClicked ,isClikedCart,setClickedCart} = useClickedCart((state)=>({
    iscliked:state.iscliked,
    setClicked:state.setClicked,
    isClikedCart:state.isClikedCart,
    setClickedCart:state.setClickedCart
  }))
  const {setClickedX ,X} = useClickedX((state)=>({
    setClickedX:state.setClickedX,
    X:state.X
  }))
  // useEffect (()=>{
  //   const handleResize =()=>setScre
  // })
  console.log(`hello from test page`)
  // console.log(ini )
  'text-yellow-400 bg-green-700 text-center hover:bg-black hover:text-white'
  return (
    <div>
      <button type='botton' className ="border-2 rounded-2xl w-24 text-white bg-black" onClick={() => setClicked((previscliked)=>!previscliked)}>click me </button>
      <button  className={!iscliked ?` text-yellow-400 bg-green-700 text-center hover:bg-black hover:text-white` :`text-blue-700 bg-teal-500`}>hello from ecommerce page</button>
      <h1 className='text-green-700 text-xl'> hello world</h1>
      <div className='flex justify-center items-center flex-col gap-3'>
      <button onClick={ () => setClickedCart((previsClickedCart)=>!previsClickedCart)} className={!isClikedCart?`text-teal-500 bg-blue-900 w-14 h-4 rounded-lg flex justify-center items-center `: `text-red-700 bg-black  w-14  rounded-lg h-4 rounded-lg flex justify-center items-center  `}>Cart</button>
      <button  onClick={()=>setClickedX('chat')}>chat</button>
      <button  onClick={()=>setClickedX('notification')}>notification</button>
      <button>userProfile</button>
      </div>

      {!isClikedCart ?botton("hello from the cart component"):<h1>hello from me the head of table</h1>}
      {/* {isClicked ? botton(hello) :<h1>not secces </h1>} */}
      <div className='flex justify-center items-center flex-col gap-4'>
        {X.chat && <Chat/> }
        {X.notification && <Notification/> }
      </div>
    </div>
  )
}
const botton = (key) =>{
  return (
    <div className="text-white bg-black ">
      {key}
    </div>
  )
}
export default Test