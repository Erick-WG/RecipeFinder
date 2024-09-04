/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import styled from 'styled-components';
import { Container, Span } from '../assets/CssStyling/Styling';

const ResponseCards = ({data}) => {
  
  //* styling.


  //* container
  const MainContainer = styled.div`
    padding: 15px 15px;
    margin-top: 15px;
  `

  //* Cards
  const Card = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    margin: 10px;
    padding: 15px;
    max-width: 400px;
    border-radius: 15px;
    background-color: silver;
  `

  const CardContainer = ({key, ClassName, children}) => (
    <Card
      key={key}
      className={ClassName}
    >
      {children}
    </Card>
  );

  const Image = styled.img`
    width: 100%;
    height: 200px;
    border-radius: 5px;
  `

  const Img = ({src, alt}) => (
    <Image
    src={src}
    alt={alt}
    />
  );

  return (
    <MainContainer>
      {data.length > 0 && (
        <Container>
          {data.map((item) => (
            <CardContainer className='card' key={item.recipe.uri}>
              <section>
                <Img src={item.recipe.image} alt={item.recipe.label}/>
                <h2 style={{margin: '0'}}>{item.recipe.label}</h2>
                <h3 style={{margin: '0', paddingBottom: '5px'}}>{item.recipe.cuisineType[0]} {item.recipe.mealType[0]}</h3>
              </section>
              <Span>
                <p style={{marginTop: '10px', paddingLeft:'20px', overFlow: 'hidden'}}>
                  {(item.recipe.ingredientLines).join(', ')}
                </p>
                <a href={item.recipe.url} target="_blank" rel="noopener noreferrer">Recipe here</a>
              </Span>
            </CardContainer>
          ))}
        </Container>
      )}
    </MainContainer>
  )
}

export default ResponseCards
