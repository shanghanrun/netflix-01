import React from 'react'
import Banner from './component/Banner/Banner'
import PopularMoviesSlider from './component/PopularMoviesSlider/PopularMoviesSlider'
import TopRatedMoviesSlider from './component/TopRatedMoviesSlider/TopRatedMoviesSlider'
import UpcomingMoviesSlider from './component/UpcomingMoviesSlider/UpcomingMoviesSlider'

//1.배너 => popular movie를 들고와서 첫번째 아이템을 보여주자.
//2. popular movie
//3. top rated movie
//4. upcoming movie
const HomePage = () => {
  return (
	<div style={{color: "white"}}>
    <Banner />
    <PopularMoviesSlider/>
    <TopRatedMoviesSlider />
    <UpcomingMoviesSlider />
  </div>
  )
}

export default HomePage