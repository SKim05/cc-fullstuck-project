import React, { useState, useEffect } from "react";
import axios from 'axios'
import Books from './Books'

const baseUrl = import.meta.env.VITE_API_BASE_URL

function App() {
  const [bookList, setBookList] = useState([]);
  useEffect(()=>{
    try {
      const fetchBooks = async () => {
        const res = await axios.get('/api/books')
        console.log(res.data[0].subtitle)
        setBookList(res.data)
      }
      fetchBooks()
    } catch (e){
      console.log("error")
    }

  }, [])

  async function hello(){
    await axios.get('/api/hello')
      .then(response => response.json())
      .then(data => setBookList(data.message));
  }

  return (
    <>
    <div className="App">
      <header className="App">
        {JSON.stringify(bookList[0])}
        
      </header>
      <Books 
        books={bookList}
      />
    </div>
    </>
  );
}

export default App;