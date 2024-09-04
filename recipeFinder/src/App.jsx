/* eslint-disable no-unused-vars */
import React from "react";
import SearchBoxInterface from "./Components/SearchBoxInterface";
import styled from 'styled-components';

function App (){

  const Heading = styled.h1`
    padding: 2rem;
    text-align: center;
    margin-bottom: 0;
  `
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
  `

  return (
    <Wrapper>
    <Heading>Look up great recipes.</Heading>
      <SearchBoxInterface />
    </Wrapper>
  )

}


export default App