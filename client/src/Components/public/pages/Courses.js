import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageFrame from '../layout/PageFrame';

import bg_img from '../../../assets/img/course_bg.jpg';
import CoursesContext from '../../../context/Courses/CoursesContext';

const CourseCard = ({ course }) => {
  const { _id, name, price, instrument, require, teacher, img } = course;
  let icon = '';

  if (instrument.trim() === 'Piano') icon = 'flaticon-grand-piano';
  else if (instrument.trim() === 'Gita') icon = 'flaticon-acoustic-guitar';
  else if (instrument.trim() === 'violin') icon = 'flaticon-violin';

  return (
    <Link to={`/courses/${_id}`}>
      <div
        style={{
          background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("https://cdn.lynda.com/course/510645/510645-636431592504296952-16x9.jpg") center center/cover`
        }}
        className='course-card'
      >
        <div className='course-card__top'>
          <h4>Level1</h4>
          <div className='course-card__top_classbox'>
            <h4>
              <i className='fas fa-dollar-sign' />
              {price}
            </h4>
          </div>
        </div>

        <div className='course-card__content'>
          <div className='course-card__content_titlebox'>
            <h2>{name}</h2>
            <h3>
              <i className='fas fa-user-tie' />
              {teacher}
            </h3>

            <h3>
              <i className='fas fa-user-tie' />
              {teacher}
            </h3>
          </div>

          <i className={' logo ' + icon} />
        </div>
      </div>
    </Link>
  );
};

const Courses = props => {
  const { courses, fetchCourses } = useContext(CoursesContext);

  useEffect(() => {
    fetchCourses();

    return () => {};
    // eslint-disable-next-line
  }, []);

  return (
    <PageFrame
      heroImg={bg_img}
      heroTitle='Courses'
      heroSubtitle='Make the change Today!'
    >
      <section className='courses'>
        <h1 className='udl-heading'>Includes all Course</h1>
        <div className='courses__content'>
          {courses.map(course => (
            <CourseCard course={course} />
          ))}
        </div>
      </section>
    </PageFrame>
  );
};

export default Courses;
