import React from "react";

const CourseCard = ({ name, thumbnail, progress }) => {
  return (
    <div>
      <a href="/link-to-course">
        <figure>
          <div>&gt;</div>
          <img src={thumbnail} alt={name} />
        </figure>
        <div>
          <p>{name}</p>
          <div>Progress {progress}</div>
        </div>
      </a>
    </div>
  );
};

export default CourseCard;
