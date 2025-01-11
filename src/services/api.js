import axios from "axios";
import mockData from "@/lib/mock_data";
import mockQuestions from "@/lib/mock_question";

const API_BASE_URL = "http://13.233.12.242:8000/";

export const getInducteeDetails = async () => {
    if (import.meta.env.VITE_APP_ENV === 'production') {
        const response = await axios.get(`${API_BASE_URL}/details`);
        return response.data;
    }
    // development
    return mockData;
};

export const getInducteeDetailsById = async (id) => {
    if (import.meta.env.VITE_APP_ENV === 'production') {
        const response = await axios.get(`${API_BASE_URL}/details/${id}`);
        return response.data;
    }
    // development
    return mockData.find((inductee) => inductee.id === parseInt(id, 10));
};

export const getQuizQuestions = async () => {
    if (import.meta.env.VITE_APP_ENV === 'production') {
        const response = await axios.get(`${API_BASE_URL}/questions`);
        return response.data;
    }
    // development
    return mockQuestions;
};

export const login = async (username, password) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/login`, { username, password });
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || 'Login failed');
    }
};
