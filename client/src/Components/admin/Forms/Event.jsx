import React, { useEffect, useContext } from 'react';
import EventContext from '../../../context/Events/EventsContext';

export default ({ onSubmitAction }) => {
  const { setCurrent, clearCurrent, current } = useContext(EventContext);

  const { name, company, desc, place, date, tag, img } = current;

  useEffect(
    () => () => clearCurrent(),
    // eslint-disable-next-line
    []
  );

  const onSubmit = e => {
    e.preventDefault();
    onSubmitAction();
  };

  const onChange = e =>
    setCurrent({
      [e.target.name]: e.target.value
    });

  return (
    <form onSubmit={onSubmit} className='ui form'>
      <div className='field'>
        <label>Event Name</label>
        <input
          type='text'
          name='name'
          required
          value={name}
          onChange={onChange}
        />
      </div>

      <div className='field'>
        <label>Company</label>
        <input
          type='text'
          name='company'
          required
          value={company}
          onChange={onChange}
        />
      </div>

      <div className='field'>
        <label>Description</label>
        <input
          type='text'
          minLength='4'
          name='desc'
          required
          value={desc}
          onChange={onChange}
        />
      </div>

      <div className='field'>
        <label>Place</label>
        <input
          type='text'
          name='place'
          required
          value={place}
          onChange={onChange}
        />
      </div>

      <div className='field'>
        <label>Date</label>
        <input
          type='date'
          name='date'
          required
          value={date}
          onChange={onChange}
        />
      </div>

      <div className='field'>
        <label>Tag</label>
        <input type='text' name='tag' value={tag} onChange={onChange} />
      </div>

      <div className='field'>
        <label>Image</label>
        <input type='file' name='img' value={img} onChange={onChange} />
      </div>

      <input className='ui button' type='submit' value='Submit' />
    </form>
  );
};
