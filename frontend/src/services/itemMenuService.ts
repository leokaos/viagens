import { BaseService } from "./baseService";

export interface ItemMenu {
    id: number;
    nome: string;
    codigo_acao: string;
    icone: string;
    order_item: number;
}

class ItemMenuService extends BaseService<ItemMenu> {
    constructor() {
        super('/menu');
    }
}

export default new ItemMenuService();