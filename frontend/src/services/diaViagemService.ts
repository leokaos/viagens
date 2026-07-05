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
        data_dia: parseISO(data.data_dia),
    };
}

export function diaViagemDeserialize(data: DiaViagem): any {
    return {
        ...data
    };
}