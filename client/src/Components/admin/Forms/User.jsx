import React, { useState } from 'react';
import _ from 'lodash';

export default ({ onSubmitAction, current }) => {
  let initState = {
    firstname: '',
    lastname: '',
    email: '',
    address: '',
    facebook: '',
    parent: '',
    avator: ''
  };

  if (!_.isEmpty(current)) {
    initState = { ...current };
  }

  const [user, setUser] = useState({ ...initState });

  const {
    firstname,
    lastname,
    email,
    address,
    facebook,
    parent,
    avator
  } = user;

  const onSubmit = e => {
    e.preventDefault();
    console.log(user);
    onSubmitAction(user);
  };

  const onChange = e =>
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });

  return (
    <form onSubmit={onSubmit} className='ui form'>
      <div className='field'>
        <label>first Name</label>
        <input
          type='text'
          name='firstname'
          required
          value={firstname}
          onChange={onChange}
        />
      </div>

      <div className='field'>
        <label>Last Name</label>
        <input
          type='text'
          name='lastname'
          required
          value={lastname}
          onChange={onChange}
        />
      </div>

      <div className='field'>
        <label>Email</label>
        <input
          type='email'
          name='email'
          required
          value={email}
          onChange={onChange}
        />
      </div>

      <div className='field'>
        <label>Address</label>
        <input
          type='text'
          name='address'
          required
          value={address}
          onChange={onChange}
        />
      </div>

      <div className='field'>
        <label>Facebook</label>
        <input
          type='text'
          name='facebook'
          value={facebook}
          onChange={onChange}
        />
      </div>

      <div className='field'>
        <label>Parent</label>
        <input type='text' name='parent' value={parent} onChange={onChange} />
      </div>

      <div className='field'>
        <label>Avator</label>
        <input type='text' name='avator' value={avator} onChange={onChange} />
      </div>

      <input className='ui button' type='submit' value='Submit' />
    </form>
  );
};
