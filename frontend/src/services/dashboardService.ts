const BASE_URL = 'http://localhost:8000';

export interface QuickStatus {
    type: 'nextTrip' | 'budget' | 'visitedCountries';
    [key: string]: any;
}

class DashboardService {

    protected path: string = 'dashboard';

    async getQuickStatus(): Promise<QuickStatus[]> {
        const response = await fetch(`${BASE_URL}/${this.path}/status`);

        if (!response.ok) {
            throw new Error('ERRO!');
        }

        return response.json();
    }

}

export default new DashboardService();
