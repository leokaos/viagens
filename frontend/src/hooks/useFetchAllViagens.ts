import viagemService, { type Viagem } from '../services/viagemService';
import { useFetch, type StateData } from './useFetch';

const useFetchAllViagens = ({ destination, sortBy }: { destination?: string; sortBy?: string; }): StateData<Viagem[]> => {

    const filtro: { [key: string]: string } = {};

    if (destination)
        filtro["destino"] = destination;

    return useFetch(() => viagemService.getAll(filtro, sortBy), [destination, sortBy]);
};

export default useFetchAllViagens;