import { useState, useEffect } from 'react';
import axios from 'axios';
import { API } from '../../config/API';

async function fetchCategoryData(categories: string[]) {
  try {
    const response = await axios.get(`${API}/api`, {
      params: {
        categories: categories.join(',')
      }
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return {};
  }
}

export function useFetchData(categories: string[]) {
  const [data, setData] = useState<Record<string, any>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchCategoryData(categories);
      if (response && Object.keys(response).length > 0) {
        setData(response);
        setLoading(false);
      }
    };
    fetchData();
  }, [categories]);

  return { data, loading };
}