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

export const quizResponses = async (student_id) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/responses`);
        console.log(response.data.filter((response) => response.student_id === student_id));
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || 'Quiz responses failed');
    }
};

export const postResponse = async (question, answer, student_id) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/responses`, { question, answer, student: student_id });
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || 'Response failed');
    }
};

export const getComments = async (studentId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/comments/${studentId}`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || 'Comments failed');
    }
};

export const postComments = async (studentId, comment, adminUserName, year, round) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/comments`, { user: studentId, comment, by: adminUserName, year, round });
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || 'Comments failed');
    }
};

export const patchColor = async (studentId, color) => {
    try {
        const response = await axios.patch(`${API_BASE_URL}/details/${studentId}`, { color });
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || 'Color patch failed');
    }
};

export const responseExists = async (studentId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/responses/${studentId}`);
        console.log(response.data);
        console.log(response.data.length != 0);
        return response.data.length != 0;
    } catch (error) {
        throw new Error(error.response.data.message || 'Response check failed');
    }
};