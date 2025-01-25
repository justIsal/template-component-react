import React from 'react';
import AdminLayout from '../components/templates/AdminLayout';
import CardItem from '../components/molecules/CardItem';

const Dashboard = ({ onLogout }) => {
  return (
    <AdminLayout onLogout={onLogout}>
      <div className="w-full gap-8 flex flex-col items-center">
        <div className="w-full col-span-full md:col-span-1 lg:col-span-2">
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Quick Stats</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-100 p-4 rounded-lg">
                <p className="text-sm text-blue-600 font-medium">Total Users</p>
                <p className="text-2xl font-bold">1,234</p>
              </div>
              <div className="bg-green-100 p-4 rounded-lg">
                <p className="text-sm text-green-600 font-medium">Total Products</p>
                <p className="text-2xl font-bold">567</p>
              </div>
              <div className="bg-yellow-100 p-4 rounded-lg">
                <p className="text-sm text-yellow-600 font-medium">Total Orders</p>
                <p className="text-2xl font-bold">89</p>
              </div>
              <div className="bg-purple-100 p-4 rounded-lg">
                <p className="text-sm text-purple-600 font-medium">Total Revenue</p>
                <p className="text-2xl font-bold">$12,345</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-1 md:gap-2 w-full justify-center grid-cols-2 lg:grid-cols-3">
          <CardItem />
          <CardItem />
          <CardItem />
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
