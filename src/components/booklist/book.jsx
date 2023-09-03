import { Link } from "react-router-dom"
const Book = (book) => {
    return (
        <div className="book-item">
            <div className="book-item-img">
                <img src={book.cover_img} alt="cover" />
            </div>
            <div className="book-item-info">
                <Link to={`/book/${book.id}`} {...book}>
                    <div className="item-desc title fw-7">
                        <span>{book.title}</span>
                    </div>
                </Link>
                <div className="item-desc">
                    <strong>Author: </strong>
                    <span>{book.author.join(", ")}</span>
                </div>
                <div className="item-desc">
                    <strong>Total Editions: </strong>
                    <span>{book.edition_count}</span>
                </div>
                <div className="item-desc">
                    <strong>First Published in: </strong>
                    <span>{book.first_publish_year}</span>
                </div>
            </div>
        </div>
    )
}

export default Book
