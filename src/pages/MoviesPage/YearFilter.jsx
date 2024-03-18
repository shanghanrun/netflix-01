import React, { useState, useEffect } from 'react'
import YearStart from './component/progressbar/YearStart'
import YearEnd from './component/progressbar/YearEnd'


const YearFilter = ({setYearStart, setYearEnd}) => {
	
	return(
		<>
			<div>
				<YearStart setYearStart={setYearStart}/>
				<YearEnd setYearEnd={setYearEnd}/>
			</div>
		</>
	)
}

export default YearFilter