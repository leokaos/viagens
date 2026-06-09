import { useState, useEffect } from 'react';
import type { Viagem } from '../services/viagemService';
import viagemService from '../services/viagemService';


const useFetchProximaViagem = (): Viagem | null => {

    const [viagem, setViagem] = useState<Viagem | null>()

    const fetchViagem = async () => {
        const data = await viagemService.getAll({}, "data_inicio", 1);
        setViagem(data[0]);
    };

    useEffect(() => { fetchViagem(); }, []);

    return viagem || null;
};

export default useFetchProximaViagem;