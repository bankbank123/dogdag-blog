import { useState, useRef } from 'react';
import axiosClient from '../axiosClient';
import { useNavigate } from 'react-router-dom';
import { useStateContext } from "../ContextProvider.jsx";

const LoginPage = () => {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const { setUser, setToken } = useStateContext()
  const [errors, setErrors] = useState(null)

  const onSubmit = ev => {
    ev.preventDefault()
    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    }
    console.log(payload)
    axiosClient.post('/login', payload)
      .then(({ data }) => {
        setUser(data.user)
        setToken(data.token);
        navigate('/');
      })
      .catch(err => {
        const response = err.response;
        if (response && response.status === 422) {
          setErrors(response.data.errors)
        }
      })
  }

  return (
    <div>
      <h2>Login Page</h2>
      <form>
        <input
          type="Email"
          placeholder="Email"
          ref={emailRef}

        />
        <input
          type="password"
          placeholder="Password"
          ref={passwordRef}
        />
        <button onClick={onSubmit}>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;