import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';

const genres = [
  'Action', 'Adventure', 'Animation', 'Comedy', 'Crime', 'Documentary', 'Drama',
  'Family', 'Fantasy', 'History', 'Horror', 'Music', 'Mystery', 'Romance', 'Science Fiction',
  'TV Movie', 'Thriller', 'War', 'Western'
];

function GenreDropdown({ movies, setMovies }) {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="danger" id="dropdown-basic">
        Genres
      </Dropdown.Toggle>

      <Dropdown.Menu>
              {genres.map((genre, index) => (
                <Button key={index} variant="outline-secondary" size="sm">{genre}</Button>
              ))}
        </Dropdown.Menu>
    </Dropdown>
  );
}

export default GenreDropdown;
