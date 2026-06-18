import usuarioService from '@services/usuarioService';
import { useFetch, type StateData } from './useFetch';
import type { Usuario } from '../models/usuario.model';

const useFetchCurrentUser = (): StateData<Usuario> => {
    return useFetch(() => usuarioService.getById(1));
};

export default useFetchCurrentUser;