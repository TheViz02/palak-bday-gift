import { useEffect, useRef } from "react";
import AudioPlayer from "./components/AudioPlayer";
import MessageBox from "./components/MessageBox";

function App() {
    const containerRef = useRef(null); // Ref to the container

    // Function to request full screen
    const requestFullScreen = () => {
        const element = containerRef.current;
        if (element) {
            if (element.requestFullscreen) {
                element.requestFullscreen();
            } else if (element.mozRequestFullScreen) {
                // Firefox
                element.mozRequestFullScreen();
            } else if (element.webkitRequestFullscreen) {
                // Chrome, Safari, and Opera
                element.webkitRequestFullscreen();
            } else if (element.msRequestFullscreen) {
                // IE/Edge
                element.msRequestFullscreen();
            }
        }
    };

    // Effect to request full screen on document click
    useEffect(() => {
        // Event listener for user interaction
        const handleUserInteraction = () => {
            requestFullScreen(); // Call to enter full screen
            // Remove the event listener after the first click
            document.removeEventListener("click", handleUserInteraction);
        };

        // Adding the event listener to the document
        document.addEventListener("click", handleUserInteraction);

        // Cleanup the event listener on component unmount
        return () => {
            document.removeEventListener("click", handleUserInteraction);
        };
    }, []);

    return (
        <>
            <div
                ref={containerRef}
                className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-500 via-violet-600 to-purple-400"
            >
                <MessageBox />
            </div>

            <AudioPlayer />
        </>
    );
}

export default App;
