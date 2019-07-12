import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

import AdminPageFrame from '../../layout/AdminPageFrame';
import MsgboxContext from '../../../../context/MsgBox/MsgboxContext';

const Row = ({ question, fetchFunc }) => {
  const { _id, provider, email, phoneNumber, message, createdAt } = question;

  const { showMsgBox } = useContext(MsgboxContext);

  const onDelete = async () => {
    try {
      await axios.delete(`/api/questions/${_id}`);
      showMsgBox('positive', 'Question Deleted successfully');
      await fetchFunc();
    } catch (error) {
      showMsgBox('negative', 'Error! Please try again later');
    }
  };

  return (
    <tr>
      <td>{provider}</td>
      <td>{email}</td>
      <td>{phoneNumber}</td>
      <td>{message}</td>
      <td>{createdAt}</td>
      <td>
        <button onClick={onDelete} className='ui red basic button'>
          Delete
        </button>
      </td>
    </tr>
  );
};
const Table = () => {
  const [ques, SetQues] = useState([]);
  const { showMsgBox } = useContext(MsgboxContext);

  const fetchQuestions = async () => {
    try {
      const res = await axios.get('/api/questions');
      SetQues(res.data);
    } catch (error) {
      showMsgBox('negative', 'Server Error!');
    }
  };

  useEffect(() => {
    if (ques.length === 0) {
      fetchQuestions();
    }

    return () => {};
    // eslint-diable-next-line
  }, [ques]);

  return (
    <table className='ui orange striped table'>
      <thead>
        <tr>
          <th>Provider</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Message</th>
          <th>Date</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {ques.map(question => (
          <Row
            question={question}
            key={question._id}
            fetchFunc={fetchQuestions}
          />
        ))}
      </tbody>
    </table>
  );
};

const Questions = () => {
  return (
    <AdminPageFrame>
      <div className='ui'>
        <h1 className='ui left floated header'>Questions</h1>
      </div>
      <Table />
    </AdminPageFrame>
  );
};

export default Questions;
