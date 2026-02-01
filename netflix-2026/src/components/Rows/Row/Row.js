import React,{use, useEffect , useState} from 'react';
import './Row.css';
import axios from '../../../utils/axios';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';


const Row = ({ title, fetchUrl ,islargeRow}) => {
    const [movies, setMovies] = useState([]);
    const[trailerUrl,setTrailerUrl]=useState("");

    const base_url="https://image.tmdb.org/t/p/original/";

    useEffect(() => {
        (async () => {
            try {
                console.log(fetchUrl);
                const request = await axios.get(fetchUrl);
                setMovies(request.data.results);
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
        })()
    }, [fetchUrl]);

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl("");
        } else {
            movieTrailer( movie?.title || movie?.name || movie?.original_name || "")
            .then((url) => {
                console.log(url);
                const urlParams = new URLSearchParams(new URL(url).search);
                console.log(urlParams.get("v"));
                setTrailerUrl(urlParams.get("v"));
            })
            .catch((error) => console.log("Error finding trailer:", error));
         }
    };  

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };
                
                
  return (
    <div className='row'>
        <h1>{title}</h1>
        <div className='row_posters'>
            {movies?.map((movie, index) => (
                <img
                onClick={() => handleClick(movie)}
                key={index} src={`${base_url}${islargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} className={`row_poster ${islargeRow && "row_posterLarge"}`} />
            ))}
        </div>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}     

    </div>
  )
}

export default Row;
