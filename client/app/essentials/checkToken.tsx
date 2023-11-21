import axios, { AxiosResponse } from 'axios';

import { api } from '../API';

export interface UserData {
  id: string;
  username: string;
}

export async function checkToken(token: string): Promise<boolean> {
  try {
    const response: AxiosResponse<UserData> = await axios.get(`${api}/api/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.data) {
      return true;
    }
  } catch (error: any) {
    if (error.response && error.response.data === 'Token expired') {
      console.error('Token expired');      
      if (typeof window !== 'undefined') {
        localStorage.removeItem('token');
      }
      return false;
    } else {
      console.error('Error checking token', error);
    }
  }
  return false;
}