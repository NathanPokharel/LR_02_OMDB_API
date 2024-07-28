import { useState } from "react"
import Movie_Modal from "./components/Movies"
import SearchBar from "./components/SearchBar"

function App() {
    const [title, setTitle] = useState('Avatar');
    const [movies, setMovies] = useState([]);
    const searchMovie = async () => {
        const url = `https://www.omdbapi.com/?s=${title}&plot=full&apikey=2ec8309e`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.Search);
        setMovies(data.Search);

    }

    return (
        <>
            <SearchBar setTitle={setTitle} searchMovie={searchMovie} />
            <Movie_Modal movies={movies} />
        </>
    )
}

export default App
