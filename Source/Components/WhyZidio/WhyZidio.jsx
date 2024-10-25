import React from 'react';

const WhyZidio = () => {
  return (
    <section className="bg-blue-50 py-12">
      <h2 className="text-center text-3xl font-bold mb-8">Why Choose Zidio?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 container mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-semibold mb-4">Expert Instructors</h3>
          <p>Learn from industry experts with hands-on experience.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-semibold mb-4">Career Guidance</h3>
          <p>Get career advice and opportunities after completing your course.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-semibold mb-4">Internships</h3>
          <p>Gain real-world experience with internships and project work.</p>
        </div>
      </div>
    </section>
  );
};

export default WhyZidio;
