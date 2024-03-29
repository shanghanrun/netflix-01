import React, { useState } from 'react'
import {Alert, Container, Row, Col} from 'react-bootstrap'
import MovieCard from '../../../common/MovieCard/MovieCard';
import { useRecommendationsQuery } from '../../../hooks/useRecommendations';


const Recommendations = ({id}) => {
	const {data,isLoading, isError,error} = useRecommendationsQuery({id});
  	console.log('Recommendations :', data);

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

export default Recommendations;