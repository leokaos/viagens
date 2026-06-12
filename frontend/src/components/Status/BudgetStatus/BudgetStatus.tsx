import type { QuickStatus } from "@/services/dashboardService";
import { Badge } from "primereact/badge";
import { Card } from "primereact/card";

const BudgetStatus = ({ stat }: { stat: QuickStatus }) => {

    const percentualGasto = (stat.gasto / stat.total) * 100;

    const statusConfig = {
        'ok': { text: 'DENTRO DO ORÇAMENTO', color: 'bg-[#d1e8ff] text-[#001d4a]' },
        'atencao': { text: 'ATENÇÃO', color: 'bg-[#ffe082] text-[#261900]' },
        'critico': { text: 'CRÍTICO', color: 'bg-[#ffb74d] text-[#261900]' },
        'estouro': { text: 'EXCEDEU', color: 'bg-[#ff8a80] text-[#b71c1c]' }
    };

    let config = statusConfig.ok;

    if (percentualGasto > 100) config = statusConfig.estouro;
    if (percentualGasto >= 90) config = statusConfig.critico;
    if (percentualGasto >= 75) config = statusConfig.atencao;

    return (
        <Card className={`border-l-4 shadow-sm border-none bg-white rounded-2xl`}>
            <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-[#f8f9ff] rounded-xl">
                    <i className="pi pi-wallet text-2xl text-[#2563eb]" />
                </div>
                <Badge value={config.text} className={config.color} />
            </div>
            <div className="text-4xl font-black text-[#1a1c1e] mb-2 tracking-tight">
                {stat.gasto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                <span className="text-xl text-[#44474e] font-medium ml-1">/ {stat.total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
            </div>
            <div className="text-xs font-black text-[#74777f] uppercase tracking-[0.2em]">
                GASTOS TOTAIS
            </div>
        </Card>
    )
};

export default BudgetStatus;