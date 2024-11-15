import { useState, useEffect } from "react";
import axios from 'axios'

export default function Chat(selectedBook){

    const [comments, setComments] = useState([]);
    const [inputText, setInputText] = useState('');
    const username = localStorage.getItem('username')

    useEffect(()=>{
        try {
        const fetchComments = async () => {
            const res = await axios.get(`/api/${selectedBook.selectedBook.volume}/comments`)
            setComments(res.data)
        }
        fetchComments()
        } catch (e){
        console.log(e)
        }
    }, [])
    
    async function fetchComments() {
        try {
            const res = await axios.get(`/api/${selectedBook.selectedBook.volume}/comments`)
            setComments(res.data)
        } catch (e) {
            console.log(e)
            }      
    }

    async function addComments(volume, text, username) {
        try {
            await axios.post(`/api/comments`, {volume, text, username})
            fetchComments()
        } catch (e) {
            console.log(e)
            }
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetchComments()
        
        if (inputText === "") return
        
        addComments(selectedBook.selectedBook.volume, inputText, username)
        setInputText('')
        fetchComments()
      }

    return (
        <>
        <div id = "chat">
            <div className="review-list">
                {comments.length
                ? comments.reduceRight((p, c) => [...p, c], []).map((comment) => {
                    return (
                        <>                       
                        <div className="chat-username">
                            {comment.username}
                        </div>
                        <div className="chat-text">
                            {comment.text}
                        </div>
                        </>
                    )
                }): 
                
                <div className="no-comments">No Comments</div>}
            </div>

            <div className="right-contents">
                <div className="chat-container">
                    <div id="input-area">
                        <textarea 
                            cols="30"
                            rows="5"
                            maxLength="20"
                            placeholder="感想を送ろう！"
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                        ></textarea>
                    </div>
                    <div id="button-area">
                        <button
                            id="send-button"
                            onClick={handleSubmit}
                        >
                            send message!
                        </button> 
                    </div>
                        
                </div>
            </div>


        </div>


        



        </>
    )
}