import React, { useState, useEffect } from "react";
import axios from 'axios'
import Books from './Books'

//const baseUrl = import.meta.env.VITE_API_BASE_URL

function App() {
  const [bookList, setBookList] = useState([]);
  const [selectedBook, setselectedBook] = useState("");
  const [isSingleView, setIsSingleView] = useState(false);

  useEffect(()=>{
    try {
      const fetchBooks = async () => {
        const res = await axios.get('/api/books')
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

  const changeSingleView =(book) => {
    setselectedBook(book);
    setIsSingleView(true);
  }
  console.log(selectedBook)
  console.log(isSingleView)

  return (
    <>
    <div className="App">
      <header className="App">
        
      </header>
      <Books 
        books={bookList}
        isSingleView={isSingleView}
        setIsSingleView={setIsSingleView}
        onClick={changeSingleView}
        setselectedBook={setselectedBook}
        selectedBook={selectedBook}
      />

    </div>
    </>
  );
}

export default App;