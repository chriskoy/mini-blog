import {useState} from "react";
import Blog from "../model/Blog"
import Spinner from "./Spinner";
// import {useNavigate} from "react-router-dom"
import BlogDetails from "./BlogDetails";

export default function Create() {
    // const navigate = useNavigate()

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [authors] = useState([
        "Cong",
        'Edgar',
        'Wiki',
        'Alex',
        'Link',
        'Zelta',
        'Mario',
        'Dean',
    ])
    const [isLoading, setIsLoading] = useState(false)
    const [author, setAuthor] = useState(authors[0])
    const [error, setError] = useState()
    const [showCreated, setShowCreated] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true)
        let blog = new Blog(Date.now(), title, body, author);
        setTimeout(() => {
            fetch('http://localhost:8000/blogs', {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(blog)
            }).then((response) => {
                    if (!response.ok) {
                        throw Error("Couldn't create a new blog!")
                    }
                    setIsLoading(false)
                    setShowCreated(true)
                    setTitle('')
                    setBody('')
                    setAuthor(authors[0])
                    // navigate("details")
                }
            ).catch((e) => {
                setError(e.message)
                setIsLoading(false)
                setShowCreated(false)

            })
        }, 3000)

    }
    return (
        <div className="create">
            <h2>Create a new blog</h2>

            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input required type="text" onChange={(e) => setTitle(e.target.value)}/>
                <label>Content:</label>
                <textarea required onChange={(e) => setBody(e.target.value)}/>
                <label>Author:</label>
                <select defaultValue={authors[0]} onChange={(e) => setAuthor(e.target.value)}>
                    {
                        authors.map((a) => <option key={a}>{a}</option>)
                    }
                </select>
                <button disabled={isLoading}>
                    {
                        isLoading ?
                            <Spinner/> :
                            "Create"
                    }
                </button>
                {
                    showCreated ?
                        <span className="success">New blog successfully created</span>
                        :
                        <span className="error">{error}</span>
                }
            </form>

            <BlogDetails blog={new Blog(null, title, body, author)}/>
        </div>
    );
}