import React from 'react'
import Banner from './component/Banner/Banner'

//1.배너 => popular movie를 들고와서 첫번째 아이템을 보여주자.
//2. popular movie
//3. top rated movie
//4. upcoming movie
const HomePage = () => {
  return (
	<div style={{color: "white"}}>
    <Banner />
  </div>
  )
}

export default HomePage