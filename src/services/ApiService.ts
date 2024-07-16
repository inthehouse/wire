import axios from 'axios';

const API_BASE_URL = 'https://libraries.io/api';
const API_KEY = process.env.REACT_APP_API_KEY;

export const searchModules = async (query: string, page: number = 1) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/search`, {
            params: {
                q: query,
                api_key: API_KEY,
                page,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching modules:', error);
        throw error;
    }
};