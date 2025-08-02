import React from 'react';

function CourseDetails({ courses }) {
  return (
    <ul>
      {courses.map((course, index) => (
        <div key={index}>
          <h3>{course.cname}</h3>
          <h4>{course.date}</h4>
        </div>
      ))}
    </ul>
  );
}

export default CourseDetails;
