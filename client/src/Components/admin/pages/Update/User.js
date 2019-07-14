import axios from 'axios';
import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import Form from '../../Forms/User';
import AdminPageFrame from '../../layout/AdminPageFrame';
import UsersContext from '../../../../context/Users/UsersContext';

const User = props => {
  const { current, fetchUser } = useContext(UsersContext);

  useEffect(() => {
    const userId = props.match.params.id;
    fetchUser(userId);
    // eslint-disable-next-line
  }, []);

  const onSubmit = async user => {
    try {
      if (user.avator) {
        const formData = new FormData();
        formData.append('avator', user.avator);

        const res = await axios.post('/api/users/avator', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        console.log('Send Avator Success');
        console.log(res.data);
      }
      delete user.avator;

      const res = await axios.put(`/api/users/${user._id}`, user);
      console.log('Update Success');
      console.log(res.data);
      props.history.push('/admin/users');
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <AdminPageFrame>
      <div className='ui'>
        <h1 style={{ margin: '1rem 0rem' }} className='ui header breadcrumb'>
          <Link to='/admin/users' className='section'>
            Users
          </Link>
          <i className='right angle icon divider' />
          <div className='active section'>Update</div>
        </h1>

        {_.isEmpty(current) ? null : (
          <Form onSubmitAction={onSubmit} current={current} />
        )}
      </div>
    </AdminPageFrame>
  );
};

export default User;
