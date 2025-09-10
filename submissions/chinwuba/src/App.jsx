import React from 'react'
import { useState, useEffect } from 'react'
import Card from "./Card.jsx"


const itemsPerPage = 6;

const App = () => {
  const [topic, setTopic] = useState([]);
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    fetch("/data.json")
    .then((re) => re.json())
    .then((data) => setTopic(data))
    .catch((err) => console.error("Invalid File or Empty File"))

  }, []);

  return (
    <div className='p-6'>
      <h1 className='text-blue-500'>Explore Topics</h1>

    </div>
  )
}

export default App

