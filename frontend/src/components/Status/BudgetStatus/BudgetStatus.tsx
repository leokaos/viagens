import type { QuickStatus } from "@/services/dashboardService";
import { Badge } from "primereact/badge";
import { Card } from "primereact/card";

const BudgetStatus = ({ stat }: { stat: QuickStatus }) => {

    return (
        <Card className={`border-l-4 shadow-sm border-none bg-white rounded-2xl`}>
            <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-[#f8f9ff] rounded-xl">
                    <i className="pi pi-wallet text-2xl text-[#2563eb]" />
                </div>
                <Badge value={stat.status} className={stat.status === 'DENTRO DO ORÇAMENTO' ? 'bg-[#d1e8ff] text-[#001d4a]' : 'bg-[#ffe082] text-[#261900]'} />
            </div>
            <div className="text-5xl font-black text-[#1a1c1e] mb-2 tracking-tight">
                {stat.value}
                <span className="text-xl text-[#44474e] font-medium ml-1">/ {stat.subtext}</span>
            </div>
            <div className="text-xs font-black text-[#74777f] uppercase tracking-[0.2em]">{stat.label}</div>
        </Card>
    )
};

export default BudgetStatus;