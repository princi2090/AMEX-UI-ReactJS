import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Dashboard from "../components/dashboard";
import Flows from "../components/flows/flows";
import { FLOW_COMPONENT } from './../utils/pagesConstants';
import Flowchart from "./../components/Flowchart"
import {Flowaddition} from "./../components/Flowaddition"
import {Library} from "./../components/Library"
import {TableDemo1} from "./../components/TableDemo1"

export default function RoutesComponent() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Dashboard />}>
                    </Route>
                    <Route path={FLOW_COMPONENT} element={<Flows />}>
                    </Route>
                    <Route path="/job" element={<Flowchart/>}>
                    </Route>
                    <Route path="/connection" element={<Flowaddition/>}>
                    </Route>
                    <Route path="/library" element={<Library/>}>
                    </Route>
                    <Route path="/jobHistory" element={<TableDemo1/>}>
                    </Route>
                    <Route path="/scheduler" element={<TableDemo1/>}>
                    </Route>
                    <Route path="/approvals" element={<TableDemo1/>}>
                    </Route>
                </Routes>
            </div>
        </Router>
    );
}  