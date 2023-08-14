import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import EditPost from "./pages/EditPost";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="max-w-[1440px] p-[20px] my-0 mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/editPost/:id" element={<EditPost />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
