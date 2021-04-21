import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api-galaxy-map.herokuapp.com',
});

export default api;