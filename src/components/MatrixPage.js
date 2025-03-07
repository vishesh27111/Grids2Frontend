import { useNavigate } from "react-router-dom";
import { useState } from 'react';

function MatrixPage () {
    const navigate = useNavigate();
    const [matrix, setMatrix] = useState(Array(5).fill(Array(5).fill("")));

    const handleChange = (row, col, value) => {
        const newMatrix = matrix.map((r, rIdx) =>
            rIdx === row ? r.map((c, cIdx) => (cIdx === col ? value : c)) : r
        );
        setMatrix(newMatrix);
    };

    const handleSubmit = async () => {
        console.log("Input : ", matrix);
        try {
            const response = await fetch("https://node-g8h4gherfbejfqbq.eastus2-01.azurewebsites.net/storeMatrix", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ matrix }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log("Matrix saved successfully:", data);
                alert("Matrix saved successfully!");
                setMatrix(Array(5).fill(Array(5).fill("")));
            } else {
                throw new Error("Failed to save matrix.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Error saving matrix. Please try again.");
        }
    };

    return (
        <div className="container">
            <h1>Matrix Input</h1>
            <button onClick={() => navigate(-1)}>Back</button>
            <div className="matrix-container">
                {matrix.map((row, rowIndex) => (
                    <div key={rowIndex} className="matrix-row">
                        {row.map((cell, colIndex) => (
                            <input
                                key={colIndex}
                                type="text"
                                value={cell}
                                onChange={(e) => handleChange(rowIndex, colIndex, e.target.value)}
                            />
                        ))}
                    </div>
                ))}
            </div>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default MatrixPage;
