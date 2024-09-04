/* eslint-disable react/prop-types */
  import styled from "styled-components";

  //* Styling.

  //! Main components.











  //! Sub components.

  //* Container.
  export const Container = styled.div`
    display: flex;
    flex: 1;
    padding: 15px;
    flex-wrap: wrap;
  `

  export const TopContainer = styled.div`
      margin: 0px 50px;
      padding: 25px;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-content: center;
  `

  //* button.
  export const Button = ({name, type, onClick, className}) => (
    <button
      type={type}
      onClick={onClick}
      className={className}
    >
      {name}
    </button>
  );

  export const StyledButton = styled(Button)`
    flex: 1;
    border-radius: 8px;
    border: 1px solid transparent;
    margin: 0px 15px;
    padding: 10px 20px;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: silver;
    cursor: pointer;
    transition: border-color 0.25s;

    &:hover {
      background-color: #7e7e7e;
      color: white;
  }
  `

  //* search Input.
  export const Input = styled.input`
    padding: 10px 5px;
    border: none;
    border-radius: 5px;
    background-color: silver;
    &:hover {
      background-color: whitesmoke;
    }
  `;

export const SearchInput = ({ type, name, value, onChange, placeholder }) => (
  <Input
    type={type}
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
  />
);

//* span
export const Span = styled.span`
    display: 'flex';
    flex: 1;
    align-content: center;
  `
