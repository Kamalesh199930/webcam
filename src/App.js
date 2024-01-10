import React, { useEffect, useRef } from'react'

import 'bootstrap/dist/css/bootstrap.min.css'

function App(){

//using two hooks

  let videoRef = useRef(null)
  let photoRef = useRef(null)

// get access to use webcamera

const getUserCamera =()=>{

  //whenever want a webcam access 
  
  navigator.mediaDevices.getUserMedia({
    video:true

  })
  .then((stream)=>{
    //attach the stream to the video tag
    let video = videoRef.current

    video.srcObject = stream

    video.play()

  })
  .catch((error) => {
    console.error(error)
  })

  
}
//to take picture of User

const takePicture  =() =>{

  //initialize with and height

  let width =500
  let height = width / (16/9)
  let photo = photoRef.current
  let video =  videoRef.current

  // set the photo width and height
  photo.width = width
  photo.height = height
  let ctx = photo.getContext('2d')
  ctx.drawImage(video,0,0,photo.width,photo.height)

}

//clear out the image from the screen
const clearImage =()=>{
  let photo=photoRef.current
  let ctx=photo.getContext('2d')
  ctx.clearRect(0,0,photo.width,photo.height)
}

useEffect(()=>{
  getUserCamera()

},[videoRef])




  return (
    <div className='container'>
      <h1 className='text-center'>Selfie App in React.js</h1>
       <video className='container' ref={videoRef}></video>
       <button onClick={takePicture} className='btn btn-danger '>Click Photo</button>
       <canvas className='container'ref={photoRef}></canvas>
       <button onClick={clearImage}  className='btn btn-primary '>Clear Image</button>
       
    </div>
  )
  }
  
  

export default App