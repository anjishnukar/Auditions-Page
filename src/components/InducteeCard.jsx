import { FaArrowUp, FaArrowDown } from "react-icons/fa6";
import IdenticonImage from "./IdenticonImage";
import Terminal from "./Terminal";
import { Link } from "react-router-dom";

const InducteeCard = ({ inducteeDetails, viewProfile = true }) => {
    inducteeDetails = {
        ...inducteeDetails,
        registration_no: inducteeDetails?.registration_no.slice(0,6)
    } 
    // Set the gradient background based on the color prop
    // const gradientColors = {
    //     red: "from-red-400 to-red-500",
    //     yellow: "from-yellow-400 to-yellow-500",
    //     green: "from-green-400 to-green-500",
    //     transparent: "from-white to-white",
    // };
    // const inducteeDetails = {
    //     rollnumber: "CS1234567",
    //     department: "CS",
    //     gender: "M",
    //     full_name: "John Doe",
    //     phone_number: "9876543210",
    //     year: 2,
    //     registration_no: "REG20231234",
    //     place: "New York",
    //     round: 2,
    //     like: ["user1", "user2", "user3"],
    //     color: 3,
    //     domains: "Web Development",
    // };

    const terminalLines = [
        JSON.stringify(inducteeDetails, null, 2)
    ];

    const textColorClasses = {
        1: "text-red-500",
        2: "text-yellow-500",
        3: "text-green-500",
        4: "text-black",
    };

    return (
        <div
            className="bg-white p-4 rounded-lg shadow-md my-2"
        >
            <div className="flex items-center mb-2">
                <IdenticonImage seed={inducteeDetails?.full_name} />
                <Link to={`${inducteeDetails?.id}`}><h2 className={`font-bold text-2xl ml-4 ${textColorClasses[inducteeDetails.color]}`}>{inducteeDetails?.full_name}</h2></Link>

                { viewProfile ? (<div className="ml-auto flex items-center">
                    <Link to={`${inducteeDetails?.id}`}>
                        <FaArrowUp className="text-blue-800 text-2xl rotate-45" />
                    </Link>
                </div>) : <></> }
            </div>
            <Terminal lines={terminalLines} />
        </div>
    );
};

export default InducteeCard;
