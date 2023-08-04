import { useState } from "react";
import { useHistory } from "react-router-dom";


const Create = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [body, setBody] = useState('');
    const [family, setFamily] = useState('Jedi');
    const [isPending, setIsPending] = useState<boolean>(false);
    const history = useHistory();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const blog = { title, author, body, family };
        setIsPending(true);
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" }, // Corrected typo here
            body: JSON.stringify(blog)
        }).then(() => {
            setIsPending(false);
            history.push('/');
        });
    };

    return (
        <nav className="Create">
            <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog author:</label>
                <input
                    type="text"
                    required
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                <label>Blog body:</label>
                <input
                    type="text"
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
                <label>Group:</label>
                <select
                    value={family}
                    onChange={(e) => setFamily(e.target.value)}
                >
                    <option value="Sith">Sith</option>
                    <option value="Jedi">Jedi</option>
                </select>

                {!isPending && <button >Add Blog</button>}
                {isPending && <button disabled>Adding Blog...</button>}

            </form>
        </nav>
    );
}
export default Create;