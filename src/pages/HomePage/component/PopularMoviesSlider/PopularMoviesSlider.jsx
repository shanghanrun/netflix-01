import React from 'react'
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies'
import { Alert } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieCard from '../../../../common/MovieCard/MovieCard';
import './PopularMoviesSlider.style.css'
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

const PopularMoviesSlider = () => {
	const {data,isLoading, isError, error} =usePopularMoviesQuery()
	if(isLoading){
		return <h1>Loading...</h1>
	}
	if(isError){
		return <Alert vairant="danger">{error.message}</Alert>
	}
  return (
	<div>
		<h3>Popular Movies</h3>
		<Carousel
			infinite={true}
			centerMode={true}
			itemClass="movie-slider p-1"
			containerClass="carousel-container"
			responsive={responsive}
			// autoPlay={true}
  			// autoPlaySpeed={1000}
		>
			{data.results.map((movie, index)=>
				<MovieCard movie={movie} key={index}/>
			)}
		</Carousel>
	</div>
  )
}

export default PopularMoviesSlider