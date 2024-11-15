import Chat from "./Chat";

export default function SingleView(props){
    const {selectedBook, handleClose} = props;
    return (
        <>
        <div className="modal-overlay">
            <div className="modal-content">
                <div id = "book-info">
                    <div className="left-area">
                        <img src={selectedBook.url} alt="画像" />
                        <h3> #{selectedBook.volume}「 {selectedBook.subtitle} 」</h3>
                        <h4>"{selectedBook.intro}"</h4>
                    </div>
                </div>

                <Chat 
                    selectedBook = {selectedBook}
                />
                
                <span 
                    className="square_btn"
                    onClick={handleClose}>
                </span>
                
            </div>
        </div>
        </>
    )

}