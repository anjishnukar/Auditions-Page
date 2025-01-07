import axios from "axios";
import mockData from "@/lib/mock_data";

const API_BASE_URL = "http://localhost:8000";

export const getInducteeDetails = async () => {
    if (import.meta.env.VITE_APP_ENV === 'production') {
        const response = await axios.get(`${API_BASE_URL}/details`);
        return response.data;
    }
    // development
    return mockData; 
};