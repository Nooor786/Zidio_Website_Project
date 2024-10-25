import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Card = ({ course }) => {
   
  const [showFullDescription, setShowFullDescription] = useState(false);

  let description = course.description;

  if (!showFullDescription) {
    description = description.substring(0,6) + '...';
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
      <p className="text-gray-600">{course.level}</p>
      <p className="text-gray-500 mb-4">{description}</p>
      <button
          onClick={() => setShowFullDescription((prevState) => !prevState)}
          className='text-indigo-500 mb-5 hover:text-indigo-600'
        >
          {showFullDescription ? 'Less' : 'More'}
        </button>
      <Link to = "/JobsPage" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">
        Enroll Now
      </Link>
    </div>
  );
};

export default Card;
