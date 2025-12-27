import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL;
const apiconnector= axios.create({
    baseURL: API_BASE_URL ? `${API_BASE_URL}/api/user` : 'http://localhost:3000/api/user'
});
export default apiconnector;