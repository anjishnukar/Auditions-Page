import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import InducteeCard from "@/components/InducteeCard";
import { useEffect, useState } from "react";
import { getInducteeDetails } from "@/services/api";
import ExportCSV from "@/components/ui/export";
import { cn } from "@/lib/utils";
import { toast } from "react-toastify";
import ComingSoon from "./ComingSoon";

// TODO: display first 50 inductees, and export button
// add comments
const AdminPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("full_name");
    const [color, setColor] = useState(0);

    const [inductees, setInductees] = useState([]);
    const [filteredInductees, setFilteredInductees] = useState([]);

    const handleColor = (colorNumber) => {
        setColor(prevColor => prevColor === colorNumber ? 0 : colorNumber);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const response = await getInducteeDetails();
                const inducteeDetails = response.filter((inducteeDetails) => inducteeDetails.full_name.length !== 0);
                const strippedInducteeDetails = inducteeDetails.map(({ is_club_member, profile_picture, round, like, user, ...rest }) => rest);

                setInductees(strippedInducteeDetails);
                setFilteredInductees(strippedInducteeDetails);
            } catch (error) {
                toast.error("Failed to fetch inductee details, login again");
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        setFilteredInductees(
            inductees.filter((inducteeDetails) => {
                return search.toLowerCase() === ''
                    ? true
                    : inducteeDetails[filter]?.toLowerCase().includes(search.toLowerCase());
            }).filter((inducteeDetails) => {
                return color === 0 ? true : inducteeDetails.color === color;
            })
        );
    }, [filter, color, search]);

    if (isLoading) {
        return <ComingSoon text="Loading inductees..." navbar={false} />;
    }

    return (
        <div className="bg-gray-900 flex flex-col items-center justify-start min-h-screen p-5">
            {/* <Navbar /> */}
            <h1 className="font-raleway font-extrabold text-4xl bg-gradient-to-br from-pink-500 to-purple-500 bg-clip-text text-transparent">Admin Page</h1>
            <div className="flex w-full max-w-lg items-center space-x-1 my-5">
                <Input type="email" placeholder="Search candidates" className="bg-slate-50 h-10 text-md"
                    onChange={(e) => setSearch(e.target.value)}
                />
                <Select onValueChange={setFilter}>
                    <SelectTrigger className="w-36 bg-slate-50 h-10">
                        <SelectValue placeholder="Filter" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="full_name">Name</SelectItem>
                        <SelectItem value="domains">Domain</SelectItem>
                        <SelectItem value="rollnumber">Roll Number</SelectItem>
                        <SelectItem value="gender">Gender</SelectItem>
                        <SelectItem value="department">Department</SelectItem>
                        <SelectItem value="phone_number">Phone Number</SelectItem>
                        <SelectItem value="registration_no">Registration Number</SelectItem>
                        <SelectItem value="place">Place</SelectItem>
                    </SelectContent>
                </Select>
                <ExportCSV data={filteredInductees.map((inductee) => {
                    const colorMap = {
                        0: "",
                        1: "red",
                        2: "yellow",
                        3: "green",
                        4: "orange"
                    };
                    return { ...inductee, color: colorMap[inductee.color] };
                })} />
            </div>
            <div className="flex space-x-6 my-4">
                <ColorButton color={0} colorState={color} handleColor={handleColor} />
                <ColorButton color={1} colorState={color} handleColor={handleColor} />
                <ColorButton color={2} colorState={color} handleColor={handleColor} />
                <ColorButton color={3} colorState={color} handleColor={handleColor} />
                <ColorButton color={4} colorState={color} handleColor={handleColor} />
            </div>
            <div className="text-white font-bold font-mono bg-black border border-violet-900 py-1 px-3 rounded-lg my-3">Total number of responses: {filteredInductees.length}</div>
            <div className="flex flex-wrap justify-center gap-x-5">
                {
                    filteredInductees.map((inducteeDetails, index) => (
                        <InducteeCard key={index} inducteeDetails={inducteeDetails} />
                    ))
                }
            </div>
        </div>
    );
};

const ColorButton = ({ color = 0, colorState, handleColor }) => {
    const colorMap = {
        0: "bg-black",
        1: "bg-red-500",
        2: "bg-yellow-500",
        3: "bg-green-600",
        4: "bg-orange-600"
    };

    return <div className={cn("w-8 h-8 p-2 rounded-full border-4 cursor-pointer", colorState === color && "border-blue-700", colorMap[color])} onClick={() => handleColor(color)}></div>;
};

export default AdminPage;