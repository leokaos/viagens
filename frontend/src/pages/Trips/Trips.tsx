import Loader from "@/components/Loader/Loader";
import TripCard from "@/components/TripCard/TripCard";
import { useContextUser } from "@/context/UserContext";
import useFetchAllViagens from "@/hooks/useFetchAllViagens";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import NoEntriesBlock from "@/components/NoEntriesBlock/NoEntriesBlock";

const Trips = () => {

    const user = useContextUser();

    const [query, setQuery] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [sortBy, setSortBy] = useState();

    const { data, loading } = useFetchAllViagens({ "destination": query, "sortBy": sortBy });

    const sortOptions = [
        { label: "Date (Closest First)", value: "inicio asc" },
        { label: "Date (Farthest First)", value: "inicio desc" },
        { label: "Destination (A-Z)", value: "destino asc" },
        { label: "Destination (Z-A)", value: "destino desc" },
    ];

    const handleSearchKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            setQuery(searchTerm);
        }
    };

    if (!user) {
        return <Loader />;
    }

    return (
        <>
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h2 className="text-4xl font-bold text-[#1a1c1e]">All Trips</h2>
                    <p className="text-[#44474e] text-lg mt-1">Manage and view all your travel adventures</p>
                </div>
                <Button
                    label="Create New Trip"
                    icon="pi pi-plus-circle"
                    className="p-button-primary p-button-outlined border-2 text-[#2563eb] border-[#2563eb] hover:bg-[#eff4ff] rounded-xl px-6 h-12 font-bold" />
            </div>

            <div className="flex gap-4 items-center bg-white p-4 rounded-xl shadow-sm mb-8">

                <div className="flex-1">
                    <div className="p-inputgroup">
                        <span className="p-inputgroup-addon bg-white border-r-0">
                            <i className="pi pi-search"></i>
                        </span>
                        <InputText
                            placeholder="Search by destination..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onKeyUp={handleSearchKeyPress}
                            className="border-l-0" />
                    </div>
                </div>

                <div className="w-64">
                    <Dropdown value={sortBy} options={sortOptions} onChange={(e) => setSortBy(e.value)} placeholder="Sort by" className="w-full" />
                </div>

            </div>

            {loading ? (<Loader />) :
                (
                    <>
                        <div className="flex justify-between items-center mb-6">
                            {query && (
                                <Button label="Clear Search" icon="pi pi-times" className="p-button-text p-button-sm" onClick={() => { setSearchTerm(""); setQuery(""); }} />
                            )}
                        </div>
                        {data?.length === 0 ?
                            (<NoEntriesBlock icon="pi pi-map-marker" message="No trips found" />) :
                            (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {data?.map(viagem => (<TripCard key={viagem.id} viagem={viagem} />))}
                                </div>
                            )}
                    </>
                )}
        </>
    );
};

export default Trips;