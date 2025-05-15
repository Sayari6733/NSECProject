import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import "./InterviewPanel.css";
import questions from "../../data/questions";

const InterviewPanel = () => {
    const videoRef = useRef(null);
    const mediaRecorderRef = useRef(null);
    const [isMuted, setIsMuted] = useState(false);
    const [stream, setStream] = useState(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);
    const [currentQuestion, setCurrentQuestion] = useState("");
    const [isInterviewFinished, setIsInterviewFinished] = useState(false);


    const location = useLocation(); 
    const selectedCompany = location.state?.company || "Google";
    const [company, setCompany] = useState(selectedCompany);


    // Initialize camera/mic once
    useEffect(() => {
        const initCameraAndMic = async () => {
            try {
                const userStream = await navigator.mediaDevices.getUserMedia({
                    video: true,
                    audio: true,
                });
                videoRef.current.srcObject = userStream;
                setStream(userStream);
                // Start interview after stream is set
                startInterview(userStream);
            } catch (err) {
                console.error("Permission denied or error:", err);
            }
        };

        initCameraAndMic();
    }, []);


    useEffect(() => {
        if (currentQuestionIndex === -1 || currentQuestionIndex >= questions[company].length || !stream) {
            if (currentQuestionIndex !== -1) setIsInterviewFinished(true);
            return;
        }
    
        const question = questions[company][currentQuestionIndex];
        setCurrentQuestion(question);
    
        let hasRun = false;
    
        const sendAndRecord = async () => {
            if (hasRun) return;
            hasRun = true;
    
            // 1. Send question
            try {
                await fetch("http://localhost:5100/send-question", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ question }),
                });
                console.log("Question sent:", question);
            } catch (err) {
                console.error(" Question send error:", err);
            }
    
            // 2. Record for 2 mins
            await recordAudioFor2Minutes(stream);
    
            // 3. Delay 5s and then next question
            setTimeout(() => {
                setCurrentQuestionIndex((prev) => prev + 1);
            }, 5000);
        };
    
        sendAndRecord();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentQuestionIndex]);
    
    const startInterview = (userStream) => {
        // Start with index 0
        setCurrentQuestionIndex(0);
    };

    const recordAudioFor2Minutes = (stream) => {
        return new Promise((resolve) => {
            const audioStream = new MediaStream(stream.getAudioTracks());
            const mediaRecorder = new MediaRecorder(audioStream);
            const audioChunks = [];

            mediaRecorderRef.current = mediaRecorder;

            mediaRecorder.ondataavailable = (event) => {
                if (event.data.size > 0) {
                    audioChunks.push(event.data);
                }
            };

            mediaRecorder.onstop = async () => {
                const audioBlob = new Blob(audioChunks, { type: "audio/webm" });
                const formData = new FormData();
                formData.append("audio", audioBlob);

                try {
                    const response = await fetch("http://localhost:5100/upload-audio", {
                        method: "POST",
                        body: formData,
                    });

                    if (response.ok) {
                        console.log(" Audio uploaded");
                    } else {
                        console.error(" Audio upload failed");
                    }
                } catch (error) {
                    console.error(" Audio upload error:", error);
                }

                resolve();
            };

            mediaRecorder.start();
            setTimeout(() => {
                mediaRecorder.stop();
            },6000); 
        });
    };
    const handleMuteToggle = () => {
        if (!stream) return;
        stream.getAudioTracks().forEach((track) => (track.enabled = !track.enabled));
        setIsMuted(!isMuted);
    };
  
    return (
        <div className="interview-panel">
            <div className="right-panel">
                <div className="question-box">
                    {isInterviewFinished ? (
                        <p>🎉 Interview Completed</p>
                    ) : currentQuestionIndex === -1 ? (
                        <p>Loading...</p>
                    ) : (
                        <>
                            <h3>Question {currentQuestionIndex + 1}</h3>
                            <p>{currentQuestion}</p>
                        </>
                    )}
                </div>
    
                <video ref={videoRef} autoPlay muted className="user-video" />
    
                <button onClick={handleMuteToggle} className="mute-btn">
                    {isMuted ? "Unmute" : "Mute"}
                </button>
            </div>
        </div>
    );
};

export default InterviewPanel;