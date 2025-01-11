import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getInducteeDetailsById } from '@/services/api';

const AdminDetails = () => {
    const { id } = useParams();
    const [adminId, setAdminId] = useState(null);
    const [adminDetails, setAdminDetails] = useState(null);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");

    useEffect(() => {
        setAdminId(id);
        console.log("Admin ID:", id);

        const fetchDetails = async () => {
            const details = await getInducteeDetailsById(id);
            setAdminDetails(details);
            console.log("Admin Details:", details);
        };

        fetchDetails();
    }, [id]);

    const handleAddComment = () => {
        if (newComment.trim()) {
            setComments([...comments, newComment]);
            setNewComment("");
        }
    };

    return (
        <div className="bg-gray-900 flex flex-col items-center justify-start min-h-screen p-5">
            <h1 className="font-anton text-4xl bg-gradient-to-br from-pink-500 to-purple-500 bg-clip-text text-transparent">Admin Details</h1>
            <div className="flex flex-col md:flex-row w-full max-w-4xl space-y-5 md:space-y-0 md:space-x-10 my-5">
                <div className="w-full md:w-1/2 bg-slate-50 p-5 rounded-lg">
                    <h2 className="text-2xl font-bold mb-4">Inductee Details</h2>
                    {adminDetails && <pre>{JSON.stringify(adminDetails, null, 2)}</pre>}
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
                        />
                        <button
                            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
                            onClick={handleAddComment}
                        >
                            Submit
                        </button>
                    </div>
                    <div>
                        {comments.map((comment, index) => (
                            <div key={index} className="bg-gray-200 p-2 rounded mb-2">
                                {comment}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDetails;