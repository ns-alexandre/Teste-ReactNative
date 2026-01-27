import {useState, useEffect} from 'react';
import api from '../services/api';

// Definindo a interface aqui (Padrão TypeScript)
export interface Article {
  id: number;
  title: string;
  summary: string;
  image_url: string;
  url: string;
}

export const useSpaceNews = () => {
  const [news, setNews] = useState<Article[]>([]);
  // Apostilas costumam tratar erro com console.log ou catch simples, então mantive esse padrão
  const [loading, setLoading] = useState(true);

  const fetchNews = async () => {
    try {
      const response = await api.get('/articles/');
      setNews(response.data.results);
    } catch (error) {
      console.log("Erro na busca: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return {news, loading};
};