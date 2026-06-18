import viagemService from '@services/viagemService';
import { useFetch, type StateData } from './useFetch';
import type { Viagem } from '../models/viagem.model';

const useFetchProximaViagem = (): StateData<Viagem> => {

    return useFetch(() =>
        viagemService.getAll({ data_inicio: new Date().toUTCString() }, 'data_inicio asc', 1).then(data => data[0] ?? null)
    );
};

export default useFetchProximaViagem;