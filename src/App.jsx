import AudioPlayer from "./components/AudioPlayer";
import MessageBox from "./components/MessageBox";

function App() {
    // Array of random lovely messages

    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-500 via-violet-600 to-purple-400">
                <MessageBox></MessageBox>
            </div>

            <AudioPlayer />
        </>
    );
}

export default App;
