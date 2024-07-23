// import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import LoadingComponent from "./components/LoadingComponent";
import Tap from "./pages/Tap";
import Boost from "./pages/Boost";
import Stats from "./pages/Stats";
import Tasks from "./pages/Tasks";
import Referral from "./pages/Referral";
import AirDrop from "./pages/AirDrop";
import Menu from "./Menu/Menu.jsx";

function App() {
    return (
        <NextUIProvider>
            <Router>
                    <Menu />
                    <Routes>
                        <Route path="/" element={<LoadingComponent />} />
                        <Route path="/tap" element={<Tap />} />
                        <Route path="/boost" element={<Boost />} />
                        <Route path="/stats" element={<Stats />} />
                        <Route path="/tasks" element={<Tasks />} />
                        <Route path="/referral" element={<Referral />} />
                        <Route path="/airdrop" element={<AirDrop />} />
                    </Routes>
            </Router>
        </NextUIProvider>
    );
}

export default App;
