import "../css/MovieCard.css"
import { useMovieContext } from "../context/MovieContext"
import Favorite from "../pages/Favorite"
function MovieCard({movie}){
    const {isFavorite, addToFavorites, removeFromFavorites} = useMovieContext()
    const favorite = isFavorite(movie.id)
    
    function onFavoriteClick(e){
        e.preventDefault()
        if (favorite) removeFromFavorites(movie.id)
        else addToFavorites(movie)
    }
    return <div className="movie-card">
        <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
            <button className={`favorite-btn ${favorite ? "active" : ""}`}onClick={onFavoriteClick}>♥</button>
        </div>
        <div className="movie-info"> 
            <h3>{movie.title}</h3>
            <p>{movie.release_date?.split("-")[0]}-{movie.release_date?.split("-")[1]}</p>
        </div>
    </div>
}

export default MovieCard