import dashboardService, { type QuickStatus } from '@/services/dashboardService';
import { useFetch, type StateData } from './useFetch';

const useFetchQuickStatus = (): StateData<QuickStatus[]> => {
    return useFetch(() => dashboardService.getQuickStatus());
};

export default useFetchQuickStatus;