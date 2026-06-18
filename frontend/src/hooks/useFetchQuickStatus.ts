import dashboardService from '@services/dashboardService';
import { useFetch, type StateData } from './useFetch';
import type { QuickStatus } from '../models/dashboard.model';

const useFetchQuickStatus = (): StateData<QuickStatus[]> => {
    return useFetch(() => dashboardService.getQuickStatus());
};

export default useFetchQuickStatus;