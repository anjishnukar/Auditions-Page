import axiosInstance from "./axiosInstance";
import mockData from "@/lib/mock_data";
import mockQuestions from "@/lib/mock_question";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const API_BASE_URL = "https://13.233.12.242:8000";

export const signup = async (username, email, password, confirmPassword) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/signup`, { username, email, password, confirm_password: confirmPassword });
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || 'Signup failed');
    }
};

export const getAccessToken = () => {
    return localStorage.getItem('accessToken');
};

export const patchInductee = async (fullName, rollNumber, department, gender, year, registrationNumber, phoneNumber, place, domains) => {
    try {
        const token = getAccessToken();
        const studentId = jwtDecode(token).student_id;
        const response = await axiosInstance.patch(`${API_BASE_URL}/details/${studentId}`, { full_name: fullName, rollnumber: rollNumber, department, gender, year, registration_no: registrationNumber, phone_number: phoneNumber , place, domains});
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || 'Enter your details correctly');
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

export const quizResponses = async (student_id) => {
    try {
        const response = await axiosInstance.post(`${API_BASE_URL}/responses`);
        console.log(response.data.filter((response) => response.student_id === student_id));
        return response.data;
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
        console.log(response.data);
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
        console.log(response.data);
        console.log(response.data.length != 0);
        return response.data.length != 0;
    } catch (error) {
        throw new Error(error.response.data.message || 'Response check failed');
    }
};