import viagemService, { type Viagem } from '../services/viagemService';
import { useFetch, type StateData } from './useFetch';

const useFetchTreUltimasViagens = (): StateData<Viagem[]> => {

    return useFetch(() => viagemService.getAll({}, 'data_inicio asc', 3));
};

export default useFetchTreUltimasViagens;