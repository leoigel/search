import axios from 'axios';
const baseURL = "https://restcountries.com/v3.1/";
const axiosInstance = axios.create({
    baseURL: baseURL, // Substitua pela sua URL base
    timeout: 10000,
});

export default axiosInstance;