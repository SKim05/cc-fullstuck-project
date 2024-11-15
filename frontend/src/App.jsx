import { useState, useEffect } from "react";
import axios from 'axios'
import Books from './Books'

//const baseUrl = import.meta.env.VITE_API_BASE_URL

function App() {
  const [bookList, setBookList] = useState([]);
  const [selectedBook, setselectedBook] = useState("");
  const [isSingleView, setIsSingleView] = useState(false);

  let username = localStorage.getItem('username');
  if (!username || username == "null") {
    username = window.prompt('投稿する際に使用するユーザ名を入力してください');
    localStorage.setItem('username', username);
  }

  useEffect(()=>{
    try {
      const fetchBooks = async () => {
        const res = await axios.get('/api/books')
        setBookList(res.data)
      }
      fetchBooks()
    } catch (e){
      console.log(e)
    }

  }, [])

  return (
    <>
    <div className="App">
      <div>
        <div className = "logo-image">
          <img src="/logo.png" alt="" />
        </div>
      </div>

      
      <Books 
        books={bookList}
        isSingleView={isSingleView}
        setIsSingleView={setIsSingleView}
        setselectedBook={setselectedBook}
        selectedBook={selectedBook}
      />

    </div>
    </>
  );
}

export default App;