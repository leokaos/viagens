import usuarioService, { type Usuario } from '../services/usuarioService';
import { useFetch, type StateData } from './useFetch';

const useFetchCurrentUser = (): StateData<Usuario> => {
    return useFetch(() => usuarioService.getById(1));
};

export default useFetchCurrentUser;