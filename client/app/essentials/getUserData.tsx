import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { checkToken } from './checkToken';

export interface UserData {
  id: string;
  username: string;
}

async function getUserData(token: string) {
  try {
    const response = await axios.get('http://127.0.0.1:5000/api/user', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error getting user data', error);
    return null;
  }
}

export const UserData: React.FC = () => {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

    if (token) {
      Promise.all([checkToken(token), getUserData(token)])
        .then(([isValid, data]) => {
          if (isValid && data) {
            setUserData(data);
          }
        })
        .catch(error => {
          console.error('Error checking token or getting user data', error);
        });
    }
  }, []);

  return (
    <div>
      {userData && (
        <div className='nav-user-data'>
          <div className='nav-user-data-username'>
            <span>{userData.username}</span>
          </div>
        </div>
      )}
    </div>
  );
};