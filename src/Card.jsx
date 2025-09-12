import React from 'react'




console.log(5)
const Card = ({title, author, image, date, description, readmore, views, comments, likes}) => {
  
  // const title = "A random title maybe"
  return (
    <div className='border-[1px] justify-between border-solid border-gray-400 rounded shadow-md flex flex-col'>
      <div className="img object-cover w-full">
        {image ? <img src={image}/> : <p>No image is available</p>} 
      </div>
      <div className="body p-5 py-6">

        <div className="profile flex items-center">
          <div className="img">
            {image ? <img src={image} className='w-9 h-9 rounded-[100%]'/> : <p>No image is available</p>}
          </div>

          <div className="minit ml-2 flex flex-col justify-start items-start">
            <h2 className='font-bold'>{author}</h2>
            <p className='text-[10px]'>{date}</p>
          </div>
        </div>
        
        <div className="title my-4 text-sm font-semibold">
          {title}
        </div>
        <div className="body mb-3">
          {description}
        </div>
        <div className="more text-lg font-bold flex items-center hover:cursor-pointer">
          <a href={readmore} className='text-blue-500 pr-2'>Read More</a>
          <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#3b82f6"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>
        </div>

        <div className="icons flex justify-between w-1/2 mt-4 text-[12px]">
          <div className="eye flex items-center "><svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="20px" fill="#000"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"/></svg>{views}</div>
          <div className="eye flex items-center "><svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="20px" fill="#000"><path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z"/></svg>{likes}</div>
          <div className="eye flex items-center"><svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="20px" fill="#000"><path d="M240-400h480v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM880-80 720-240H160q-33 0-56.5-23.5T80-320v-480q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v720ZM160-320h594l46 45v-525H160v480Zm0 0v-480 480Z"/></svg>{comments}</div>
          
        </div>
      </div>
    </div>
  )
}

export default Card
