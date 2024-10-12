import { useEffect, useState } from "react";

export default function MessageBox() {
    const messages = [
        "You're the light of my life 🌟",
        "Every day with you is a blessing ❤️",
        "I love you more than words can express 💕",
        "You're my world and my everything 🌍",
        "Together, forever and always 💖",
        "You're the woman who cherished me 🤗",
        "Being with you feels like I'm in best moment of my life 🌏",
        "You're my comfort zone 💓",
        "Words in dictionary can't define you 📚 😍",
    ];

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
        }, 3500); // Change the interval as desired

        // Cleanup function to clear the interval
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="bg-white w-full max-w-xl p-8 sm:p-16 md:p-20 rounded-xl shadow-2xl text-center">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                Happy Birthday Palak ❤️ 🎂 🥂 ✨
            </h3>
            <p className="text-base sm:text-lg text-gray-600 italic mb-6">
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
