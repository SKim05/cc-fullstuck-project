
import SingleView from "./SingleView";

export default function Books(props){
    const {books, isSingleView, setIsSingleView, onClick, setselectedBook, selectedBook} = props;
    
    const handleOpen = (book) => {
        setIsSingleView(true);
        setselectedBook(book)
      };
    
      const handleClose = () => {
        setIsSingleView(false);
        setselectedBook("");
      };

    return (
        <>
        <ul className="list">
            {books.length
                ? books.map((book) => {
                    return (
                        <>
                        <li><img
                                src={book.url}
                                alt={book.id}
                                onClick={()=>{
                                    handleOpen(book)
                                }}
                                
                            />
                        </li>
                        </>
                    )
                }): 'No Books'}

                {isSingleView && (
                    <>
                    <SingleView
                        selectedBook = {selectedBook}
                        handleClose = {handleClose}
                    />
                    </>
                )}

        </ul>
        </>
    )
}