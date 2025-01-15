import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import InducteeCard from "@/components/InducteeCard";
import { useEffect, useState } from "react";
import { getInducteeDetails } from "@/services/api";

// TODO: display first 50 inductees, and export button
// add comments
const AdminPage = () => {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("full_name");
    const [count, setCount] = useState(0);
    const [color, setColor] = useState(0);

    const [inductees, setInductees] = useState([]);

    const handleColor = (colorNumber) => {
        setColor(prevColor => prevColor === colorNumber ? 0 : colorNumber);
    };

    useEffect(() => {
        const fetchData = async () => {
            const response = await getInducteeDetails();
            const inducteeDetails = response.filter((inducteeDetails) => inducteeDetails.full_name.length !== 0);
            setInductees(inducteeDetails);
            setCount(inducteeDetails.length);
        };
        fetchData();
    }, []);

    return (
        <div className="bg-gray-900 flex flex-col items-center justify-start min-h-screen p-5">
            {/* <Navbar /> */}
            <h1 className="font-anton text-4xl bg-gradient-to-br from-pink-500 to-purple-500 bg-clip-text text-transparent">Admin Page</h1>
            <div className="flex w-full max-w-lg items-center space-x-1 my-5">
                <Input type="email" placeholder="Search candidates" className="bg-slate-50 h-10 text-lg"
                    onChange={(e) => setSearch(e.target.value)}
                />
                <Select onValueChange={setFilter}>
                    <SelectTrigger className="w-24 bg-slate-50 h-10">
                        <SelectValue placeholder="Filter" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="full_name">Name</SelectItem>
                        <SelectItem value="gender">Gender</SelectItem>
                        <SelectItem value="department">Department</SelectItem>
                        <SelectItem value="phone_number">Phone Number</SelectItem>
                        <SelectItem value="registration_no">Registration Number</SelectItem>
                        <SelectItem value="domains">Domain</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="flex space-x-6 my-4">
                <div className="w-8 h-8 bg-black-600 p-2 rounded-full border-4 cursor-pointer" onClick={() => handleColor(0)}></div>
                <div className="w-8 h-8 bg-red-600 p-2 rounded-full border-4 cursor-pointer" onClick={() => handleColor(1)}></div>
                <div className="w-8 h-8 bg-yellow-600 p-2 rounded-full border-4 cursor-pointer" onClick={() => handleColor(2)}></div>
                <div className="w-8 h-8 bg-green-600 p-2 rounded-full border-4 cursor-pointer" onClick={() => handleColor(3)}></div>
                <div className="w-8 h-8 bg-orange-600 p-2 rounded-full border-4 cursor-pointer" onClick={() => handleColor(4)}></div>
            </div>
            <div className="text-white font-bold font-mono bg-black border border-violet-900 py-1 px-3 rounded-lg my-3">Total number of responses: {count}</div>
            <div className="flex flex-wrap justify-center">
                {
                    inductees.filter((inducteeDetails) => {
                        return search.toLowerCase() === ''
                            ? true
                            : inducteeDetails[filter]?.toLowerCase().includes(search.toLowerCase());
                    }).filter((inducteeDetails) => {
                        return color === 0 ? true : inducteeDetails.color === color;
                    }).map((inducteeDetails, index) => (
                        <InducteeCard key={index} inducteeDetails={inducteeDetails} />
                    ))
                }
            </div>
        </div>
    );
};

export default AdminPage;