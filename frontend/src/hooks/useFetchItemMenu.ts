import itemMenuService from '@services/itemMenuService';
import { useFetch, type StateData } from './useFetch';
import type { ItemMenu } from '../models/menu.model';

const useFetchItemMenu = (): StateData<ItemMenu[]> => {
  return useFetch(() => itemMenuService.getAll({}, "order_item asc"));
};

export default useFetchItemMenu;