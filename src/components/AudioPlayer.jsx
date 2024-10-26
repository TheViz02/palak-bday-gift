import { useState, useRef, useEffect } from "react";

export default function AudioPlayer() {
    // const audioPath = "bg-music.mp3";
    const audioPath = "https://theviz02.github.io/palak-bday-gift/bg-music.mp3";
    // State to track if audio is playing
    const [isPlaying, setIsPlaying] = useState(false);

    // Ref for the audio element
    const audioRef = useRef(null);

    // Function to handle play/pause toggle
    const togglePlayPause = async () => {
        if (isPlaying) {
            audioRef.current.pause(); // Pause the audio
        } else {
            try {
                await audioRef.current.play(); // Play the audio
                setIsPlaying(true); // Update state to reflect audio is playing
            } catch (error) {
                console.log("Failed to play audio: ", error);
                setIsPlaying(false); // Update state to reflect audio is playing
            }
        }
        setIsPlaying(!isPlaying); // Toggle the state
    };

    // Effect to handle autoplay after user interaction
    useEffect(() => {
        (async () => {
            try {
                await audioRef.current.play();
                setIsPlaying(true); // Update state if successfully played
            } catch (error) {
                console.log("Autoplay prevented: ", error);
            }
        })();
    }, []); // Runs on component mount

    useEffect(() => {
        const audioElement = audioRef.current;

        // Event listeners for play and pause events
        const handlePlay = () => setIsPlaying(true); // Update state when audio plays;

        const handlePause = () => setIsPlaying(false); // Update state when audio pauses;

        // Adding event listeners
        audioElement.addEventListener("play", handlePlay);
        audioElement.addEventListener("pause", handlePause);

        // Clean up event listeners on component unmount
        return () => {
            audioElement.removeEventListener("play", handlePlay);
            audioElement.removeEventListener("pause", handlePause);
        };
    }, []); // Only run once on component mount

    return (
        <div className="">
            <button
                onClick={togglePlayPause}
                className="fixed bottom-4 right-4 rounded-full text-white w-40 h-12 flex items-center justify-center shadow-lg z-50 focus:outline-none text-lg font-semibold bg-gradient-to-r from-purple-500 via-violet-600 to-pink-400"
            >
                {isPlaying ? "⏸️" : "▶️"}
            </button>

            {/* Hidden audio element */}
            <audio ref={audioRef} src={audioPath ?? "/bg-music.mp3"} />
        </div>
    );
}
