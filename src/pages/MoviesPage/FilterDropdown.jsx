import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';

const genres = [
  'Action', 'Adventure', 'Animation', 'Comedy', 'Crime', 'Documentary', 'Drama',
  'Family', 'Fantasy', 'History', 'Horror', 'Music', 'Mystery', 'Romance', 'Science Fiction',
  'TV Movie', 'Thriller', 'War', 'Western'
];

function FilterDropdown({ movies, setMovies }) {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="danger" id="dropdown-basic">
        Filter
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Year Filter</Dropdown.Item>
        <Dropdown.Item href="#/action-2">IMDB Score Filter</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default FilterDropdown;
