import type { QuickStatus } from "@/services/dashboardService";
import { Badge } from "primereact/badge";
import { Card } from "primereact/card";

const VisitedCountryStatus = ({ stat }: { stat: QuickStatus }) => {

    const statusConfig = {
        'iniciante': { text: 'INICIANTE', color: 'bg-[#e8f5e9] text-[#2e7d32]' },
        'viajado': { text: 'VIAJADO', color: 'bg-[#c8e6c9] text-[#1b5e20]' },
        'aventureiro': { text: 'AVENTUREIRO', color: 'bg-[#4caf50] text-white' },
        'explorador': { text: 'EXPLORADOR', color: 'bg-[#2e7d32] text-white' }
    };

    let config = statusConfig.iniciante;

    if (stat.paises >= 3) config = statusConfig.viajado;
    if (stat.paises >= 7) config = statusConfig.aventureiro;
    if (stat.paises >= 10) config = statusConfig.explorador;

    return (
        <Card className={`border-l-4 shadow-sm border-none bg-white rounded-2xl`}>
            <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-[#f8f9ff] rounded-xl">
                    <i className="pi pi-globe text-2xl text-[#2563eb]" />
                </div>
                <Badge value={config.text} className={config.color} />
            </div>
            <div className="text-5xl font-black text-[#1a1c1e] mb-2 tracking-tight">
                {stat.paises}
                <span className="text-xl text-[#44474e] font-medium ml-1">{stat.subtext}</span>
            </div>
            <div className="text-xs font-black text-[#74777f] uppercase tracking-[0.2em]">PAÍSES VISITADOS</div>
        </Card>
    )
};

export default VisitedCountryStatus;