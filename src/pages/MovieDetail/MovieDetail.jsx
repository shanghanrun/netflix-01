import React, { useState } from 'react'
import {Alert, Container, Row, Col} from 'react-bootstrap'
import {useParams } from 'react-router-dom'
import { useDetailMovieQuery } from '../../hooks/useDetailMovie';
import Reviews from './Reviews/Reviews';
import SimilarMovies from './SimilarMovies/SimilarMovies';
import Recommendations from './Recommendations/Recommendations';
import Video from './Video/Video';

let imagePath =`https://www.themoviedb.org/t/p/w1066_and_h600_bestv2`

const MovieDetail = () => {
  const {id} = useParams()
  console.log('id :', id)
  const {data,isLoading, isError,error} = useDetailMovieQuery({id});
  console.log('detail movie :', data);

  const [isSimilar, setIsSimilar] =useState(true)
  const showSimilarMovies=()=>{
    setIsSimilar(true)
  }
  const showRecommendations=()=>{
    setIsSimilar(false)

  }
  if(isLoading){
		return <h1>Loading...</h1>
	}
	if(isError){
		return <Alert vairant="danger">{error.message}</Alert>
	}

  return (
    <div style={{color: "white"}}>
      <Container >
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
      <Container className="related-movie-area">
        <div>
          <span onClick={showSimilarMovies}>연관영화</span>
          <span onClick={showRecommendations}>추천영화</span>
        </div>
        <div>
          {isSimilar ?<SimilarMovies id={id}/> : <Recommendations id={id} />}
        </div>
      </Container>
      <Container className="review-area">
        <div>
          <div>Reviews</div>
        </div>
        <div>
          <Reviews id={id} />
        </div>
      </Container>
      <Container className="video-area">
        <div>
          <h3 style={{border: '2px solid red', borderRadius: '5px', padding:'10px', marginTop:'20px'}}
          >
            Video</h3>
        </div>
        <div>
          <Video id={id} />
        </div>
      </Container>
    </div>
  )
}

export default MovieDetail