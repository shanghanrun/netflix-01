import React, { useState } from 'react'
import {Alert, Container, Row, Col} from 'react-bootstrap'
import { useReviewsQuery } from '../../../hooks/useReviews';


const Reviews = ({id}) => {
	const {data,isLoading, isError,error} = useReviewsQuery({id});
  	console.log('Reviews :', data);

  	if(isLoading){
	return <h1>Loading...</h1>
	}
	if(isError){
		return <Alert vairant="danger">{error.message}</Alert>
	}

  return (
	<Container className="review"> 
		{data.results.map((item, index)=>
			(<div key={index}>
				<div>{item.author}</div>
				<div>{item.content}</div>
				<div>{item.created_at}</div>
			</div>)
		)}
	</Container>
  )
}

export default Reviews;