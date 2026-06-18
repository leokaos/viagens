import type { Viagem } from "@models/viagem.model";
import { BaseService } from "./baseService";
import { diaViagemSerialize } from "./diaViagemService";

class ViagemService extends BaseService<Viagem> {

    constructor() {
        super('/viagem', viagemSerialize, viagemDeserialize);
    }

}

export default new ViagemService();

export function viagemSerialize(data: any): Viagem {
    return {
        ...data,
        dias: data.dias.map((dia: any) => diaViagemSerialize(dia))
    };
}

export function viagemDeserialize(data: Viagem): any {
    return {
        ...data
    };
}