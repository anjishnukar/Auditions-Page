import axiosInstance from "./axiosInstance";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const API_BASE_URL = "https://hult.edcnitd.co.in";

export const signup = async (username, email, password, confirmPassword) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/signup`, { username, email, password, confirm_password: confirmPassword });
        return response.data;
    } catch (error) {
        const errorObject = error.response.data;
        const errorMessage = errorObject.username || errorObject.email || errorObject.password;
        throw new Error(errorMessage);
    }
};

export const getAccessToken = () => {
    return localStorage.getItem('accessToken');
};

export const patchInductee = async (fullName, rollNumber, department, gender, year, registrationNumber, phoneNumber, place, domains) => {
    try {
        const token = getAccessToken();
        const studentId = jwtDecode(token).student_id;
        const response = await axiosInstance.patch(`${API_BASE_URL}/details/${studentId}`, { full_name: fullName, rollnumber: rollNumber, department, gender, year, registration_no: registrationNumber, phone_number: phoneNumber, place, domains });
        return response.data;
    } catch (error) {
        const errorObject = error.response.data;
        const errorMessage = Object.entries(errorObject);
        throw new Error(errorMessage || 'Enter your personal details correctly');
    }
};

export const getInducteeDetails = async () => {
    try {
        const response = await axiosInstance.get(`${API_BASE_URL}/details`);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || 'Details failed');
    }
};

export const getInducteeDetailsById = async (id) => {
    try {
        const response = await axiosInstance.get(`${API_BASE_URL}/details/${id}`);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || 'Details failed');
    }
};

export const getQuizQuestions = async () => {
    try {
        const response = await axiosInstance.get(`${API_BASE_URL}/questions`);
        return response.data;
    }
    catch (error) {
        throw new Error(error.response.data.message || 'Questions failed');
    }
};

export const login = async (username, password) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/login`, { username, password });
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || 'Login failed');
    }
};

export const getQuizRespones = async (student_id) => {
    try {
        const response = await axiosInstance.get(`${API_BASE_URL}/responses/${student_id}`);
        const questions = await getQuizQuestions();

        const responses = response.data.map((response) => {
            const question = questions.find((question) => question.id === response.question);
            return { ...response, question: question.question };
        });

        return responses;
    } catch (error) {
        throw new Error(error.response.data.message || 'Quiz responses failed');
    }
};

export const postResponse = async (question, answer, student_id) => {
    try {
        const response = await axiosInstance.post(`${API_BASE_URL}/responses`, { question, answer, student: student_id });
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || 'Response failed');
    }
};

export const getComments = async (studentId) => {
    try {
        const response = await axiosInstance.get(`${API_BASE_URL}/comments/${studentId}`);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || 'Comments failed');
    }
};

export const postComments = async (studentId, comment, adminUserName, year, round) => {
    try {
        const response = await axiosInstance.post(`${API_BASE_URL}/comments`, { user: studentId, comment, by: adminUserName, year, round });
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || 'Comments failed');
    }
};

export const patchColor = async (studentId, color) => {
    try {
        const response = await axiosInstance.patch(`${API_BASE_URL}/details/${studentId}`, { color });
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || 'Color patch failed');
    }
};

export const responseExists = async (studentId) => {
    try {
        const response = await axiosInstance.get(`${API_BASE_URL}/responses/${studentId}`);
        return response.data.length != 0;
    } catch (error) {
        throw new Error(error.response.data.message || 'Response check failed');
    }
};