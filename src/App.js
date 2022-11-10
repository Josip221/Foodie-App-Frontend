import { ThemeProvider } from 'styled-components';
import Layout from './components/Layout';
import AuthPage from './pages/AuthPage';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <ThemeProvider
      theme={{
        colors: {
          primary: '#428FA1',
          secondary: '#73B9CA',
          background: '#A4D7E3',
          text: 'white',
        },
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="login" element={<AuthPage authPageName="Login" />} />
            <Route
              path="register"
              element={<AuthPage authPageName="Register" />}
            />
            <Route path="/dashboard" element={<HomePage />} />
          </Route>
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
