import { useGlobalContext } from "../../context"
import Loader from '../loader/Loader'
import notfound from '/notfound.png'
import Book from "./book"

const Booklist = () => {
    const { books, loading, resultTitle } = useGlobalContext();
    const bookCovers = books.map((book) => {
        return {
            ...book,
            id: (book.id).replace("/works/", ""),
            cover_img: book.cover_id ? `https://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg` : notfound
        }
    })
    console.log(bookCovers);
    if (loading) return <Loader />
    return (
        <section className="booklist">
            <div className="container">
                <div className="section-title">
                    <h2>{resultTitle}</h2>
                </div>
                <div className="booklist-content">
                    {
                        bookCovers.slice(0, 30).map((item, index) => {
                            return (
                                <Book key={index} {...item} />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Booklist
