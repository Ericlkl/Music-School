import React, { useState } from 'react';

export default ({ onSubmitAction }) => {
  const initState = {
    name: '',
    company: '',
    desc: '',
    place: '',
    date: null,
    tag: '',
    img: ''
  };

  const [event, setEvent] = useState({ ...initState });

  const { name, company, desc, place, date, tag, img } = event;

  const onSubmit = e => {
    e.preventDefault();
    onSubmitAction(event);
  };

  const onChange = e =>
    setEvent({
      ...event,
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
        <label>Image URI</label>
        <input type='text' name='img' value={img} onChange={onChange} />
      </div>

      <input class='ui button' type='submit' value='Submit' />
    </form>
  );
};
