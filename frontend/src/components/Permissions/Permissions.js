
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Permissions.css";

const Permissions = () => {
    const navigate = useNavigate();
    const [selectedCompany, setSelectedCompany] = useState(null);
    const [micAllowed, setMicAllowed] = useState(false);
    const [camAllowed, setCamAllowed] = useState(false);

    const handleProceed = async () => {
        if (selectedCompany && micAllowed && camAllowed) {
            try {
                const response = await fetch("http://localhost:5100/select-company", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ company: selectedCompany })
                });

                if (response.ok) {
                    navigate("/interview", { state: { company: selectedCompany } });
                } else {
                    alert("Failed to send company to backend.");
                }
            } catch (error) {
                console.error("Error sending data to backend:", error);
                alert("Server error. Please try again later.");
            }
        } else {
            alert("Please select a company and allow microphone & camera access!");
        }
    };

    return (
        <div className="permissions-container">
            <div className="company-selection">
                <h3>Choose Company</h3>
                <div className="radio-group">
                    {["Google", "Amazon", "Microsoft", "Atlassian", "Accenture", "TCS", "Capgemini"].map((company) => (
                        <label key={company}>
                            <input
                                type="radio"
                                name="company"
                                value={company}
                                onChange={() => setSelectedCompany(company)}
                            />
                            {company}
                        </label>
                    ))}
                </div>
            </div>

            <div className="permissions-section">
                <div className="permission-box">
                    <h4>Allow Your Microphone to Start the Interview</h4>
                    <button onClick={() => setMicAllowed(true)} className="allow">Allow</button>
                    <button onClick={() => setMicAllowed(false)} className="block">Block</button>
                </div>

                <div className="permission-box">
                    <h4>Allow Camera Access for Better Experience</h4>
                    <button onClick={() => setCamAllowed(true)} className="allow">Allow</button>
                    <button onClick={() => setCamAllowed(false)} className="block">Block</button>
                </div>

                <button className="proceed-btn" onClick={handleProceed}>Proceed</button>
            </div>
        </div>
    );
};

export default Permissions;
