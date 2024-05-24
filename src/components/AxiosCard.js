// src/components/AxiosCard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AxiosCard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching data with Axios:', error));
  }, []);

  return (
    <div>
      <h2 className="mt-5">Cards - Axios</h2>
      <div className="row">
        {users.map(user => (
          <div className="col-md-4" key={user.id}>
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <p className="card-text">{user.email}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AxiosCard;
