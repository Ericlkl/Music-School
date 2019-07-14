import React, { useReducer } from 'react';
import axios from 'axios';

import UsersReducer from './UsersReducer';
import UsersContext from './UsersContext';
import { FETCH_USER, FETCH_USERS, CLEAR_USER } from '../types';

const UsersState = props => {
  const initialState = {
    users: [],
    current: {}
  };

  const [state, dispatch] = useReducer(UsersReducer, initialState);

  const fetchUser = async id => {
    const res = await axios.get(`/api/users/${id}`);
    console.log(res.data);
    dispatch({
      type: FETCH_USER,
      payload: res.data
    });
  };

  const fetchUsers = async () => {
    const res = await axios.get(`/api/users/`);
    dispatch({
      type: FETCH_USERS,
      payload: res.data
    });
  };

  const clearUsers = () => dispatch({ type: CLEAR_USER });

  return (
    <UsersContext.Provider
      value={{
        users: state.users,
        current: state.current,
        fetchUser,
        fetchUsers,
        clearUsers
      }}
    >
      {props.children}
    </UsersContext.Provider>
  );
};

export default UsersState;
