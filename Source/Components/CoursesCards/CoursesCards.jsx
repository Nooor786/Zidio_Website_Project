import React from 'react';
import Card from '../Card/Card';
import courses from '../../Courses.json';


const CoursesCards = () => {
  return (
    <section className="bg-gray-100 py-8">
      <h2 className="text-center text-3xl font-bold mb-8">Popular Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto">
        {courses.map((course) => (
          <Card key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
};

export default CoursesCards;
