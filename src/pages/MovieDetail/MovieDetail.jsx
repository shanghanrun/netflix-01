import React, { useState } from 'react'
import {Alert, Container, Row, Col, Badge} from 'react-bootstrap'
import {useParams } from 'react-router-dom'
import { useDetailMovieQuery } from '../../hooks/useDetailMovie';
import Reviews from './Reviews/Reviews';
import SimilarMovies from './SimilarMovies/SimilarMovies';
import Recommendations from './Recommendations/Recommendations';
import Video from './Video/Video';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import './MovieDetail.style.css'

// let imagePath =`https://www.themoviedb.org/t/p/w1066_and_h600_bestv2`
let imagePath =`https://image.tmdb.org/t/p/original`

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
              <img src={imagePath+data.backdrop_path} width={600} alt=''/>
            </div>
          </Col>
          <Col lg={6} xs={12} style={{}}>
            <h1>Title : {data.title}</h1>
            <h3 style={{color:'#87b4f8', fontWeight:'bold'}}>{data.tagline}</h3>
            <h4>Story : {data.overview}</h4>
            <div><FontAwesomeIcon icon={faUsers} /> {data.popularity}</div>
            <div>Genres : 
                {data.genres && data.genres.map(genre => (
                    <span key={genre.id}>{genre.name}, </span>
                ))}

              {/* <span> {data.genres[0].name}, </span>
              <span>{data.genres[1].name}</span> */}
            </div>
            <div>Budget : {data.budget}</div>
            <div>Revenue : {data.revenue}</div>
            <div>RunTime : {data.runtime}</div>
            <div>Release Date : {data.release_date}</div>
          </Col>
        </Row>
      </Container>
      <Container className="related-movie-area" style={{marginTop: '20px', marginBottom:'10px'}}>
        <div className='badge'>
          <Badge variant="danger" className="bg-danger similar" style={{marginRight:'10px', padding:'10px', cursor:'pointer'}} onClick={showSimilarMovies}>연관영화</Badge>
          <Badge variant="primary" className='bg-primary recommendations'style={{padding:'10px',  cursor:'pointer'}} onClick={showRecommendations}>추천영화</Badge>
        </div>
      </Container>
      <Container className="review-area">
        <div>
          <h3 style={{border: '2px solid red', borderRadius: '5px', padding:'10px', marginTop:'20px'}}
          >
            Reviews</h3>
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