import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import Input from './Input';
import { Link } from 'react-router-dom';

const Form = styled.form`
  background-color: ${props => props.theme.colors.secondary};
  padding: 1rem;
  margin: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 20rem;
  border: 10px solid ${props => props.theme.colors.primary};
  h1 {
    font-size: 1.2rem;
  }
`;

const Button = styled.button`
  width: 10rem;
  border-radius: 1rem;
  border: 0;
  margin: 0.4rem 0 0 0;
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  border: 2px solid ${props => props.theme.colors.primary};
  &:hover {
    border: 2px solid white;
  }
`;

const TextBox = styled.div`
  margin-top: 15px;
`;

function InputForm({ pullValues, inputNames, buttonName }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (name !== '') {
      pullValues({ email, name, password });
    } else {
      pullValues({ email, password });
    }
  };

  const pullValue = newValue => {
    switch (newValue.name) {
      case 'email':
        setEmail(newValue.value);
        break;
      case 'name':
        setName(newValue.value);
        break;
      case 'password':
        setPassword(newValue.value);
        break;
      default:
        console.log('Error');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      {Object.values(inputNames).map((name, i) => (
        <Input
          key={i}
          valueName={name}
          pullValue={pullValue}
          headerName="yes"
        />
      ))}

      <Button type="submit">{buttonName}</Button>
      {buttonName !== 'Login' ? (
        <TextBox>
          Already have an account? <Link to="/login">Log in</Link>
        </TextBox>
      ) : (
        <TextBox>
          Don't have an account? <Link to="/register">Create account</Link>
        </TextBox>
      )}
    </Form>
  );
}

export default InputForm;
