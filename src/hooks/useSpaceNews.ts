import { useState, useEffect } from 'react';
import api from '../services/api';

//Definindo uma notícia
export interface Article {
  id: number;
  title: string;
  summary: string;
  image_url: string;
  url: string;
}

export const useSpaceNews = () => {
  const [news, setNews] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Busca notícias na API
  const fetchArticles = async () => {
    try {
      setLoading(true); 
      setError(false);
      const response = await api.get('/');
      setNews(response.data.results);
    } catch (err) {
      console.log(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return {news, loading, error, refetch: fetchArticles};
};