import LongAnswer from '../components/FormComponents/LongAnswer';
import ShortAnswer from '../components/FormComponents/ShortAnswer';
import Radio from '../components/FormComponents/Radio';
import Navbar from '../components/Navbar';
import { useState, useEffect } from 'react';
import { getQuizQuestions, postResponse, responseExists } from '@/services/api';
import { jwtDecode } from 'jwt-decode';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const QuizPage = () => {
    const [questions, setQuestions] = useState([]);
    const [studentId, setStudentId] = useState(null);
    const [answers, setAnswers] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const storedToken = localStorage.getItem('accessToken');
        if (storedToken) {
            const decoded = jwtDecode(storedToken);
            setStudentId(decoded.student_id);
            console.log(decoded.student_id);
            responseExists(decoded.student_id).then((res) => {
                res ? navigate("/") : NaN;
            })
        }

        const fetchQuestions = async () => {
            const response = await getQuizQuestions();
            setQuestions(response);
        };

        fetchQuestions();

    }, [studentId]);

    const handleAnswerChange = (questionId, answer) => {
        console.log('Question ID:', questionId);
        console.log('Answer:', answer);
        setAnswers(prevAnswers => {
            const updatedAnswers = {
                ...prevAnswers,
                [questionId]: answer
            };
            console.log('Updated Answers:', updatedAnswers);
            return updatedAnswers;
        });
    };

    const handleSubmit = async () => {
        try {
            console.log(answers);
            for (const questionId in answers) {
                const answer = answers[questionId];
                console.log(questionId, answer, studentId);
                console.log(await postResponse(questionId, answer, studentId));
            }
            toast.success('Responses submitted successfully');
            navigate("/");
        } catch (error) {
            toast.error(error.message);
        }
    };

    const renderQuestion = (question) => {
        switch (question.type) {
            case 'text':
                if (question.additional_data.long_answer) {
                    return <LongAnswer question={question.question} key={question.id} onChange={(answer) => handleAnswerChange(question.id, answer)} />;
                } else {
                    return <ShortAnswer question={question.question} key={question.id} onChange={(answer) => handleAnswerChange(question.id, answer)} />;
                }
            case 'options':
                return (
                    <Radio
                        question={question.question}
                        options={Object.values(question.additional_data)}
                        key={question.id}
                        onChange={(answer) => handleAnswerChange(question.id, answer)}
                    />
                );
            default:
                return null;
        }
    };

    return (
        <div className="flex flex-col bg-gray-900 min-h-screen py-8 justify-center items-center">
            <Navbar />
            <div className='h-24'></div>
            <div className="fixed top-48 left-96 w-72 h-72 bg-purple-300 rounded-full filter blur-xl opacity-30 animate-blob"></div>
            <div className="fixed top-96 right-96 w-72 h-72 bg-indigo-300 rounded-full filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="fixed top-72 left-72 w-72 h-72 bg-pink-300 rounded-full filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
            <div>
                {questions.map(renderQuestion)}
                <div>
                    <button className="p-[3px] w-fit relative" onClick={handleSubmit}>
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                        <div className="px-8 py-2 bg-gray-900 rounded-[6px] font-raleway font-bold relative group transition duration-200 text-white hover:bg-transparent">
                            Submit
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default QuizPage;
