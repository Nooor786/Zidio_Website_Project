import React from 'react';

const testimonials = [
  { name: 'John Doe', feedback: 'Zidio helped me land my dream job in tech!' },
  { name: 'Jane Smith', feedback: 'The best place to learn web development!' }
];

const Testimonials = () => {
  return (
    <section className="bg-gray-100 py-8">
      <h2 className="text-center text-3xl font-bold mb-8">What Our Students Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 container mx-auto">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
            <p className="italic text-lg">"{testimonial.feedback}"</p>
            <h4 className="mt-4 font-semibold">- {testimonial.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
