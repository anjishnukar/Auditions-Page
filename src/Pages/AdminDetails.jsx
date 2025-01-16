import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getInducteeDetailsById, getComments, postComments, patchColor, getQuizRespones } from '@/services/api';
import { jwtDecode } from 'jwt-decode';
import { Link } from 'react-router-dom';
import InducteeCard from '@/components/InducteeCard';
import ComingSoon from './ComingSoon';
import { toast } from 'react-toastify';

const AdminDetails = () => {
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [studentId, setStudentId] = useState(null);
    const [adminDetails, setAdminDetails] = useState(null);
    const [studentDetails, setStudentDetails] = useState(null);
    const [studentResponses, setStudentResponses] = useState([]);
    const [color, setColor] = useState(0);
    const [comments, setComments] = useState([]);
    const [filteredComments, setFilteredComments] = useState([]);
    const [newComment, setNewComment] = useState("");

    useEffect(() => {
        setStudentId(id);

        const fetchAdminDetails = async () => {
            const storedToken = localStorage.getItem('accessToken');
            const decodedToken = jwtDecode(storedToken);
            const admin = await getInducteeDetailsById(decodedToken.student_id);
            setAdminDetails({ ...admin, username: decodedToken.username });
        };

        const fetchComments = async () => {
            const fetchedComments = await getComments(id);
            fetchedComments.reverse();
            setComments(fetchedComments);
            console.log(fetchedComments);
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
            setFilteredComments(filteredComments);
        }
    }, [adminDetails]);

    const handleAddComment = async () => {
        if (newComment.trim()) {
            try {
                const year = adminDetails.year;
                const round = 1; // Assuming round 1 for now, adjust as needed
                setIsLoading(true);
                const postedComment = await postComments(studentId, newComment, adminDetails.username, year, round);
                toast.success("Comment posted successfully!");
                setComments([postedComment, ...comments]);
                setFilteredComments([postedComment, ...filteredComments]);
                setNewComment("");
            } catch (error) {
                console.error("Failed to post comment:", error.message);
                toast.error("Failed to post comment. Please try again later.");
            } finally {
                setIsLoading(false);
            }
        }
    };

    const updateColor = async (color) => {
        try {
            setIsLoading(true);
            await patchColor(studentId, color);
            setColor(color);
            toast.success("Color updated successfully!");
        } catch (error) {
            console.error("Failed to update color:", error.message);
            toast.error("Failed to update color. Please try again later.");
        } finally {
            setIsLoading(false);
        }
    };

    if (!studentDetails) {
        return <ComingSoon text="Loading student details..." navbar={false}/>;
    }

    return (
        <div className="bg-gray-900 flex flex-col items-center justify-start min-h-screen p-5 font-poppins">
            <h1 className="font-raleway font-extrabold text-4xl bg-gradient-to-br from-pink-500 to-purple-500 bg-clip-text text-transparent">Student Details</h1>
            <div className='flex flex-row'>
                <Link to="/admin" className='text-white underline underline-offset-4 justify-start m-3'>← Back</Link>
                <a href="#Comments" className='text-white underline underline-offset-4 justify-start m-3'>Comments</a>
            </div>
            <div className="flex flex-col w-full max-w-6xl my-5">
                <div className='flex flex-col md:flex-row'>
                    <div className="flex flex-col flex-1 m-3 items-center justify-start">
                        <InducteeCard color={color} inducteeDetails={studentDetails} viewProfile={false} />
                        <div className='flex flex-row'>
                            <button className="px-4 py-2 m-2 bg-red-500 text-white rounded-full" onClick={() => updateColor(1)} disabled={isLoading}>Red</button>
                            <button className="px-4 py-2 m-2 bg-yellow-500 text-white rounded-full" onClick={() => updateColor(2)} disabled={isLoading}>Yellow</button>
                            <button className="px-4 py-2 m-2 bg-green-500 text-white rounded-full" onClick={() => updateColor(3)} disabled={isLoading}>Green</button>
                            <button className='px-4 py-3 m-2 bg-orange-500 text-white rounded-full' onClick={() => updateColor(4)} disabled={isLoading}>Orange</button>
                        </div>
                        <button className='px-4 py-2 m-2 bg-gray-500 text-white rounded' onClick={() => updateColor(0)} disabled={isLoading}>Reset</button>
                    </div>
                    <div className="flex-1 m-3 bg-gray-400 p-5 rounded-lg">
                        <h2 className="text-2xl font-bold mb-4">Quiz Responses</h2>
                        <div>
                            {studentResponses.map((response, index) => (
                                <div key={index} className="bg-gray-300 p-2 rounded mb-2">
                                    <span className='text-slate-800 font-bold'>{response.question}</span> {response.answer}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row'>
                    <div id="Comments" className="flex-1 bg-gray-400 p-5 rounded-lg m-3">
                        <h2 className="text-2xl font-bold mb-4">Comments</h2>
                        <div className="mb-4">
                            <textarea
                                className="w-full p-2 border rounded resize-none bg-gray-200"
                                rows="3"
                                placeholder="Type your comment here..."
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                                maxLength={500}
                            />
                            <div className="flex flex-wrap space-x-2 mt-2">
                                <button
                                    className="px-4 py-2 m-2 bg-blue-500 text-white rounded"
                                    onClick={handleAddComment}
                                    disabled={isLoading}
                                >
                                    {isLoading ?
                                        <div className="flex justify-center items-center space-x-2">
                                            <div className="border-t-4 border-b-4 border-transparent border-l-4 border-l-white w-6 h-6 rounded-full animate-spin mx-4"></div>
                                        </div>
                                        : "Submit"
                                    }
                                </button>
                                <button className='px-4 py-2 m-2 bg-gray-500 text-white rounded' onClick={() => setNewComment("")} disabled={isLoading}>Clear</button>
                            </div>
                        </div>
                        <div>
                            {filteredComments.map((comment, index) => (
                                <div key={index} className="bg-gray-300 p-2 rounded mb-2">
                                    <span className='text-slate-800 font-bold'>{comment.by} </span>
                                    <span className='text-gray-400 text-sm font-bold'>{comment.date} </span><br /> {comment.comment}
                                </div>
                            ))}
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default AdminDetails;