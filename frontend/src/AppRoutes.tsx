import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaginaPadrao from "./pages/PaginaPadrao/PaginaPadrao";
import PageLoader from "./components/PageLoader/PageLoader";
import Trip from "./pages/Trip/Trip";
import ItineraryPlanner from "./pages/Churros";

const DashboardPage = lazy(() => import('./pages/Dashboard/Dashboard'));
const TripsPage = lazy(() => import('./pages/Trips/Trips'))
const SettingsPage = lazy(() => import('./pages/Settings/Settings'));

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<PageLoader />}>
                <Routes>
                    <Route path="/" element={<PaginaPadrao />} >
                        <Route index element={<DashboardPage />} />
                        <Route path="trips" element={<TripsPage />} />
                        <Route path="trip/:id" element={<Trip />} />
                        <Route path="trip" element={<Trip />} />
                        <Route path="churros" element={<ItineraryPlanner />} />
                        <Route path="settings" element={<SettingsPage />} />
                    </Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};

export default AppRoutes;