
export interface Gasto {
    id: number;
    descricao: string;
    valor: number;
    pago: boolean;
}

export interface Atividade {
    id: number;
    descricao: string
}

export interface DiaViagem {
    id: number;
    data_inicio: Date;
    data_final: Date;
    atividades: Atividade[];
}

export interface Viagem {
    id: number;
    data_inicio: Date;
    data_fim: Date;
    orcamento: number;
    descricao: string;
    observacao: string;
    status: 'PLANNING' | 'CONFIRMED' | 'ONGOING' | 'CANCELLED';
    gastos: Gasto[];
    dias: DiaViagem[];
    imagem: string;
}