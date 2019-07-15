import React, { useContext, useEffect } from 'react';
import CoursesContext from '../../../context/Courses/CoursesContext';

export default ({ onSubmitAction }) => {
  const { current, setCurrent, clearCurrent } = useContext(CoursesContext);

  const {
    name,
    desc,
    require,
    price,
    startDate,
    endDate,
    instrument,
    img
  } = current;

  const onSubmit = e => {
    e.preventDefault();
    onSubmitAction();
  };

  useEffect(
    () => () => clearCurrent(),
    // eslint-disable-next-line
    []
  );

  const onChange = e => setCurrent({ [e.target.name]: e.target.value });

  return (
    <form onSubmit={onSubmit} className='ui form'>
      <div className='field'>
        <label>Course Name</label>
        <input
          type='text'
          name='name'
          required
          value={name}
          onChange={onChange}
        />
      </div>

      <div className='field'>
        <label>Description</label>
        <input
          type='text'
          name='desc'
          required
          value={desc}
          onChange={onChange}
        />
      </div>

      <div className='field'>
        <label>Requirement</label>
        <input type='text' name='require' value={require} onChange={onChange} />
      </div>

      <div className='field'>
        <label>Price</label>
        <input
          type='number'
          name='price'
          required
          value={price}
          onChange={onChange}
        />
      </div>

      <div className='field'>
        <label>Start Date</label>
        <input
          type='date'
          name='startDate'
          required
          value={startDate}
          onChange={onChange}
        />
      </div>

      <div className='field'>
        <label>End Date</label>
        <input
          type='date'
          name='endDate'
          required
          value={endDate}
          onChange={onChange}
        />
      </div>

      <div className='field'>
        <label>Instrument</label>
        <input
          type='text'
          name='instrument'
          required
          value={instrument}
          onChange={onChange}
        />
      </div>

      <div className='field'>
        <label>Image</label>
        <input type='file' name='img' value={img} onChange={onChange} />
      </div>

      <input className='ui button' type='submit' value='submit' />
    </form>
  );
};
