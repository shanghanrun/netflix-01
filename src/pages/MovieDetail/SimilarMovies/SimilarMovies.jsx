import React, { useState } from 'react'
import {Alert, Container, Row, Col} from 'react-bootstrap'
import MovieCard from '../../../common/MovieCard/MovieCard';
import { useSimilarMoviesQuery } from '../../../hooks/useSimilarMovies';


const SimilarMovies = ({id}) => {
	const {data,isLoading, isError,error} = useSimilarMoviesQuery({id});
  	console.log('similar movies :', data);

  	if(isLoading){
	return <h1>Loading...</h1>
	}
	if(isError){
		return <Alert vairant="danger">{error.message}</Alert>
	}

  return (
	<Container className="d-flex justify-content-center flex-wrap gap-2"> 
		{data.results.map((movie, index)=>
			<MovieCard movie={movie} key={index} />
		)}
	</Container>
  )
}

export default SimilarMovies