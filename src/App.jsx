import React from 'react'
import { useState, useEffect } from 'react'
import Card from "./Card.jsx"



const itemsPerPage = 6;
console.log(itemsPerPage);

const App = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    fetch("/data.json")
    .then((re) => re.json())
    .then((data) => {setData(data); console.log("Data has been fetched", data);
    ;
    })
    .catch((err) => console.error("Invalid File or Empty File"))

  }, []);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const lastIndex = (currentPage * itemsPerPage)
    const selectedTopics = data.slice(startIndex, lastIndex);
    console.log(selectedTopics);
    
    const totalPages = Math.ceil(data.length / itemsPerPage);

    const numArray = Array.from({length:totalPages}, (_, i) => i + 1)

  return (
    <div className='p-24 mt-5'>
      <h1 className='text-blue-500 font-bold mb-10 text-4xl'>Explore Topics</h1>
      <div className="container gap-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">

      
        {selectedTopics.map((datas) =>(
        <Card
          id={datas.id}
          image={datas.image}
          title={datas.title}
          author={datas.author}
          description={datas.description}
          readMore={datas.readMore}
          comments={datas.comments}
          likes={datas.likes}
          views={datas.views}
          date={datas.date}
          />
       
        
        ))}
      </div>
    
    <div className="page flex w-full justify-center mt-24">
     <button className='border-solid border-[1px] border-black px-4 rounded-lg p-2 m-2' disabled = {currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>Previous</button>

        {numArray.map((numbers) => (
          <button onClick={() => setCurrentPage(numbers)} 
          className={numbers === currentPage ? "bg-blue-500 text-white border-solid border-[1px] px-3 rounded-lg p-2 m-2" : "border-solid border-[1px] border-black px-3 rounded-lg p-2 m-2" }
          >{numbers}</button>
        ))}

     <button className='border-solid border-[1px] border-black p-2 px-4 rounded-lg m-2' disabled = {currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
    
    </div>
    </div>
  )
}

export default App


