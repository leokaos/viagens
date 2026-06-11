const BASE_URL = 'http://localhost:8000';

export interface QuickStatus {
    type: 'nextTrip' | 'budget' | 'visitedCountries';
    label: string;
    value: string;
    status: string;
    color?: string;
    subtext?: string;
}

class DashboardService {

    protected path: string = 'dashboard';

    async getQuickStatus(): Promise<QuickStatus[]> {
        const response = await fetch(`${BASE_URL}/${this.path}`);

        if (!response.ok) {
            throw new Error('ERRO!');
        }

        return response.json();
    }

}

export default new DashboardService();
