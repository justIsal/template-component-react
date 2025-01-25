import React from 'react';
import { Bell, UserCircle } from 'lucide-react';
import Button from '../atoms/Button';

const Header = ({ onLogout }) => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <h1 className="text-2xl font-semibold text-gray-800">Administrator</h1>
        <div className="flex items-center space-x-4">
          <button className="text-gray-500 hover:text-gray-700 ">
            <Bell className="h-6 w-6" />
          </button>
          <div className="relative">
            <button className="flex items-center text-gray-500 hover:text-gray-700 ">
              <UserCircle className="h-8 w-8" />
              <span className="ml-2 text-sm font-medium">John Doe</span>
            </button>
          </div>
          <Button onClick={onLogout} className="bg-red-500 hover:bg-red-600">
            Logout
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
