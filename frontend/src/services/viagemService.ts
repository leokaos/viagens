import { BaseService } from "./baseService";

export interface Viagem {
    id: number;
    data_inicio: Date;
    data_fim: Date;
    orcamento: number;
    observacao: string;
}

class ViagemService extends BaseService<Viagem> {

    constructor() {
        super('/viagem');
    }

    protected serialize(data: any): Viagem {
        return {
            ...data,
            data_inicio: new Date(data.data_inicio),
            data_fim: new Date(data.data_fim)
        };
    }

    protected deserialize(data: Viagem) {
        return {
            ...data,
            data_inicio: data.data_inicio.toISOString().split('T')[0],
            data_fim: data.data_fim.toISOString().split('T')[0]
        };
    }
}

export default new ViagemService();