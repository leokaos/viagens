import viagemService from '@services/viagemService';
import { useFetch, type StateData } from './useFetch';
import type { Viagem } from '../models/viagem.model';

const useFetchAllViagens = ({ destination, sortBy }: { destination?: string; sortBy?: string; }): StateData<Viagem[]> => {

    const filtro: { [key: string]: string } = {};

    if (destination)
        filtro["destino"] = destination;

    return useFetch(() => viagemService.getAll(filtro, sortBy), [destination, sortBy]);
};

export default useFetchAllViagens;