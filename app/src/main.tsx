// src/index.tsx
import React from 'react';
import { createRoot } from "react-dom/client";

import { BrowserRouter as Router } from 'react-router-dom';
const App = () => {
    return <h1>pywiza initialized with bun</h1>;
};

const container = document.getElementById("root");
const root = createRoot(container)
root.render(
    <Router>
        <App />
    </Router>);
