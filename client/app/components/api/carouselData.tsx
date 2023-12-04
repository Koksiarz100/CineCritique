import { useState, useEffect } from 'react';
import axios from 'axios';
import { API } from '../../config/API';

async function fetchCategoryData(category: string) {
  try {
    const response = await axios.get(`${API}/api`, {
      params: {
        categories: category
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
      let result: Record<string, any> = {};
      for (const category of categories) {
        const response = await fetchCategoryData(category);
        result[category] = response;
      }
      setData(result);
      setLoading(false);
    };
    fetchData();
  }, [categories]);

  return { data, loading };
}