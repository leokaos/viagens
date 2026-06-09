import { useState, useEffect } from 'react';
import type { Usuario } from '../services/usuarioService';
import usuarioService from '../services/usuarioService';


const useFetchCurrentUser = (): Usuario | null => {

    const [user, setUser] = useState<Usuario | null>(null);

    const fetchItens = async () => {
        const data = await usuarioService.getById(1);
        setUser(data);
    };

    useEffect(() => { fetchItens(); }, []);

    return user || null;
};

export default useFetchCurrentUser;