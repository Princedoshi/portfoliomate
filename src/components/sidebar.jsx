import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <div className="bg-gray-200 h-screen w-1/6 border border-gray-800 fixed left-0 top-0 justify-center">
      <h2 className="text-xl font-bold mb-4 pt-4">Portfoliomate</h2>
      <ul className="space-y-8 p-10 flex-col items-center">
        <li>
          <a href="#" className="text-gray-600 hover:text-gray-800 hover:bg-gray-200">
            <FontAwesomeIcon icon={faHome} className="mr-3" />
            Dashboard
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-600 hover:text-gray-800 hover:bg-gray-200">
            <FontAwesomeIcon icon={faUser} className="mr-3" />
            Stakeholders
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-600 hover:text-gray-800 hover:bg-gray-200">
            <FontAwesomeIcon icon={faEnvelope} className="mr-3" />
            Engagements
          </a>
        </li>
      </ul>
      <div className="absolute bottom-0 p-10">
        <ul className="flex-col p-10 items-center space-y-4 ml-3">
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-800 hover:bg-gray-200">
              <FontAwesomeIcon icon={faCog} className="mr-3" />
              Settings
            </a>
          </li>
          <li>
            <a href="#" className="text-red-600  hover:text-gray-800 hover:bg-gray-200">
              <FontAwesomeIcon icon={faSignOutAlt} className="mr-3" />
              Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar

