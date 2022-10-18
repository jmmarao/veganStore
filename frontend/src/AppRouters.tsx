import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from "react-router-dom";

import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";

function AppRoutes() {

    
    return (
        <Router>
            <Routes >
                <Route path="/login" index element={<LoginPage />}></Route>
                <Route path="/" index element={<HomePage />}></Route>
            </Routes>
        </Router>
    )

}

export default AppRoutes;