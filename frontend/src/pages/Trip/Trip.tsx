import Loader from "@components/Loader/Loader";
import { useFetch } from "@hooks/useFetch";
import viagemService from "@services/viagemService";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
import { Button } from "primereact/button";
import type { DiaViagem, Viagem } from "@models/viagem.model";
import { useEffect, useState } from "react";
import TripHeader from "./TripHeader";


const Trip = () => {

    const parametros = useParams();
    const [diaSelecionado, setDiaSelecionado] = useState<DiaViagem>();
    const [viagem, setViagem] = useState<Viagem | null>(null);

    const viagemId = parametros.id && !isNaN(parseInt(parametros.id)) ? parseInt(parametros.id) : null;

    const { data, loading } = useFetch(() =>
        viagemId ? viagemService.getById(viagemId) : Promise.resolve(null),
        [viagemId]
    );

    useEffect(() => {

        if (data && !viagem) {

            setViagem(data);

            if (data?.dias && data.dias.length > 0) {
                setDiaSelecionado(data.dias[0]);
            }
        }

    }, [data]);

    const handleFotoUpload = (viagemAtualizada: Viagem) => {
        setViagem(viagemAtualizada);
    };

    if (loading || !viagem) {
        return (
            <Loader />
        )
    }

    return (
        <>

            <TripHeader viagem={viagem} onFotoUpload={handleFotoUpload} />

            <div className="grid grid-cols-12 gap-8">

                <div className="col-span-2">

                    {viagem.dias?.map(diaViagem =>
                        <Button
                            key={diaViagem.id}
                            outlined={diaSelecionado?.id !== diaViagem.id}
                            className='w-full my-2 flex justify-center'
                            badge={(diaViagem.atividades.length).toString()}
                            badgeClassName="p-badge-danger"
                            onClick={() => setDiaSelecionado(diaViagem)}
                        >
                            {format(diaViagem.data_dia, 'dd/MM/yyyy')}
                        </Button>
                    )}
                </div>

                <div className="col-span-7">
                    {diaSelecionado?.atividades.map((atividade_do_dia, index) => {
                        return (
                            <div
                                key={`${atividade_do_dia.atividade.id}-${atividade_do_dia.data_inicio}-${index}`}
                                className="flex-1 bg-white p-6 rounded-2xl shadow-sm border border-transparent hover:border-[#cbdbf5] transition-all relative"
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <div className="text-[#0052cc] text-xs font-bold tracking-tight">
                                        {format(atividade_do_dia.data_inicio, 'HH:MM')} — {format(atividade_do_dia.data_fim, 'HH:MM')}
                                    </div>
                                    <div className="text-sm font-black text-[#1a1c1e]">{atividade_do_dia.custo}{atividade_do_dia.id}</div>
                                </div>

                                <h4 className="text-lg font-black mb-2">{atividade_do_dia.atividade.descricao}</h4>
                                <p className="text-xs text-[#74777f] leading-relaxed mb-4">{atividade_do_dia.atividade.descricao}</p>

                            </div>
                        )
                    })}
                </div>
                <div className="col-span-3">3</div>
            </div>

        </>
    )
}

export default Trip;