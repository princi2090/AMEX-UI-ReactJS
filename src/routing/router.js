import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Dashboard from "../components/dashboard";
import Flows from "../components/flows/flows";
import { FLOW_COMPONENT } from './../utils/pagesConstants';

export default function RoutesComponent() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Dashboard />}>
                    </Route>
                    <Route path={FLOW_COMPONENT} element={<Flows />}>
                    </Route>
                </Routes>
            </div>
        </Router>
    );
}  