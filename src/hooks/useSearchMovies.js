import {useQuery} from '@tanstack/react-query'
import api from '../utils/api'

const fetchSearchMovies =({keyword})=>{ //똑같은 객체형태로 받으면 잘 받아진다.
	console.log('keyword : ', keyword )
	return keyword? api.get(`search/movie?query=${keyword}`) 
	: api.get('movie/popular')
}

export const useSearchMoviesQuery = ({keyword}) => { //이건 컴포넌트라서 객체형태의 props!!
	return useQuery({
		queryKey:['movie-search', keyword],  // search가 많아질 수 있으니, 유니크하게 만들어야 된다.
		queryFn: ()=>fetchSearchMovies({keyword}),//함수에 객체로 인자를 전달해도 된다.
		select: (result)=> result.data, // 받은 객체의 data.results에 [{..},{}...]
		retry:1,
	})
}
