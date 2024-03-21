import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './../styles.css';

function UserInfo() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortedUsers, setSortedUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
        setSortedUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, []);

  const handleSearch = () => {
    const filteredUsers = users.filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setSortedUsers(filteredUsers);
  };

  const handleSort = () => {
    const sorted = [...sortedUsers].sort((a, b) => a.name.localeCompare(b.name));
    setSortedUsers(sorted);
  };

  return (
    <div className="user-info-container">
      <input type="text" placeholder="Search by name" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      <button onClick={handleSort}>Sort by Name</button>
      <ul className="user-list">
        {sortedUsers.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserInfo;
