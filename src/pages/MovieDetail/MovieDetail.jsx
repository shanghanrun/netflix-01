import React from 'react'
import {Alert, Container, Row, Col} from 'react-bootstrap'
import {useParams } from 'react-router-dom'
import { useDetailMovieQuery } from '../../hooks/useDetailMovie';

let imagePath =`https://www.themoviedb.org/t/p/w1066_and_h600_bestv2`

const MovieDetail = () => {
  const {id} = useParams()
  console.log('id :', id)
  const {data,isLoading, isError,error} = useDetailMovieQuery({id});
  console.log('detail movie :', data);

  if(isLoading){
		return <h1>Loading...</h1>
	}
	if(isError){
		return <Alert vairant="danger">{error.message}</Alert>
	}

  return (
    <Container style={{color: "white"}}>
      <Row>
        <Col lg={6} xs={12}>
          <div>
            <img src={imagePath+data.poster_path} width={600} alt=''/>
          </div>
        </Col>
        <Col lg={6} xs={12}>
          <h1>{data.title}</h1>
          <h3>{data.tagline}</h3>
          <h4>{data.overview}</h4>
          <div>{data.popularity}</div>
          <div>{data.genres[0].name}</div>
          <div>{data.genres[1].name}</div>
          <div>{data.budget}</div>
          <div>{data.revenue}</div>
          <div>{data.runtime}</div>
          <div>{data.release_date}</div>
        </Col>
      </Row>
    </Container>
  )
}

export default MovieDetail