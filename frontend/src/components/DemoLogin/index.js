import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './DemoLogin.css';

function DemoLogin() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [credential, setCredential] = useState("demo@user.io");
  const [password, setPassword] = useState("4score7yearsagopw");
  // const [errors, setErrors] = useState({});

  if (sessionUser) return (
    <Redirect to={`/users/${sessionUser.id}`} />
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    // setErrors({});
    return dispatch(sessionActions.login({ credential, password }))
    // .catch(
    //   async (res) => {
    //     const data = await res.json();
    //     if (data && data.errors) setErrors(data.errors);
    //   }
    // );
  };

  return (
    <div className='formContainer'>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Email
            <input
              type="text"
              value={credential}
              defaultValue={credential}
              // onChange={(e) => setCredential(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              type="password"
              value={password}
              defaultValue={password}
              // onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default DemoLogin;
