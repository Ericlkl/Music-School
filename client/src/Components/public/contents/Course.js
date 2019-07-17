import React, { useEffect, useContext } from 'react';

import PageFrame from '../layout/PageFrame';
import bg_img from '../../../assets/img/course_bg.jpg';
import CoursesContext from '../../../context/Courses/CoursesContext';

const CourseContent = props => {
  const {
    name,
    teacher,
    createAt,
    updateAt,
    language,
    price,
    startDate,
    endDate,
    require,
    desc
  } = props.course;

  return (
    <div class='course'>
      <div class='course_features'>
        <h2>What you will learn...</h2>
      </div>

      <div class='course_header-box'>
        <div class='course_header-box_row'>
          <h1 class='course_header-box_title'>{name}</h1>
        </div>

        <div class='course_header-box_row'>
          <h1 class='course_header-box_subtitle'>Subtitle</h1>
        </div>

        <div class='course_header-box_row'>
          <h4 class='course_header-box_teacher'>
            <i class='fas fa-user-tie' /> Teached By : {teacher}
          </h4>
          <h4 class='course_header-box_date'> Last Updated : {updateAt}</h4>
        </div>

        <div class='course_header-box_row'>
          <h4 class='course_header-box_lang'>
            <i class='far fa-comment' />
            Language : {language}
          </h4>
        </div>
      </div>

      <div class='course_card'>
        <img
          className='course_card_img'
          src='https://cdn.lynda.com/course/510645/510645-636431592504296952-16x9.jpg'
          alt='courseImg'
        />
        <h3>Images</h3>
        <h3>A${price}</h3>
        <h3>
          <i class='far fa-clock' /> Start From: {startDate}
        </h3>
        <h3>
          <i class='far fa-calendar-check' /> Completed on: {endDate}{' '}
        </h3>
      </div>

      <div class='course_require'>
        <h4>{require}</h4>
      </div>

      <div class='course_desc'>
        <h2>{desc}</h2>
      </div>
    </div>
  );
};

const Course = props => {
  const courseId = props.match.params.id;

  const { current, fetchCourse, clearCurrent } = useContext(CoursesContext);

  useEffect(() => {
    fetchCourse(courseId);
    return () => clearCurrent();
    // eslint-disable-next-line
  }, []);

  return (
    <PageFrame
      heroImg={bg_img}
      heroTitle='Courses'
      heroSubtitle='Make the change Today!'
    >
      {current._id ? (
        <CourseContent course={current} />
      ) : (
        <div>Loading ....</div>
      )}
    </PageFrame>
  );
};

export default Course;
