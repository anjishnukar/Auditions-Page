import LongAnswer from '../components/FormComponents/LongAnswer';
import ShortAnswer from '../components/FormComponents/ShortAnswer';
import Radio from '../components/FormComponents/Radio';
import Navbar from '../components/Navbar';
import { useState, useEffect } from 'react';
import { getQuizQuestions, patchInductee, postResponse, responseExists } from '@/services/api';
import { jwtDecode } from 'jwt-decode';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Dropdown from '@/components/FormComponents/Dropdown';
import SliderForm from '@/components/FormComponents/SliderForm';

const QuizPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [studentId, setStudentId] = useState(null);
    const [answers, setAnswers] = useState({});
    const [rollNumber, setRollNumber] = useState(null);
    const [department, setDepartment] = useState(null);
    const [fullName, setFullName] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState(null);
    const [year, setYear] = useState(null);
    const [registrationNumber, setRegistrationNumber] = useState(null);
    const [gender, setGender] = useState(null);
    const [domain, setDomain] = useState(null);
    const [placeOfResidence, setPlaceOfResidence] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        console.log('%c ___________  _____ \n|  ___|  _  \/  __ \\\n| |__ | | | || /  \/\n|  __|| | | || |    \n| |___| |/ / | \\__/\\\n\\____/|___/   \\____/', 'font-family: monospace; color: green; font-size: 16px;');
        console.log('%c Congrats you found this! Contact Anjishnu or Ayush to let them know.', 'font-family: monospace; color: green; font-size: 12px; font-weight: bold;');

        const storedToken = localStorage.getItem('accessToken');
        if (storedToken) {
            const decoded = jwtDecode(storedToken);
            setStudentId(decoded.student_id);

            responseExists(decoded.student_id).then((check) => {
                if (check) {
                    if (!toast.isActive('response-warning')) {
                        toast.warning("Response has already been recorded.", { toastId: 'response-warning' });
                    }
                    navigate("/");
                } 
            });
        }

        const fetchQuestions = async () => {
            const response = await getQuizQuestions();
            setQuestions(response);
        };

        fetchQuestions();
    }, []);

    const handleAnswerChange = (questionId, answer) => {
        setAnswers(prevAnswers => {
            const updatedAnswers = {
                ...prevAnswers,
                [questionId]: answer
            };
            return updatedAnswers;
        });
    };

    const handleSubmit = async () => {
        try {
            const result = window.confirm("Are you sure you want to proceed? You will not be able to edit your answers after submission.")
            if (!result) { return; }

            setIsLoading(true);

            const domainMap = {
                "Web Development": "WEBD",
                "Video Editing": "VIDEO",
                "Content Writing": "CONTENT",
                "Graphic Designing": "GRAPHIC",
                "Event Management": "EVENT"
            };

            const yearMap = {
                "1st year": 1,
                "2nd year": 2
            };

            const genderMap = {
                "Male": "M",
                "Female": "F",
                "Other": "O"
            };

            const departmentMap = {
                "Computer Science and Engineering": "CS",
                "Electronics and Communication Engineering": "EC",
                "Electrical Engineering": "EE",
                "Mechanical Engineering": "ME",
                "Civil Engineering": "CE",
                "Chemical Engineering": "CH",
                "Metallurgical and Materials Engineering": "MM",
                "Mathematics and Computing": "MC",
                "Biotechnology": "BT",
                "Chemistry": "CY"
            };

            await patchInductee(
                fullName,
                rollNumber,
                departmentMap[department],
                genderMap[gender],
                yearMap[year],
                registrationNumber,
                phoneNumber,
                placeOfResidence,
                domainMap[domain]
            );

            for (const questionId in answers) {
                const answer = answers[questionId];
                if (answer.length != 0) await postResponse(questionId, answer, studentId);
            }
            toast.success("Your response has been recorded successfully");
            navigate("/");
        } catch (error) {
            toast.error(error.message)
            console.error(error.message);
        } finally {
            setIsLoading(false);
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
            case 'range':
                return (
                    <SliderForm question={question.question} key={question.id} onChange={(answer) => handleAnswerChange(question.id, answer)} />
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
                {/* Personal Questions */}
                <ShortAnswer question="Full Name" onChange={(answer) => setFullName(answer)} />
                <Dropdown question="Gender" options={['Male', 'Female', 'Other']} onChange={(answer) => setGender(answer)} />
                <ShortAnswer question="Roll Number" onChange={(answer) => setRollNumber(answer)} isTenCharacters={true}/>
                <Dropdown question="Department" options={['Biotechnology', 'Chemical Engineering', 'Chemistry', 'Civil Engineering', 'Computer Science and Engineering', 'Electrical Engineering', 'Electronics and Communication Engineering', 'Mathematics and Computing', 'Mechanical Engineering', 'Metallurgical and Materials Engineering']} onChange={(answer) => setDepartment(answer)} />
                <ShortAnswer question="Phone Number" onChange={(answer) => setPhoneNumber(answer)} isTenCharacters={true}/>
                <Dropdown question="Year" options={['1st Year', '2nd Year']} onChange={(answer) => setYear(answer)} />
                <ShortAnswer question="Registration Number" onChange={(answer) => setRegistrationNumber(answer)} isTenCharacters={true}/>
                <ShortAnswer question="Place of Residence" onChange={(answer) => setPlaceOfResidence(answer)} />
                <Dropdown question="Select your domain" options={['Web Development', 'Video Editing', 'Graphic Designing', 'Content Writing', 'Event Management']} onChange={(answer) => setDomain(answer)} />
                {questions.map(renderQuestion)}
                <div>
                    {/* TODO: make this a component */}
                    <button className="p-[3px] w-fit relative mx-auto block mt-6" onClick={handleSubmit}>
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                        <div className="px-8 py-2 bg-gray-900 rounded-[6px] font-raleway font-bold relative group transition duration-200 text-white hover:bg-transparent">
                            {isLoading ? (
                                <div className="flex justify-center items-center space-x-2">
                                    <div className="border-t-4 border-b-4 border-transparent border-l-4 border-l-white w-6 h-6 rounded-full animate-spin mx-4"></div>
                                </div>
                            ) : "Submit"}
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default QuizPage;
