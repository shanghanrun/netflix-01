import React, { useState, useEffect } from 'react'
import ScoreStart from './component/progressbar/ScoreStart'
import ScoreEnd from './component/progressbar/ScoreEnd'

const ScoreFilter = ({setScoreStart, setScoreEnd}) => {
	
	return(
		<>
			<div>
				<ScoreStart setScoreStart={setScoreStart} />
				<ScoreEnd setScoreEnd={setScoreEnd} />
			</div>
		</>
	)
}

export default ScoreFilter