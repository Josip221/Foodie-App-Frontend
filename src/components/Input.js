import React from 'react';
import styled from 'styled-components';

const Inputy = styled.input`
  height: 1.6rem;
  border-radius: 1rem;
  background-color: ${props => props.theme.colors.background};
  margin: 0.4rem 0;
  border: 0;
  text-align: center;
  width: 250px;
  padding: 0 0.5rem 0 0;
`;

function Input({ valueName, pullValue, headerName }) {
  return (
    <>
      {headerName && <h1>{valueName[0].toUpperCase() + valueName.slice(1)}</h1>}
      <Inputy
        name={valueName}
        type={valueName}
        onChange={e => {
          pullValue({ name: valueName, value: e.target.value });
        }}
        placeholder={`Enter ${valueName}`}
      ></Inputy>
    </>
  );
}

export default Input;
