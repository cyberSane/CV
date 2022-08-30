import React from 'react';
import ReactDOM from 'react-dom/client';
import SideNav from "./components/SideNav";
import MainContent from "./components/MainContent";
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const isFull = false;

root.render(
    <React.StrictMode>
        <div className={isFull ? "" : "w-2/3 m-auto"}>
            <div id="print-container" className="grid grid-cols-6 shadow-lg m-6 border">
                <div className="col-span-2">
                    <SideNav/>
                </div>
                <div className="col-span-4">
                    <MainContent/>
                </div>
            </div>
        </div>
    </React.StrictMode>
);
