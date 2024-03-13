import React from 'react'
import './MovieCard.style.css'
import {Badge} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'


let imagePath =`https://www.themoviedb.org/t/p/w1066_and_h600_bestv2`
const MovieCard = ({movie}) => {
  return (
	<div className="movie-card" style={{backgroundImage: "url("+`${imagePath+movie.poster_path}`+")"}}>		
	
		<div className="overlay">
			<h3>{movie.title}</h3>
			<div className="underline"></div>
			{movie.genre_ids.map((id, i)=><Badge bg="danger" key={i}>{id}</Badge>)}
			<div>
				<div>
					<Badge bg="warning" style={{color:'black'}}>IMDb</Badge>
					{movie.vote_average}
				</div>
				<div>
					<FontAwesomeIcon icon={faUsers} />
					{movie.popularity}
				</div>
				<div>{movie.adult? 'Over 18':'Under 18'}</div>
			</div>
		</div>
	</div>
	
  )
}

export default MovieCard