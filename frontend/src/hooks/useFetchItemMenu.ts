import { useState, useEffect } from 'react';
import type { ItemMenu } from '../services/itemMenuService';
import itemMenuService from '../services/itemMenuService';

interface UseFetchItemMenuReturn {
    itens: ItemMenu[];
    loading: boolean;
    error: string | null;
}

const useFetchItemMenu = (): UseFetchItemMenuReturn => {

    const [itens, setItens] = useState<ItemMenu[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchItens = async () => {

        try {
            setLoading(true);
            const data = await itemMenuService.getAll();
            setItens(data);
            setError(null);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Erro desconhecido');
            setItens([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => { fetchItens(); }, []);

    return { itens, loading, error };
};

export default useFetchItemMenu;