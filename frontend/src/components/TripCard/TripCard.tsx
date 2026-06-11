import type { Viagem } from "@/services/viagemService";
import { format } from "date-fns";
import { Badge } from "primereact/badge";
import { Card } from "primereact/card";
import { ProgressBar } from "primereact/progressbar";
import { ptBR } from 'date-fns/locale';

const TripCard = ({ viagem }: { viagem: Viagem }) => {

    const statusClasses: Record<Viagem['status'], string> = {
        PLANNING: 'bg-blue-100 text-blue-900',
        CONFIRMED: 'bg-green-100 text-green-900',
        ONGOING: 'bg-yellow-100 text-yellow-900',
        CANCELLED: 'bg-red-100 text-red-900',
    };

    const totalGastos = viagem.gastos?.reduce((sum, gasto) => sum + gasto.valor, 0) || 0;
    const percentGastos = totalGastos / viagem.orcamento;

    return (
        <Card key={viagem.id} className="overflow-hidden border-none shadow-lg p-0 bg-white rounded-3xl group cursor-pointer">
            <div className="relative h-56 overflow-hidden">
                <img src={viagem.imagem} alt={viagem.descricao} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl text-xs font-black shadow-sm">
                    {format(viagem.data_inicio, "dd 'de' MMM", { locale: ptBR })} - {format(viagem.data_fim, "dd 'de' MMM", { locale: ptBR })}
                </div>
            </div>
            <div className="p-6">

                <div className="flex items-start justify-between mb-2">
                    <div className="min-w-0">
                        <h4 className="font-bold text-xl mb-1">{viagem.descricao}</h4>

                        <p className="text-sm text-[#74777f] font-medium line-clamp-2">
                            {viagem.observacao}
                        </p>
                    </div>

                    <div className="flex-shrink-0">
                        <Badge value={viagem.status} className={statusClasses[viagem.status]} />
                    </div>
                </div>

                <div className="mt-6">
                    <div className="flex justify-between text-xs mb-3">

                        <span className="text-[#74777f] font-bold uppercase tracking-wider">Gastos</span>

                        <span className="font-black text-[#2563eb]">
                            {totalGastos.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} / {viagem.orcamento.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </span>

                    </div>
                    <ProgressBar value={percentGastos * 100} showValue={false} style={{ height: '8px' }} className="rounded-full bg-[#eff4ff]" color="#2563eb" />
                </div>

            </div>
        </Card>
    )
};

export default TripCard;