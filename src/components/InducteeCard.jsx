import { FaArrowUp, FaArrowDown } from "react-icons/fa6";
import Identicon from "./Identicon";
import Terminal from "./Terminal";

const InducteeCard = ({ color }) => {
    const inductee = {
        name: "John Doe",
        major: "Computer Science",
        graduationYear: 2023,
    };

    // Set the gradient background based on the color prop
    const gradientColors = {
        red: "from-red-400 to-red-500",
        yellow: "from-yellow-400 to-yellow-500",
        green: "from-green-400 to-green-500",
        transparent: "from-white to-white",
    };
    const inducteeDetails = {
        rollnumber: "CS1234567",
        department: "CS",
        gender: "M",
        full_name: "John Doe",
        phone_number: "9876543210",
        year: 2,
        registration_no: "REG20231234",
        place: "New York",
        round: 2,
        like: ["user1", "user2", "user3"],
        color: 3,
        domains: "Web Development",
    };

    const terminalLines = [
        JSON.stringify(inducteeDetails, null, 2)
    ];

    return (
        <div
            className={`bg-white p-4 rounded-lg shadow-md my-2 w-[500px] ${gradientColors[color]}`}
        >
            <div className="flex items-center mb-2">
                <Identicon seed={10} size={8} squareSize={5} />
                <h2 className="font-bold text-2xl ml-4">{inductee.name}</h2>

                <div className="ml-auto flex items-center">
                    <button className="bg-green-500 text-white px-2 py-1 rounded mr-2">
                        <FaArrowUp />
                    </button>
                    <button className="bg-red-500 text-white px-2 py-1 rounded">
                        <FaArrowDown />
                    </button>
                </div>
            </div>
            <Terminal lines={terminalLines}/>
        </div>
    );
};

export default InducteeCard;
