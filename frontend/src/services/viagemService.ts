import { Viagem } from "@models/viagem.model";
import { BaseService } from "./baseService";
import { diaViagemSerialize } from "./diaViagemService";

class ViagemService extends BaseService<Viagem> {

    constructor() {
        super('/viagem', viagemSerialize, viagemDeserialize);
    }

    async uploadPicture(viagem: Viagem, foto: any): Promise<Viagem> {

        const response = await fetch(this.getFullUrl(`/${viagem.id}/foto`), {
            method: 'POST',
            headers: { 'Content-Type': 'image/jpg' },
            body: foto
        });

        const result = await this.handleResponse<any>(response);
        return this.serialize(result);
    }

}

export default new ViagemService();

export function viagemSerialize(data: any): Viagem {
    return new Viagem({
        ...data,
        dias: data.dias.map((dia: any) => diaViagemSerialize(dia))
    });
}

export function viagemDeserialize(data: Viagem): any {
    return {
        ...data
    };
}