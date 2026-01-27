import axios from 'axios';

// Criação da instância do Axios conforme padrão de serviços
const api = axios.create({
  baseURL: 'https://api.spaceflightnewsapi.net/v4/articles',
});

export default api;