import axios from 'axios';
import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import Form from '../../Forms/User';
import AdminPageFrame from '../../layout/AdminPageFrame';
import UsersContext from '../../../../context/Users/UsersContext';
import MsgBoxContext from '../../../../context/MsgBox/MsgboxContext';

const User = props => {
  const { current, fetchUser, updateUser, clearUsers } = useContext(
    UsersContext
  );

  const { showMsgBox } = useContext(MsgBoxContext);

  useEffect(() => {
    const userId = props.match.params.id;
    fetchUser(userId);

    return () => {
      clearUsers();
    };
    // eslint-disable-next-line
  }, []);

  const onSubmit = async () => {
    try {
      await updateUser();
      showMsgBox('positive', 'Update Successfully !');
      props.history.push('/admin/users');
    } catch (error) {
      showMsgBox('negative', error.message);
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

        {_.isEmpty(current) ? null : <Form onSubmitAction={onSubmit} />}
      </div>
    </AdminPageFrame>
  );
};

export default User;
