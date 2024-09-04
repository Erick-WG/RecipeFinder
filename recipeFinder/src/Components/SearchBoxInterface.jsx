/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';
import ResponseCards from './ResponseCards';
// import styled from 'styled-components';
import { Span, TopContainer, SearchInput, StyledButton, ResponseContainer } from '../assets/CssStyling/Styling';

function SearchBoxInterface() {
  const [searchQuery, setSearchQuery] = useState('');
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

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };
  

  return (
    <>
      <TopContainer>
        <Span>
          <SearchInput
            type="search"
            name="search"
            value={searchQuery}
            onChange={handleInputChange}
            placeholder="Search for something..."
          />

          <StyledButton type="button" name="Search 🔍" onClick={handleSearch}>
            Search 🔍
          </StyledButton>
        </Span>
      </TopContainer>

      <ResponseContainer>
        <ResponseCards data={data}/>
      </ResponseContainer>
    </>
  );
};

export default SearchBoxInterface;