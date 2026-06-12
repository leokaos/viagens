const BASE_URL = 'http://localhost:8000';

export abstract class BaseService<T> {

    protected path: string;

    constructor(path: string) {
        this.path = path;
    }

    protected getFullUrl(endpoint: string = ''): string {
        return `${BASE_URL}${this.path}${endpoint}`;
    }

    async getAll(filters: Record<string, any> = {}, order?: string, limit?: number): Promise<T[]> {
        const url = new URL(this.getFullUrl('/'));

        Object.entries(filters).forEach(([key, value]) => {
            if (value !== undefined && value !== null) {
                url.searchParams.append(key, String(value));
            }
        });

        if (order) {
            url.searchParams.append("order", order);
        }

        if (limit) {
            url.searchParams.append("limit", String(limit));
        }

        const response = await fetch(url.toString());
        const data = await this.handleResponse<any[]>(response);
        return data.map(item => this.serialize(item));
    }

    async getById(id: number): Promise<T> {
        const response = await fetch(this.getFullUrl(`/${id}`));
        const data = await this.handleResponse<any>(response);
        return this.serialize(data);
    }

    async create(data: Omit<T, 'id'>): Promise<T> {
        const deserialized = this.deserialize(data as T);
        const response = await fetch(this.getFullUrl(), {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(deserialized)
        });
        const result = await this.handleResponse<any>(response);
        return this.serialize(result);
    }

    async update(id: number, data: Partial<T>): Promise<T> {
        const deserialized = this.deserialize(data as T);
        const response = await fetch(this.getFullUrl(`/${id}`), {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(deserialized)
        });
        const result = await this.handleResponse<any>(response);
        return this.serialize(result);
    }

    async delete(id: number): Promise<void> {
        const response = await fetch(this.getFullUrl(`/${id}`), {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error('ERRO!');
        }
    }

    private async handleResponse<U>(response: Response): Promise<U> {
        if (!response.ok) {
            throw new Error('ERRO!');
        }
        return response.json();
    }

    protected serialize(data: any): T {
        return data as T;
    }

    protected deserialize(data: T): any {
        return data;
    }
}