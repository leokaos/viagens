import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaginaPadrao from "./pages/PaginaPadrao/PaginaPadrao";

const DashboardPage = lazy(() => import('./pages/Dashboard/Dashboard'));
const SettingsPage = lazy(() => import('./pages/Settings/Settings'));

const PageLoader = () => (

    <div className="flex items-center justify-center h-screen">
        <p>Carregando...</p>
    </div>

);

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<PageLoader />}>
                <Routes>
                    <Route path="/" element={<PaginaPadrao />} >
                        <Route index element={<DashboardPage />} />
                        <Route path="settings" element={<SettingsPage />} />
                    </Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};

export default AppRoutes;