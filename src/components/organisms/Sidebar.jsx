import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PieChart, Package, Users, Settings, ChevronsLeft, ChevronsRight } from 'lucide-react';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: 'Dashboard', icon: PieChart, path: '/dashboard' },
    { name: 'Products', icon: Package, path: '/products' },
    { name: 'Users', icon: Users, path: '/users' },
    { name: 'Settings', icon: Settings, path: '/settings' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <aside
      className={`bg-gray-800 text-white transition-all duration-300 ease-in-out ${
        collapsed ? 'w-16' : 'w-64'
      }`}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between h-16 px-4">
          {!collapsed && <span className="text-xl font-semibold">Admin Panel</span>}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-1 rounded-full hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
          >
            {collapsed ? (
              <ChevronsRight className="w-6 h-6" />
            ) : (
              <ChevronsLeft className="w-6 h-6" />
            )}
          </button>
        </div>
        <nav className="flex-grow">
          <ul className="px-2 py-4 space-y-2">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`flex items-center p-2 rounded-lg transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  <item.icon className={`w-6 h-6 ${collapsed ? 'mx-auto' : 'mr-3'}`} />
                  {!collapsed && <span>{item.name}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
