import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { useSearchMoviesQuery } from '../../hooks/useSearchMovies';
import { Alert } from 'react-bootstrap';
import MovieSlider from '../../common/MovieSlider/MovieSlider';
import { responsive } from '../../common/constants/responsive';
import {Container, Row, Col} from 'react-bootstrap';
import MovieCard from '../../common/MovieCard/MovieCard';

// 경로 2가지
// nav바에서 온 경우 => popularMovie 보여주기
// keyword 입력으로 온 경우 => keyword 관련 영화 보여줌

//페이지네이션 설치
//page state 만들기
//페이지네이션 클릭할 때마다 page바꿔주기
// page값이 바뀔 때마다 useSearchMovie에 page까지 넣어서 fetch

const MoviesPage = () => {
  const [query, setQuery]= useSearchParams();
  const keyword = query.get('q')
  const {data,isLoading, isError,error} = useSearchMoviesQuery({keyword});
  console.log('searched data :', data);

  if(isLoading){
		return <h1>Loading...</h1>
	}
	if(isError){
		return <Alert vairant="danger">{error.message}</Alert>
	}
  return (
	// <div style={{color:'white'}} className="movies">
	// 	<MovieSlider movies={data.results} title={keyword? `${keyword} Movies` : "Popular Movies"} responsive={responsive}/>
	// </div>
  <Container style={{color:'white'}}>
    <Row>
      <Col lg={4} xs={12}>{" "}필터{" "}</Col>
      <Col lg={8} xs={12}>
        <Row>  
          {data?.results.map((movie, index)=>
            <Col key={index} lg={4} xs={12}>
              <MovieCard movie={movie} />
            </Col>
          )}
        </Row>
      </Col> 
    </Row>
  </Container>
  )
}

export default MoviesPage