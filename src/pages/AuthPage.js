import React from 'react';
import styled from 'styled-components';
import InputForm from '../components/InputForm';
import { loginUser, registerUser } from '../network/lib/user';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Wrapper = styled.div`
  background-color: ${props => props.theme.colors.background};
  display: flex;
  justify-content: center;
  color: ${props => props.theme.colors.text};
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: flex-start;
`;

function AuthPage({ authPageName }) {
  const navigate = useNavigate();
  const pullValues = async data => {
    try {
      let res;
      if (authPageName === 'Login') {
        res = await loginUser(data);
      } else {
        res = await registerUser(data);
      }
      navigate('/dashboard');
      toast.success('Logged in!', {
        position: 'bottom-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
      console.log(res);
    } catch (error) {
      console.log(error.response);
      toast.error(error.response.data.message, {
        position: 'bottom-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    }
  };

  const inputNames =
    authPageName === 'Login'
      ? ['email', 'password']
      : ['name', 'email', 'password'];

  return (
    <Wrapper>
      <InputForm
        inputNames={inputNames}
        pullValues={pullValues}
        buttonName={authPageName}
      />
    </Wrapper>
  );
}

export default AuthPage;
