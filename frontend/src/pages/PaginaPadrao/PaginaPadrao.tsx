import { Outlet } from 'react-router-dom';
import Menu from '../../layout/Menu/Menu';
import Header from '../../layout/Header/Header';
import useFetchCurrentUser from '../../hooks/useFetchCurrentUser';
import { UserProvider } from '../../context/UserContext';


const PaginaPadrao = () => {

    const user = useFetchCurrentUser();

    return (

        <UserProvider user={user}>

            <div className="flex min-h-screen bg-[#f8f9ff] font-sans text-[#1a1c1e]">

                <aside className="w-64 bg-[#eff4ff] border-r border-[#cbdbf5] flex flex-col sticky top-0 h-screen">
                    <Menu />
                </aside>

                <main className="flex-1 flex flex-col overflow-y-auto">

                    <header className="h-16 bg-white border-b border-[#cbdbf5] flex items-center justify-between px-8 sticky top-0 z-10 shadow-sm">
                        <Header />
                    </header>

                    <div className="p-8 max-w-7xl mx-auto w-full">
                        <Outlet />
                    </div>

                </main>

            </div>

        </UserProvider>
    );
};

export default PaginaPadrao;