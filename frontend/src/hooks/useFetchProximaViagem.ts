import viagemService, { type Viagem } from '../services/viagemService';
import { useFetch, type StateData } from './useFetch';

const useFetchProximaViagem = (): StateData<Viagem> => {

    return useFetch(() =>
        viagemService.getAll({ data_inicio: new Date().toUTCString() }, 'data_inicio', 1).then(data => data[0] ?? null)
    );
};

export default useFetchProximaViagem;