import axios from 'axios';

import { API } from '../../config/API';

export async function searchMovies(searchValue: string) {
  try {
    const response = await axios.get(`${API}/search?query=${searchValue}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}