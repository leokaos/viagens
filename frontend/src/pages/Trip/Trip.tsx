import Loader from "@components/Loader/Loader";
import { useFetch } from "@hooks/useFetch";
import viagemService from "@services/viagemService";
import { useParams } from "react-router-dom";
import { differenceInCalendarDays, format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Button } from "primereact/button";
import { Card } from "primereact/card";

const Trip = () => {

    const parametros = useParams();

    const viagemId = parametros.id && !isNaN(parseInt(parametros.id)) ? parseInt(parametros.id) : null;

    const { data: viagem, loading } = useFetch(() =>
        viagemId ? viagemService.getById(viagemId) : Promise.resolve(null),
        [viagemId]
    );

    const formataData = (date: Date) => {
        return format(date, "dd 'de' MMM", { locale: ptBR })
    }

    if (loading || !viagem) {
        return (
            <Loader />
        )
    }

    const diasDaviagem = viagem.data_inicio && viagem.data_fim ? differenceInCalendarDays(viagem.data_fim, viagem.data_inicio) : 0;
    const diaSelecionado = viagem.dias[0];

    return (
        <>
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h2 className="text-4xl text-[#1a1c1e] mb-2">{viagem?.descricao}</h2>
                    <div className="flex items-center gap-4 text-[#74777f] text-sm">
                        <span>
                            <i className="pi pi-calendar mr-2" />
                            {`${formataData(viagem?.data_inicio)} - ${formataData(viagem?.data_fim)} (${diasDaviagem} Dias)`}
                        </span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-6 mb-12">
                <Card className="border-none shadow-sm bg-white rounded-2xl p-4">
                    <div className="flex justify-between items-center mb-3">
                        <span className="text-xs font-bold text-[#74777f]">Total Budget</span>
                        <i className="pi pi-wallet text-[#0052cc]" />
                    </div>
                    <div className="text-2xl font-black">$4,500.00</div>
                    <div className="w-full bg-[#eff4ff] h-1.5 rounded-full mt-3"></div>
                </Card>
                <Card className="border-none shadow-sm bg-white rounded-2xl p-4">
                    <div className="flex justify-between items-center mb-3">
                        <span className="text-xs font-bold text-[#74777f]">Current Spent</span>
                        <i className="pi pi-chart-line text-[#0052cc]" />
                    </div>
                    <div className="text-2xl font-black">$3,240.50</div>
                    <div className="text-[10px] font-bold text-green-600 mt-2">72% of budget used</div>
                </Card>
                <Card className="border-none shadow-sm bg-white rounded-2xl p-4">
                    <div className="flex justify-between items-center mb-3">
                        <span className="text-xs font-bold text-[#74777f]">Remaining Funds</span>
                        <i className="pi pi-money-bill text-[#0052cc]" />
                    </div>
                    <div className="text-2xl font-black">$1,259.50</div>
                    <div className="text-[10px] font-bold text-[#74777f] mt-2">Estimated surplus: $140.00</div>
                </Card>
            </div>

            <div className="grid grid-cols-12 gap-8">

                <div className="col-span-2">

                    {viagem.dias.map(diaViagem =>
                        <Button
                            outlined={diaSelecionado.id !== diaViagem.id}
                            className='w-full my-2 flex justify-center'
                            badge={(diaViagem.atividades.length).toString()}
                            badgeClassName="p-badge-danger"
                        >
                            {format(diaViagem.data_inicio, 'dd/MM/yyyy')}
                        </Button>
                    )}
                </div>

                <div className="col-span-7">7</div>
                <div className="col-span-3">3</div>
            </div>
        </>
    )
}

export default Trip;