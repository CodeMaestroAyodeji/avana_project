import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import axios from 'axios'; // Import axios for HTTP requests
import './Dashboard.css'; // Import your CSS file

const Dashboard = () => {
  const [message, setMessage] = useState('');
  const [stats, setStats] = useState({ users: 0, posts: 0, comments: 0 }); // Example stats

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        window.location.href = '/login'; // Redirect if no token found
      }

      try {
        const response = await axios.get('http://localhost:5000/api/users/dashboard', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setMessage(response.data.message);
        setStats({
          users: response.data.stats.users,
          posts: response.data.stats.posts,
          comments: response.data.stats.comments,
        });
      } catch (error) {
        console.error('Error fetching dashboard data', error);
      }
    };

    fetchData();
  }, []);

  const logout = () => {
    localStorage.removeItem('token'); // Remove token from localStorage
    window.location.href = '/login'; // Redirect to login
  };

  return (
    <div className='dashboard-container'>
      <h2>Dashboard</h2>
      <p>{message}</p>

      <div className='dashboard-stats'>
        <div className='stat-item'>
          <h3>Users</h3>
          <p>{stats.users}</p>
        </div>
        <div className='stat-item'>
          <h3>Posts</h3>
          <p>{stats.posts}</p>
        </div>
        <div className='stat-item'>
          <h3>Comments</h3>
          <p>{stats.comments}</p>
        </div>
      </div>

      <div className='dashboard-actions'>
        <h3>Actions</h3>
        <button className='action-btn' onClick={logout}>Logout</button>
        {/* Add more action buttons here if needed */}
      </div>
    </div>
  );
};

export default Dashboard;
