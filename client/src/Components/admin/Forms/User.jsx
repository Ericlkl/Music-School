import React, { useContext } from 'react';
import UsersContext from '../../../context/Users/UsersContext';
import _ from 'lodash';

export default ({ onSubmitAction }) => {
  const { current, setCurrent } = useContext(UsersContext);
  const { firstname, lastname, email, address, facebook, parent } = current;

  const onSubmit = e => {
    e.preventDefault();
    onSubmitAction();
  };

  const onChange = e => {
    setCurrent({
      [e.target.name]: e.target.value
    });
  };

  const onUpload = e =>
    setCurrent({
      [e.target.name]: e.target.files[0]
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
        <input type='text' name='address' value={address} onChange={onChange} />
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
        <input type='file' name='avator' onChange={onUpload} />
      </div>

      <input className='ui button' type='submit' value='Submit' />
    </form>
  );
};
