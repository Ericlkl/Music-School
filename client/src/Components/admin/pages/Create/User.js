import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import Form from '../../Forms/User';
import AdminPageFrame from '../../layout/AdminPageFrame';
import UsersContext from '../../../../context/Users/UsersContext';
import MsgBoxContext from '../../../../context/MsgBox/MsgboxContext';

const User = props => {
  const { createUser, clearCurrent } = useContext(UsersContext);

  const { showMsgBox } = useContext(MsgBoxContext);

  useEffect(
    () => () => clearCurrent(),
    // eslint-disable-next-line
    []
  );

  const onSubmit = async () => {
    try {
      await createUser();
      showMsgBox('positive', 'Create User Successfully !');
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
          <div className='active section'>Create</div>
        </h1>

        <Form onSubmitAction={onSubmit} />
      </div>
    </AdminPageFrame>
  );
};

export default User;
