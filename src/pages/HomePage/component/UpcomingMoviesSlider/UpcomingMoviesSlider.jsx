import React from 'react'
import { useUpcomingMoviesQuery } from '../../../../hooks/useUpcomingMovies'
import { Alert } from 'react-bootstrap';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import { responsive } from '../../../../common/constants/responsive';


const UpcomingMoviesSlider = () => {
	const {data,isLoading, isError, error} =useUpcomingMoviesQuery()
	if(isLoading){
		return <h1>Loading...</h1>
	}
	if(isError){
		return <Alert vairant="danger">{error.message}</Alert>
	}
  return (
	<div>
		<MovieSlider movies={data.results} title="Upcoming Movies" responsive={responsive}/>
	</div>
  )
}

export default UpcomingMoviesSlider