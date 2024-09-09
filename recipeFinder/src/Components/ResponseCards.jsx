/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import {React, useState} from 'react'
import styled from 'styled-components';
import { ResponseContainer, Span } from '../assets/CssStyling/Styling';

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
    align-items: center;
    margin: 10px;
    padding: 15px;
    max-width: 400px;
    border-radius: 15px;
    background-color: whitesmoke;
  `

  const CardContainer = ({key, ClassName, children}) => (
    <Card
      key={key}
      className={ClassName}
    >
      {children}
    </Card>
  );

  //* Image
  const Image = styled.img`
    width: 100%;
    height: 400px;
    border-radius: 5px;
  `

  const Img = ({src, alt}) => (
    <Image
    src={src}
    alt={alt}
    />
  );

  //* Span
  const ResSpan = styled(Span)`
  align-content: flex-start;
  `

  return (
    <MainContainer>
      {data.length > 0 && (
        <ResponseContainer>
          {data.map((item) => (
            <CardContainer className='card' key={item.recipe.uri}>
              <section>
                <Img src={item.recipe.image} alt={item.recipe.label}/>
                <h2 style={{margin: '0'}}>{item.recipe.label}</h2>
                <h3 style={{margin: '0', paddingBottom: '5px'}}>{item.recipe.cuisineType[0]} {item.recipe.mealType[0]}</h3>
                <h4 style={{margin: "0",}}><i>Category: {(item.recipe.dishType).join(", ") + '.'}</i></h4>
              </section>

              <ResSpan>
                <p style={{marginTop: '10px', paddingLeft:'20px', overFlow: 'hidden'}}>
                  {(item.recipe.ingredientLines).join(', ')}
                </p>
                <p style={{marginBottom: '0px'}}>
                  <b>Serving:</b> {`${item.recipe.yield}`}
                </p>
                <p style={{marginTop: '0px'}}>
                  <b>Prep-time:</b> {`${item.recipe.totalTime > 0 ? item.recipe.totalTime + ' Minutes' : '~ 1 Minute'}`}
                  {console.log(item.recipe)}
                </p>
                <a href={item.recipe.url} target="_blank" rel="noopener noreferrer">Recipe here</a>
              </ResSpan>
            </CardContainer>
          ))}
        </ResponseContainer>
      )}
    </MainContainer>
  )
}

export default ResponseCards
