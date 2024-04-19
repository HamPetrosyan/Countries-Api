import { Link, Route, Routes } from "react-router-dom";
import { Homepage } from "./components/Homepage";
import { Country } from "./components/Country";

function App() {
  return (
    <>
      <header className="px-7 py-7 bg-white max-w-screen-xl  mx-auto select-none">
        <Link to="/" className="font-semibold underline text-base">
          Where is the world?
        </Link>
      </header>

      <main className="bg-gray-100 min-h-screen pt-16 shadow-inset-shadow shadow-gray-200 select-none">
        <div className="max-w-screen-xl mx-auto px-4">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/country/:name" element={<Country />} />
          </Routes>
        </div>
      </main>
    </>
  );
}

export default App;
