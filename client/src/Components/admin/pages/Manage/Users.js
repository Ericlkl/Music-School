import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import AdminPageFrame from '../../layout/AdminPageFrame';
import UsersContext from '../../../../context/Users/UsersContext';
import MsgboxContext from '../../../../context/MsgBox/MsgboxContext';

const Row = ({ user, onDelete }) => {
  const {
    _id,
    firstname,
    lastname,
    email,
    address,
    facebook,
    parent,
    type,
    createdAt
  } = user;

  return (
    <tr>
      <td>{firstname}</td>
      <td>{lastname}</td>
      <td>{email}</td>
      <td>{address}</td>
      <td>{facebook}</td>
      <td>{parent}</td>
      <td>{type}</td>
      <td>{createdAt.toString()}</td>
      <td>
        <div className='ui basic buttons'>
          <Link className='ui blue basic button' to={`/admin/users/${_id}`}>
            Update
          </Link>
          {type !== 'Admin' ? (
            <button
              onClick={() => onDelete(_id)}
              className='ui red basic button'
            >
              Delete
            </button>
          ) : null}
        </div>
      </td>
    </tr>
  );
};

const Table = () => {
  const { users, fetchUsers } = useContext(UsersContext);
  const { showMsgBox } = useContext(MsgboxContext);

  const onDelete = async _id => {
    try {
      await axios.delete(`/api/users/${_id}`);
      showMsgBox('positive', 'User Deleted successfully');
      fetchUsers();
    } catch (error) {
      showMsgBox('negative', 'Error! Please try again later');
    }
  };

  useEffect(() => {
    console.log('Execute!');
    fetchUsers();

    return () => {};
    // eslint-diable-next-line
  }, []);

  return (
    <table className='ui orange striped table'>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>Facebook</th>
          <th>Parent</th>
          <th>Type</th>
          <th>Created At</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {users.map(user => (
          <Row user={user} onDelete={onDelete} key={user._id} />
        ))}
      </tbody>
    </table>
  );
};

const Users = () => {
  return (
    <AdminPageFrame>
      <div className='ui'>
        <h1 className='ui left floated header'>Users</h1>
      </div>
      <Table />
    </AdminPageFrame>
  );
};

export default Users;
