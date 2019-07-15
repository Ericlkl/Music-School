import React, { useReducer } from 'react';
import axios from 'axios';

import UsersReducer from './UsersReducer';
import UsersContext from './UsersContext';
import {
  FETCH_USER,
  FETCH_USERS,
  CLEAR_USER,
  SET_CURRENT,
  CLEAR_CURRENT
} from '../types';

const uploadAvator = async (avator, id) => {
  const formData = new FormData();
  formData.append('avator', avator);

  await axios.put(`/api/users/${id}/avator`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
};

const UsersState = props => {
  const initialState = {
    users: [],
    current: {
      firstname: '',
      lastname: '',
      email: '',
      address: '',
      facebook: '',
      parent: '',
      avator: undefined
    }
  };

  const [state, dispatch] = useReducer(UsersReducer, initialState);

  const fetchUser = async id => {
    const res = await axios.get(`/api/users/${id}`);
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

  const createUser = async () => {
    const user = { ...state.current, avator: undefined };
    console.log(user);
    const res = await axios.post('/api/users', user);

    if (state.current.avator !== undefined)
      uploadAvator(state.current.avator, res.data.user._id);

    clearUsers();
  };

  const updateUser = async () => {
    const user = { ...state.current };

    if (user.avator !== undefined) uploadAvator(user.avator, user._id);

    delete user.avator;

    await axios.put(`/api/users/${user._id}`, user);

    clearUsers();
  };

  const setCurrent = field => dispatch({ type: SET_CURRENT, payload: field });

  const clearUsers = () => dispatch({ type: CLEAR_USER });
  const clearCurrent = () => dispatch({ type: CLEAR_CURRENT });

  return (
    <UsersContext.Provider
      value={{
        users: state.users,
        current: state.current,
        fetchUser,
        fetchUsers,
        createUser,
        updateUser,
        clearUsers,
        setCurrent,
        clearCurrent
      }}
    >
      {props.children}
    </UsersContext.Provider>
  );
};

export default UsersState;
