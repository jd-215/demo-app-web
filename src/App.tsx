import "./App.css";
import { MainCard } from "./cards/MainCard";

function App() {
    return (
        <>
            <div className="w-full h-[100vh] flex flex-1 flex-row justify-center bg-black container px-20">
                <MainCard />
            </div>
        </>
    );
}

export default App;
