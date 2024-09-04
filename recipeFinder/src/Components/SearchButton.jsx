/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import { React, useState} from 'react'
import axios from 'axios';
import ResponseCards from './ResponseCards';

const SearchButton = ({searchQuery}) => {
  const [data, setData] = useState([]);
  const handleSearch = async (e) => {
    e.preventDefault(); // prevent default form submission
    try {
      const app_id = '1bcdb8b5';
      const app_key = 'f6bd1c12813fbee76b3c3af17a95415d';

      const response = await axios.get(`https://api.edamam.com/search?q=${searchQuery}&app_id=${app_id}&app_key=${app_key}`);
      const responseData = response.data.hits;
      setData(responseData);
      console.log(responseData);
    } catch (error) {
      window.alert(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      <button type="button" name="search-entered" onClick={handleSearch}>
        Search 🔍
      </button>

      <container className="results-container">
        <ResponseCards  data={data} />
      </container>

    </div>
  )
}

export default SearchButton
