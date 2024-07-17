import axios from 'axios';

const API_BASE_URL = 'https://libraries.io/api';
const API_KEY = process.env.REACT_APP_API_KEY;

export interface Module {
    name: string;
    stars: number;
    rank: number;
}

export interface ApiResponse {
    results: Module[];
    total: number;
}

export const searchModules = async (query: string, page: number = 1): Promise<ApiResponse> => {
    try {
        const response = await axios.get(`${API_BASE_URL}/search`, {
            params: {
                q: query,
                api_key: API_KEY,
                page,
            },
        });

        const results = response.data.map((item: any) => ({
            name: item.name,
            stars: item.stars,
            rank: item.rank,
        }));

        return {
            results,
            total: response.data.length,
        };
    } catch (error) {
        console.error('Error fetching modules:', error);
        throw error;
    }
};
