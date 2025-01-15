import { LucideDownload } from "lucide-react";

const escapeCSVValue = (value) => {
    if (typeof value === "string") {
        // Escape double quotes and wrap in double quotes
        return `"${value.replace(/"/g, '""')}"`;
    }
    return value;
};

const ExportCSV = ({ data }) => {

    const convertToCSV = (data) => {
        const headers = Object.keys(data[0]).map(escapeCSVValue).join(","); // Extract headers
        const rows = data.map(row => Object.values(row).map(escapeCSVValue).join(",")); // Extract rows
        return [headers, ...rows].join("\n");
    };

    const downloadCSV = () => {
        const csv = convertToCSV(data);
        const blob = new Blob([csv], { type: "text/csv" });
        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = "data.csv";
        a.click();

        URL.revokeObjectURL(url); // Cleanup the URL object
    };

    return (
        <div style={{ textAlign: "center"}}>
            <button
                onClick={downloadCSV}
                style={{
                    backgroundColor: "#4CAF50",
                    color: "white",
                    border: "none",
                    padding: "8px 15px",
                    fontSize: "16px",
                    cursor: "pointer",
                    borderRadius: "5px",
                }}
            >
                <LucideDownload/>
            </button>
        </div>
    );
};

export default ExportCSV;