import type { Viagem } from "@models/viagem.model";
import { Card } from "primereact/card";


const TripStatus = ({ viagem }: { viagem: Viagem }) => {

    const orçamentoTotal = viagem.orcamento;
    const gastosTotais = viagem.gastos ? viagem.gastos.reduce((acc, gasto) => acc + gasto.valor, 0) : 0;
    const gastoAtividades = viagem.dias ? viagem.dias.flatMap(dia => dia.atividades).reduce((acc, atividade) => acc + atividade.custo, 0) : 0;

    const budgetInfo = [
        { "titulo": "Orçamento Total", icone: "pi pi-wallet", valor: orçamentoTotal },
        { "titulo": "Gastos Atuais", icone: "pi pi-chart-line", valor: gastosTotais + gastoAtividades },
        { "titulo": "Fundos Restantes", icone: "pi pi-money-bill", valor: orçamentoTotal - (gastosTotais + gastoAtividades) }
    ];

    return (
        <>
            {budgetInfo.map((info, index) => {
                return (
                    <Card key={index} className="border-none shadow-sm bg-white rounded-2xl">
                        <div className="flex justify-between items-center">
                            <span className="text-xs font-bold text-[#74777f]">{info.titulo}</span>
                            <i className={`pi ${info.icone} text-[#0052cc]`} />
                        </div>
                        <div className="text-2xl font-black">
                            {info.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                        </div>
                    </Card>
                )
            })
            }
        </>
    )
}

export default TripStatus;