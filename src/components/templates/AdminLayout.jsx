import React from 'react';
import Header from '../organisms/Header';
import Sidebar from '../organisms/Sidebar';

const AdminLayout = ({ children, onLogout }) => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header onLogout={onLogout} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <div className="w-full p-3">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
