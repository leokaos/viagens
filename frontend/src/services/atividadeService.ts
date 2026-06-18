import type { Atividade } from "../models/viagem.model";
import { BaseService } from "./baseService";

class AtividadeService extends BaseService<Atividade> {

    constructor() {
        super('/atividade')
    }
}

export default new AtividadeService();

export function atividadeSerialize(data: any): Atividade {
    return {
        ...data,
    };
}

export function atividadeDeserialize(data: Atividade): any {
    return {
        ...data
    };
}