import React from 'react';

const Hero = () => {
  const user = {
    name: 'Pratik Jain',
    position: 'Manager',
    profileImage: 'image.jpg',
  };

  return (
    <div className="text-green-500 w-5/6 ml-auto">
      <div className="bg-gray-200 p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Stakeholder Management</h1>
        <div className="flex items-center">
          <img
            src={user.profileImage}
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover mr-2"
          />
          <div className='flex flex-col'>
          <div className="font-bold">{user.name}</div>
          <div>{user.position}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
