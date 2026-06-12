import itemMenuService, { type ItemMenu } from '../services/itemMenuService';
import { useFetch, type StateData } from './useFetch';

const useFetchItemMenu = (): StateData<ItemMenu[]> => {
  return useFetch(() => itemMenuService.getAll({}, "order_item asc"));
};

export default useFetchItemMenu;