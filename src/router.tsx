import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Layout from "./@shared/layout/Layout";
import AuthGuard from "./@shared/Guards/AuthGuard";
import Dashboard from "./components/dashboard/Dashboard";
import Example1 from "./components/example1/Example1";
import Example11 from "./components/example1/Example11";
import Example12 from "./components/example1/Example12";
import { Canvas } from "@react-three/fiber";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Login />} />
                <Route element={<Layout />}>
                    <Route element={<AuthGuard />}>
                        <Route path="home" element={<Home />} />
                        <Route path="dashboard" element={<Dashboard />} />
                    </Route>
                </Route>
                {/* <Route path="ex1" element={<Example1 />} /> */}
                <Route path="ex1" element={<Canvas style={{minHeight: window.innerHeight}}><Example1 /></Canvas>} />
                <Route path="ex11" element={<Canvas style={{minHeight: window.innerHeight}}><Example11 /></Canvas>} />
                <Route path="ex12" element={<Canvas style={{minHeight: window.innerHeight}}><Example12 /></Canvas>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router