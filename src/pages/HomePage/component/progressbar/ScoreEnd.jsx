import React, { useState } from 'react'
import {ProgressBar} from 'react-bootstrap'
import './ScoreEnd.style.css'

const ScoreEnd = ({start, setStart}) => {
	
	const [now, setNow] = useState(10)
	const handleProgressChange = (newValue) => {
		setNow(newValue);
		setStart(newValue);
	  };
  return (
	<>
		<div>End Score</div>
		<ProgressBar variant="danger" now={now} label={`${now}`} min="0"
			max="10"/>
		<input
			className="input-range"
			type="range"
			min="0"
			max="10"
			value={now}
			onChange={(e) => handleProgressChange(parseInt(e.target.value))}
		/>
	</>
  )
}

export default ScoreEnd;