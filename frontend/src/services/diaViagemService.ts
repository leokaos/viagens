import { parseISO } from "date-fns";
import type { DiaViagem } from "@models/viagem.model";
import { BaseService } from "./baseService";

class DiaViagemService extends BaseService<DiaViagem> {

    constructor() {
        super('/viagem', diaViagemSerialize, diaViagemDeserialize);
    }

}

export default new DiaViagemService();

export function diaViagemSerialize(data: any): DiaViagem {
    return {
        ...data,
        data_inicio: parseISO(data.data_inicio),
        data_fim: parseISO(data.data_fim),
    };
}

export function diaViagemDeserialize(data: DiaViagem): any {
    return {
        ...data
    };
}