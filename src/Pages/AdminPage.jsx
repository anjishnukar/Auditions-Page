import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navbar from "../components/Navbar";
import InducteeCard from "@/components/InducteeCard";

const AdminPage = () => {
    return (
        <div className="bg-gray-900 flex flex-col items-center justify-start min-h-screen pt-32">
            <Navbar />
            <h1 className="font-anton text-4xl bg-gradient-to-br from-pink-500 to-purple-500 bg-clip-text text-transparent">Admin Page</h1>
            <div className="flex w-full max-w-sm items-center space-x-2 my-5">
                <Input type="email" placeholder="" className="bg-slate-50" />
                <Button type="submit" className="border">Search</Button>
            </div>
            <div className="flex space-x-6 my-4">
                <div className="w-8 h-8 bg-red-600 p-2 rounded-full border-4"></div>
                <div className="w-8 h-8 bg-green-600 p-2 rounded-full border-4"></div>
                <div className="w-8 h-8 bg-yellow-600 p-2 rounded-full border-4"></div>
                <div className="w-8 h-8 bg-black-600 p-2 rounded-full border-4"></div>
            </div>
            <Select>
                <SelectTrigger className="w-[200px] bg-gradient-to-br from-pink-500 to-purple-500 text-white mb-4">
                    <SelectValue placeholder="Filter" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="name">Name</SelectItem>
                    <SelectItem value="gender">Gender</SelectItem>
                    <SelectItem value="department">Department</SelectItem>
                </SelectContent>
            </Select>
            <InducteeCard color="yellow"/>
            <InducteeCard color="red"/>
            <InducteeCard color="green"/>
            <InducteeCard color=""/>
        </div>
    );
};

export default AdminPage;