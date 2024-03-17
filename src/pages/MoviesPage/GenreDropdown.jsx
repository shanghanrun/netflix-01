import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';

import { genres } from '../../common/constants/genres';

function GenreDropdown({ movies, setMovies }) {
  function filterByGenre(id){
    const results = movies.filter(movie => movie.genre_ids.includes(id))
    setMovies(results)
  }
  return (
    <Dropdown>
      <Dropdown.Toggle variant="danger" id="dropdown-basic">
        Genres
      </Dropdown.Toggle>

      <Dropdown.Menu>
              {/* {genres.map((genre, index) => (
                <Button key={index} variant="outline-secondary" size="sm">{genre.name}</Button>
              ))} */}
              {genres.map((genre, index) => (
                <Button onClick={filterByGenre(genres.id)} key={index} variant="outline-secondary" size="sm">{genre.name}</Button>
              ))}
        </Dropdown.Menu>
    </Dropdown>
  );
}

export default GenreDropdown;
