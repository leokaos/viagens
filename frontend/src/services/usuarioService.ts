import type { Usuario } from '../models/usuario.model';
import { BaseService } from './baseService';

class UsuarioService extends BaseService<Usuario> {

    constructor() {
        super('/usuario');
    }

}

export default new UsuarioService();