
import SingleView from "./SingleView";

export default function Books(props){
    const {books, isSingleView, setIsSingleView, setselectedBook, selectedBook} = props;
    
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
        <div className="grid-images">
        {books.length
            ? books.map((book) => {
                return (
                    <>
                    
                        <img
                            src={book.url}
                            alt={book.id}
                            onClick={()=>{
                                handleOpen(book)
                            }}                               
                        />                            
                    
                    </>
                )
            }): 'No Books'}
        </div>
            

            {isSingleView && (
                <>
                <SingleView
                    selectedBook = {selectedBook}
                    handleClose = {handleClose}
                />
                </>
            )}
        </>
    )
}