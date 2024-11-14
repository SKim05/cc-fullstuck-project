
export default function Books({books}){
    return (
        <>
        <ul className="list">
            {books.length
                ? books.map((book) => {
                    return (
                        <>
                        <img src={book.url} alt={book.id} />
                        </>

                    )
                })
                : 'No Books'}
        </ul>
        </>
    )
}