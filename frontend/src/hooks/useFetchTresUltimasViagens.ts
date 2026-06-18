import viagemService from '@services/viagemService';
import { useFetch, type StateData } from './useFetch';
import type { Viagem } from '@models/viagem.model';

const useFetchTreUltimasViagens = (): StateData<Viagem[]> => {
    return useFetch(() => viagemService.getAll({}, 'data_inicio asc', 3));
};

export default useFetchTreUltimasViagens;