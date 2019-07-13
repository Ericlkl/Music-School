import React, { useState } from 'react';

export default ({ onSubmitAction }) => {
  const initState = {
    name: '',
    desc: '',
    require: '',
    price: 0,
    startDate: undefined,
    endDate: undefined,
    instrument: '',
    img: ''
  };

  const [course, setCourse] = useState({ ...initState });

  const {
    name,
    desc,
    require,
    price,
    startDate,
    endDate,
    instrument,
    img
  } = course;

  const onSubmit = e => {
    e.preventDefault();
    onSubmitAction(course);
  };

  const onChange = e =>
    setCourse({
      ...course,
      [e.target.name]: e.target.value
    });

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
        <label>Image URI</label>
        <input type='text' name='img' value={img} onChange={onChange} />
      </div>

      <input className='ui button' type='submit' value='submit' />
    </form>
  );
};
