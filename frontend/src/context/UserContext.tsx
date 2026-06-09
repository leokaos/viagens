import { createContext, useContext } from 'react';
import type { Usuario } from '../services/usuarioService';

const UserContext = createContext<Usuario | null>(null);

export const UserProvider = ({ children, user }: { children: React.ReactNode; user: Usuario | null }) => {
    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    );
};

export const useContextUser = () => useContext(UserContext);