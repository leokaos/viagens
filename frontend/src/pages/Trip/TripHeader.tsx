import type { Viagem } from "@models/viagem.model";
import viagemService from "@services/viagemService";
import { differenceInCalendarDays, format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useRef } from "react";
import TripStatus from "./TripStatus";

const TripHeader = ({ viagem, onFotoUpload }: { viagem: Viagem; onFotoUpload: (viagem: Viagem) => void }) => {

    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleUploadClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = async (event: any) => {
        const file = event.target.files[0];

        if (!file) return;

        const viagemAtualizada = await viagemService.uploadPicture(viagem, file);

        onFotoUpload(viagemAtualizada);
    };

    const formataData = (date: Date) => {
        return format(date, "dd 'de' MMM", { locale: ptBR })
    }

    const diasDaviagem = viagem.data_inicio && viagem.data_fim ? differenceInCalendarDays(viagem.data_fim, viagem.data_inicio) : 0;

    return (
        <div className="mb-8 rounded-lg relative">
            <div className="relative">
                {viagem?.imagem && (
                    <img
                        src={`${viagem.imagem}?time=${new Date().getTime()}`}
                        alt={viagem.descricao}
                        className="w-full h-48 object-cover rounded-lg" />
                )}
                <i className="pi pi-upload absolute top-2 right-2 text-white text-2xl" onClick={handleUploadClick}></i>
            </div>
            <div className="mb-10">
                <h2 className="text-4xl text-[#1a1c1e] mb-2">{viagem?.descricao}</h2>
                <div className="flex items-center gap-4 text-[#74777f] text-sm">
                    <span>
                        <i className="pi pi-calendar mr-2" />
                        {`${formataData(viagem?.data_inicio)} - ${formataData(viagem?.data_fim)} (${diasDaviagem} Dias)`}
                    </span>
                </div>
            </div>
            <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*" className="hidden" />

            <div className="grid grid-cols-3 gap-12">
                <TripStatus viagem={viagem} />
            </div>
        </div>
    )
}

export default TripHeader;