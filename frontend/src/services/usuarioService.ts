import { BaseService } from './baseService';

export interface Usuario {
    id: number;
    nome: string;
    email: string;
    avatar: string;
}

class UsuarioService extends BaseService<Usuario> {
    constructor() {
        super('/usuario');
    }
}

export default new UsuarioService();