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
    console.log('Current User');
    console.log(current);

    fetchUser(userId);
    // eslint-disable-next-line
  }, []);

  const onSubmit = user => {
    console.log(user);
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
