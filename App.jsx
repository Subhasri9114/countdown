import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Dashboard from "./Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
//import PageNotFound from "./page/PageNotFound";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/register" element={<Register />} />
                <Route path="/" element={<Login/>} />
        
            </Routes>
        </BrowserRouter>
    )
}

export default App;