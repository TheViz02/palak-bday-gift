import { useEffect, useState } from "react";
import { personName, messages } from "../assets/config.json";

export default function MessageBox() {
    // State to hold the current message
    const [message, setMessage] = useState("");

    // Function to get a random message from the array
    const getRandomMessage = () => {
        const randomIndex = Math.floor(Math.random() * messages.length);
        return messages[randomIndex];
    };

    // Use useEffect to set a random message when the component loads
    useEffect(() => {
        setMessage(getRandomMessage());

        const intervalId = setInterval(() => {
            setMessage(getRandomMessage());
        }, 2500); // Change the interval as desired

        // Cleanup function to clear the interval
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="bg-white w-full max-w-xl p-8 sm:p-16 md:p-20 rounded-xl shadow-2xl text-center">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                Happy Birthday {personName?.trim()} ❤️ 🎂 🥂 ✨
            </h3>
            <p className="text-base sm:text-lg text-gray-800 italic mb-6">
                &ldquo;{message}&ldquo;
            </p>
            {/* <button
                className="px-4 py-2 sm:px-6 sm:py-4 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
                type="button"
                onClick={() => setMessage(getRandomMessage())}
            >
                See another message 💌
            </button> */}
        </div>
    );
}
