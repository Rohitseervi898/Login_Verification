import axios from 'axios';
import dotenv from "dotenv";
dotenv.config();

const API_BASE_URL = process.env.API;
const apiconnector= axios.create({baseURL:API_BASE_URL});
export default apiconnector;