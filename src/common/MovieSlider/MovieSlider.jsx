import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieCard from '../MovieCard/MovieCard';
import './MovieSlider.style.css'
const responsive = {
	desktop: {
	  breakpoint: { max: 3000, min: 1024 },
	  items: 6,
	},
	tablet: {
	  breakpoint: { max: 1024, min: 464 },
	  items: 2,
	},
	mobile: {
	  breakpoint: { max: 464, min: 0 },
	  items: 1,
	}
  };

const MovieSlider = ({title, movies}) => {
  return (
	<div>
		<h3>{title}</h3>
		<Carousel
			infinite={true}
			centerMode={true}
			itemClass="movie-slider p-1"
			containerClass="carousel-container"
			responsive={responsive}
			// autoPlay={true}
  			// autoPlaySpeed={1000}
		>
			{movies.map((movie, index)=>
				<MovieCard movie={movie} key={index}/>
			)}
		</Carousel>
	</div>
  )
}

export default MovieSlider