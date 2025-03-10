"use client";

import { useState, useEffect } from "react";

export default function TypingOnLoad({ textToType, typingSpeed }) {
    const [currentText, setCurrentText] = useState("");
    const [index, setIndex] = useState(0);
    const [startTyping, setStartTyping] = useState(false); // Delay flag

    useEffect(() => {
        // Wait 3 seconds before starting the typing effect
        const delay = setTimeout(() => {
            setStartTyping(true);
        }, 3000);

        return () => clearTimeout(delay); // Cleanup timeout
    }, []);

    useEffect(() => {
        if (startTyping && index < textToType.length) {
            const timeout = setTimeout(() => {
                setCurrentText((prev) => prev + textToType[index]);
                setIndex(index + 1);
            }, typingSpeed); // Adjust typing speed here

            return () => clearTimeout(timeout); // Cleanup timeout
        }
    }, [index, textToType, startTyping]);

    return <div style={{ color: "white" }}>{currentText}</div>;
}
