import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Loader from '../loader/Loader'
import notfound from '/notfound.png'
import { useNavigate } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
const API_URL = 'https://openlibrary.org/works/'

const BookDetails = () => {
    const [loading, setLoading] = useState(false);
    const [book, setBook] = useState(null);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        async function fetchBookDetails() {
            try {
                const resp = await fetch(`${API_URL}${id}.json`);
                const data = await resp.json();
                if (data) {
                    const { description, title, covers, subjects, subject_places, subject_people, subject_times } = data;
                    const newBook = {
                        description: description ? description.value : "No Description Found",
                        title: title,
                        cover_img: covers ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg` : notfound,
                        subject_places: subject_places ? subject_places.join(", ") : "No Subject Place Found",
                        subject_times: subject_times ? subject_times.join(", ") : "No Subject Time Found",
                        subject_people: subject_people ? subject_people.join(", ") : "No Sujbect People Found",
                        subjects: subjects ? subjects.join(", ") : "No Subjects Found"
                    }
                    setBook(newBook);
                } else {
                    setBook(null);
                }
                setLoading(false);
            }
            catch (err) {
                console.log(err);
                setLoading(false);
            }
        }
        fetchBookDetails();
    }, [id])
    console.log(book);
    return (
        <div>

        </div>
    )
}

export default BookDetails
