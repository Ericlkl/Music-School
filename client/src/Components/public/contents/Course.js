import React, { useEffect } from 'react';

import PageFrame from '../layout/PageFrame';
import bg_img from '../../../assets/img/course_bg.jpg';
// import CoursesContext from '../../../context/Courses/CoursesContext';

const Courses = props => {
  // const { current } = useContext(CoursesContext);

  useEffect(() => {
    return () => {};
    // eslint-disable-next-line
  }, []);

  return (
    <PageFrame
      heroImg={bg_img}
      heroTitle='Courses'
      heroSubtitle='Make the change Today!'
    >
      <div className='course-content'>
        <div className='course-header-box'>
          <h3>title</h3>
          <h4>Subtitle</h4>
          <h4>Teach Name</h4>
          <h4>Create Date</h4>
          <h4>Language</h4>
        </div>

        <div className='course-content'>
          <div className='course-features' />

          <div className='course-simple'>
            <h3>Images</h3>
            <h4>Price</h4>
          </div>

          <div className='course-require'>
            <h4>Requirement</h4>
          </div>

          <div className='course-desc'>
            <h2>Description</h2>
          </div>
        </div>
      </div>
    </PageFrame>
  );
};

export default Courses;
