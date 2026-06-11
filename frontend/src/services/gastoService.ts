import { BaseService } from "./baseService";

export interface Gasto {
    id: number;
    descricao: string;
    valor: number;
    pago: boolean;
}

class GastoService extends BaseService<Gasto> {

    constructor() {
        super('/viagem');
    }

}

export default new GastoService();