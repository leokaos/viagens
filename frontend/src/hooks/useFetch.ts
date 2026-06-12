import { useEffect, useState } from 'react';

export interface StateData<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
}

export function useFetch<T>(fetchFn: () => Promise<T>, deps: any[] = []): StateData<T> {

    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {

        setLoading(true);

        const load = async () => {
            try {
                const result = await fetchFn();
                setData(result);
                setError(null);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Erro desconhecido');
            } finally {
                setLoading(false);
            }
        };

        load();

    }, deps);

    return { data, loading, error, };
}