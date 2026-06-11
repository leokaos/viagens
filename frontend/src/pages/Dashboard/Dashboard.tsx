import { Button } from "primereact/button";
import { useContextUser } from "../../context/UserContext";
import useFetchProximaViagem from "../../hooks/useFetchProximaViagem";
import { differenceInCalendarDays } from "date-fns";
import Loader from "@components/Loader/Loader";
import useFetchQuickStatus from "@hooks/useFetchQuickStatus";
import NextTripStatus from "@components/Status/NextTripStatus/NextTripStatus";
import BudgetStatus from "@components/Status/BudgetStatus/BudgetStatus";
import VisitedCountriesStatus from "@components/Status/VisitedCountryStatus/VisitedCountryStatus";
import useFetchTresUltimasViagens from "@hooks/useFetchTresUltimasViagens";
import TripCard from "@components/TripCard/TripCard";

const Dashboard = () => {

    const statComponents = {
        nextTrip: NextTripStatus,
        budget: BudgetStatus,
        visitedCountries: VisitedCountriesStatus,
    } as const;

    const user = useContextUser();
    const viagemMaisProxima = useFetchProximaViagem();
    const stats = useFetchQuickStatus();
    const tresUltimasViagens = useFetchTresUltimasViagens();

    if (!user || viagemMaisProxima.loading || stats.loading || tresUltimasViagens.loading) {
        return (
            <Loader />
        )
    }

    const diasEntreHojeEViagemMaisProxima = viagemMaisProxima.data?.data_inicio ? differenceInCalendarDays(viagemMaisProxima.data.data_inicio, new Date()) : 0;

    return (
        <>
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h2 className="text-4xl font-bold text-[#1a1c1e]">Welcome back, {user?.nome}</h2>
                    <p className="text-[#44474e] text-lg mt-1">Your next adventure starts in <span className="text-[#2563eb] font-bold">{diasEntreHojeEViagemMaisProxima} days</span>.</p>
                </div>
                <Button label="Create New Trip" icon="pi pi-plus-circle" className="p-button-primary p-button-outlined border-2 text-[#2563eb] border-[#2563eb] hover:bg-[#eff4ff] rounded-xl px-6 h-12 font-bold" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                {stats.data?.map((stat, i) => {
                    const Component = statComponents[stat.type];

                    if (!Component) return null;

                    return <Component stat={stat} key={i} />;
                })}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                <div className="lg:col-span-3">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-2xl font-bold">Upcoming Trips</h3>
                        <Button label="View all trips" icon="pi pi-chevron-right" iconPos="right" className="p-button-text text-[#2563eb] font-bold p-0" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {tresUltimasViagens.data?.map(viagem => <TripCard viagem={viagem} />)}
                    </div>
                </div>
            </div>

        </>
    );
};

export default Dashboard;