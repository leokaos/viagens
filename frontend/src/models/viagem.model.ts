
export interface Tag {
    nome: string;
    descricao: string;
}

export interface Destino {
    id: number;
    nome: string;
    descricao: string;
    tags: Tag[];
}

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

export interface DiaViagemAtividade {
    id: number;
    data_inicio: Date;
    data_fim: Date;
    custo: number;
    atividade: Atividade;
}

export interface DiaViagem {
    id: number;
    data_dia: Date;
    atividades: DiaViagemAtividade[];
}

export class Viagem {
    id: number;
    data_inicio: Date;
    data_fim: Date;
    orcamento: number;
    descricao: string;
    observacao: string;
    status: 'PLANNING' | 'CONFIRMED' | 'ONGOING' | 'CANCELLED';
    gastos?: Gasto[];
    dias?: DiaViagem[];
    imagem: string;
    destinos?: Destino[];

    constructor(data: any) {
        this.id = data.id;
        this.data_inicio = new Date(data.data_inicio);
        this.data_fim = new Date(data.data_fim);
        this.orcamento = data.orcamento;
        this.descricao = data.descricao;
        this.observacao = data.observacao;
        this.status = data.status;
        this.gastos = data.gastos;
        this.dias = data.dias;
        this.imagem = data.imagem;
        this.destinos = data.destinos;
    }

}