import React from 'react';

import './App.css';
import {Layout} from "./components/layout/Layout";
import {HomePage} from "./pages/HomePage";


function App() {
    return (
        <div className="App">
            <Layout>
                <HomePage />
            </Layout>
        </div>
    );
}

export default App;
