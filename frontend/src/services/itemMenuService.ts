import type { ItemMenu } from "../models/menu.model";
import { BaseService } from "./baseService";

class ItemMenuService extends BaseService<ItemMenu> {

    constructor() {
        super('/menu');
    }

}

export default new ItemMenuService();