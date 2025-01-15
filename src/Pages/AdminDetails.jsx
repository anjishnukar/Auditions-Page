import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getInducteeDetailsById, getComments, postComments, patchColor, getQuizRespones, likeInductee } from '@/services/api';
import { jwtDecode } from 'jwt-decode';
import { Link } from 'react-router-dom';
import InducteeCard from '@/components/InducteeCard';
import ComingSoon from './ComingSoon';

const AdminDetails = () => {
    const { id } = useParams();
    const [studentId, setStudentId] = useState(null);
    const [adminDetails, setAdminDetails] = useState(null);
    const [studentDetails, setStudentDetails] = useState(null);
    const [studentResponses, setStudentResponses] = useState([]);
    const [color, setColor] = useState(0);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");

    useEffect(() => {
        setStudentId(id);

        const fetchAdminDetails = async () => {
            const storedToken = localStorage.getItem('accessToken');
            const decodedToken = jwtDecode(storedToken);
            const admin = await getInducteeDetailsById(decodedToken.user_id);
            setAdminDetails({ ...admin, username: decodedToken.username });
        };

        const fetchComments = async () => {
            const fetchedComments = await getComments(id);
            setComments(fetchedComments);
        };

        const fetchQuizRespones = async () => {
            const responses = await getQuizRespones(id);
            setStudentResponses(responses);
        };

        fetchComments();
        fetchAdminDetails();
        fetchQuizRespones();
    }, [id]);

    useEffect(() => {
        const fetchDetails = async () => {
            const details = await getInducteeDetailsById(id);
            setColor(details.color);
            setStudentDetails(details);
        };

        fetchDetails();
    }, [color]);

    useEffect(() => {
        if (adminDetails) {
            const filteredComments = comments.filter(comment => comment.year <= adminDetails.year);
            setComments(filteredComments);
        }
    }, []);

    const handleAddComment = async () => {
        if (newComment.trim()) {
            try {
                const year = adminDetails.year;
                const round = 1; // Assuming round 1 for now, adjust as needed
                const postedComment = await postComments(studentId, newComment, adminDetails.username, year + 1, round);
                setComments([...comments, postedComment]);
                setNewComment("");
            } catch (error) {
                console.error("Failed to post comment:", error.message);
            }
        }
    };

    const updateColor = async (color) => {
        try {
            await patchColor(studentId, color);
            setColor(color);
        } catch (error) {
            console.error("Failed to update color:", error.message);
        }
    };

    if (!studentDetails) {
        return <ComingSoon text="Loading student details..." />;
    }

    return (
        <div className="bg-gray-900 flex flex-col items-center justify-start min-h-screen p-5">
            <h1 className="font-anton text-4xl bg-gradient-to-br from-pink-500 to-purple-500 bg-clip-text text-transparent">Student Details</h1>
            <Link to="/admin" className='text-white underline underline-offset-4 justify-start'>← Back</Link>
            <div className="flex flex-wrap w-full max-w-6xl my-5">
                <div className="w-full md:w-1/2">
                    <InducteeCard color={color} inducteeDetails={studentDetails} viewProfile={false} />
                </div>
                <div className="w-full md:w-1/2 bg-slate-50 p-5 rounded-lg">
                    <h2 className="text-2xl font-bold mb-4">Quiz Responses</h2>
                    <div>
                        {studentResponses.map((response, index) => (
                            <div key={index} className="bg-gray-200 p-2 rounded mb-2">
                                <span className='text-slate-800 font-bold'>{response.question}</span> {response.answer}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full md:w-1/2 bg-slate-50 p-5 rounded-lg">
                    <h2 className="text-2xl font-bold mb-4">Comments</h2>
                    <div className="mb-4">
                        <textarea
                            className="w-full p-2 border rounded resize-none"
                            rows="3"
                            placeholder="Type your comment here..."
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            maxLength={999}
                        />
                        <div className="flex flex-wrap space-x-2 mt-2">
                            <button
                                className="px-4 py-2 bg-blue-500 text-white rounded"
                                onClick={handleAddComment}
                            >
                                Submit
                            </button>

                            <button className='px-4 py-2 bg-gray-500 text-white rounded' onClick={() => updateColor(0)}>Clear</button>
                            <button className="px-4 py-2 bg-red-500 text-white rounded" onClick={() => updateColor(1)}>Red</button>
                            <button className="px-4 py-2 bg-yellow-500 text-white rounded" onClick={() => updateColor(2)}>Yellow</button>
                            <button className="px-4 py-2 bg-green-500 text-white rounded" onClick={() => updateColor(3)}>Green</button>
                            <button className='px-4 py-3 bg-orange-500 text-white rounded' onClick={() => updateColor(4)}>Orange</button>
                        </div>
                    </div>
                    <div>
                        {comments.map((comment, index) => (
                            <div key={index} className="bg-gray-200 p-2 rounded mb-2">
                                <span className='text-slate-800 font-bold'>{comment.by}</span> {comment.comment}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full md:w-1/2 bg-slate-50 p-5 rounded-lg">
                    <h2 className="text-2xl font-bold mb-4">Quiz Responses</h2>
                    <div>
                        {studentResponses.map((response, index) => (
                            <div key={index} className="mb-2">
                                <span className='text-slate-800 font-bold'>{response.question}</span> {response.answer}
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AdminDetails;