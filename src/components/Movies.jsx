export default function Movie_Modal({ movies }) {
    return (
        <div className="movie-list">
            <div className="movies">
                {movies.map((movie) => {
                    return (
                        <div className="container">
                            <div className="desc">
                                <p>{movie.Title} </p>
                                <p>{movie.Year}</p>
                            </div>
                            <img src={movie.Poster} alt="image for a movie" className="Poster" />
                        </div>
                    )
                })}

            </div>
        </div>
    )
}
