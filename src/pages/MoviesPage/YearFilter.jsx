import React, { useState } from 'react'
import InputRange from 'react-input-range';  // 버전이 안맞는 문제..

const YearFilter = ({movies, setMovies}) => {
	const [value, setValue] = useState({min:1990, max:2024})
	function handleChange(value){
		setValue({value})
		console.log(value);
		//여기에 filterMoviesByYear()를 하게 되면, setValue가 비동기적으로 되어서 제대로 안됨...
	}
	function filterMoviesByYear(movies, startYear, endYear){
		const filteredMovies = movies.filter(movie =>{
			const releaseYear = new Date(movie.release_date).getFullYear();
			return releaseYear >= startYear && releaseYear <= endYear;
		})
		return filteredMovies;
	}
  return (
	<>
		<form className="form">
			<InputRange
				draggableTrack
				maxValue={2024}
				minValue={1990}
				onChange={value => handleChange(value)}
				value ={value} />
		</form>
	</>
  )
}

export default YearFilter