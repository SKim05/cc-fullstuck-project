import Chat from "./Chat";

export default function SingleView(props){
    const {selectedBook, handleClose} = props;
    
    return (
        <>
        <div className="modal-overlay">
            <div className="modal-content">
                <div id = "book-info">
                    <img src={selectedBook.url} alt="画像" />
                </div>
                <div id = "chat">
                    <Chat />
                </div>
                
                
                <span className="square_btn" onClick={handleClose}>
                </span>
                
            </div>
        </div>
        </>
    )

}