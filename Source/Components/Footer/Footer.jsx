import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <p className="text-sm text-gray-500">&copy; 2024 Zidio Learning. All Rights Reserved.</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
          <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
          <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
