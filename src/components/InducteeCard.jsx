import { FaArrowUp, FaThumbsUp } from "react-icons/fa6";
import IdenticonImage from "./IdenticonImage";
import Terminal from "./Terminal";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const InducteeCard = ({ inducteeDetails, handleLike, viewProfile = true, likeCount = 0 }) => {
    const { profile_picture, round, like, user, is_club_member, ...filteredInductees } = inducteeDetails;

    const terminalLines = [
        JSON.stringify(filteredInductees, null, 2),
    ];

    const textColorClasses = {
        0: "text-black",
        1: "text-red-500",
        2: "text-yellow-500",
        3: "text-green-500",
        4: "text-orange-500",
    };

    return (
        <div
            className="bg-white p-4 rounded-lg shadow-md max-w-6xl m-2"
        >
            <div className="flex items-center mb-2">
                <IdenticonImage seed={filteredInductees.full_name} />
                <Link to={`${filteredInductees.id}`}><h2 className={`font-bold font-raleway text-2xl ml-4 ${textColorClasses[filteredInductees.color]}`}>{filteredInductees.full_name}</h2></Link>

                {viewProfile ? (<div className="ml-auto flex items-center">
                    <Link to={`${filteredInductees.id}`}>
                        <FaArrowUp className="text-blue-800 text-2xl rotate-45" />
                    </Link>
                </div>) :
                    // <button className="ml-2 bg-blue-500 text-white px-2 py-1 rounded">
                    //     <FaThumbsUp className="text-white" />
                    // </button>
                    <></>
                }
            </div>
            <Terminal lines={terminalLines} />
        </div>
    );
};

export default InducteeCard;
