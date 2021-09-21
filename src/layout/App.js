import React from 'react';
import './App.css';
import Feed from '../feed/Feed';
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';

function App() {
    return (
        <div className="app">
            {/* Header */}
            <Header />

            {/* App Body */}
            <div className="app-body">
                {/* Sidebar */}
                <Sidebar />

                {/* Feed */}
                <Feed />
                {/* Widgets */}
            </div>
        </div>
    );
}

export default App;
