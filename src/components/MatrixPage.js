import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import "./MatrixInput.css";

function MatrixPage () {
    const navigate = useNavigate();
    const [matrix, setMatrix] = useState(Array(5).fill(Array(5).fill("")));
    const [errors, setErrors] = useState(Array(5).fill(Array(5).fill("")));

    const handleChange = (rowIdx, colIdx, value) => {
        const newMatrix = matrix.map((row, rIdx) =>
            row.map((cell, cIdx) => (rIdx === rowIdx && cIdx === colIdx ? value : cell))
        );
        setMatrix(newMatrix);

        if (!/^-?\d*\.?\d*$/.test(value)) {
            const newErrors = errors.map((row, rIdx) =>
                row.map((err, cIdx) => (rIdx === rowIdx && cIdx === colIdx ? "Only numbers allowed" : err))
            );
            setErrors(newErrors);
        } else {
            const newErrors = errors.map((row, rIdx) =>
                row.map((err, cIdx) => (rIdx === rowIdx && cIdx === colIdx ? "" : err))
            );
            setErrors(newErrors);
        }
    };

    const handleSubmit = async () => {
        let valid = true;
        const newErrors = matrix.map(row => row.map(cell => {
            if (cell.trim() === "") {
                valid = false;
                return "Field cannot be empty";
            }
            return "";
        }));
        setErrors(newErrors);

        if (!valid) {
            alert("Please fill in all fields with valid numbers before submitting.");
            return;
        }

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
            <button className="back-btn" onClick={() => navigate(-1)}>Back</button>
            <h1>Matrix Input</h1>

            <div className="matrix-container">
                {matrix.map((row, rowIndex) => (
                    <div key={rowIndex} className="matrix-row">
                        {row.map((cell, colIndex) => (
                            <div key={colIndex} className="matrix-cell">
                                <input
                                    type="text"
                                    value={cell}
                                    onChange={(e) => handleChange(rowIndex, colIndex, e.target.value)}
                                    className={errors[rowIndex][colIndex] ? "input-error" : ""}
                                />
                                {errors[rowIndex][colIndex] && <span className="error-text">{errors[rowIndex][colIndex]}</span>}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <button className="submit-btn" onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default MatrixPage;
