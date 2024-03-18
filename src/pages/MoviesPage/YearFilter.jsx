import React, { useState } from 'react'
import YearStart from '../HomePage/component/progressbar/YearStart'
import YearEnd from '../HomePage/component/progressbar/YearEnd'
import ScoreStart from '../HomePage/component/progressbar/ScoreStart'
import ScoreEnd from '../HomePage/component/progressbar/ScoreEnd'

const YearFilter = ({movies, setMovies}) => {
	const [start, setStart] = useState(2001)
	const [end, setEnd] = useState(2024)

	
	return(
		<>
			<div>
				<YearStart now={start} setStart={setStart}/>
				<YearEnd now={end}  setEnd={setEnd}/>
			</div>
			<div>
				<ScoreStart now={start} setStart={setStart} />
				<ScoreEnd now={end} setStart={setStart} />
			</div>
		</>
	)
}

export default YearFilter