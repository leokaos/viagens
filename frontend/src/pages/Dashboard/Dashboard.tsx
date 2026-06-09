import { Button } from "primereact/button";
import { Card } from 'primereact/card';
import { Badge } from 'primereact/badge';
import { useContextUser } from "../../context/UserContext";
import useFetchProximaViagem from "../../hooks/useFetchProximaViagem";

const Dashboard = () => {

    const stats = [
        { label: 'DAYS UNTIL KYOTO', value: '12', milestone: 'NEXT MILESTONE', icon: 'pi pi-calendar', color: 'bg-blue-500' },
        { label: 'TOTAL BUDGET USED', value: '$3,240', subtext: '/ $5k', status: 'ON TRACK', icon: 'pi pi-wallet', color: 'bg-green-500' },
        { label: 'COUNTRIES VISITED', value: '14', status: 'EXPLORER', icon: 'pi pi-globe', color: 'bg-orange-500' }
    ];

    const user = useContextUser();
    const viagemMaisProxima = useFetchProximaViagem();

    console.info(viagemMaisProxima?.data_inicio)

    return (
        <>
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h2 className="text-4xl font-bold text-[#1a1c1e]">Welcome back, {user?.nome}</h2>
                    <p className="text-[#44474e] text-lg mt-1">Your next adventure starts in <span className="text-[#2563eb] font-bold">12 days</span>.</p>
                </div>
                <Button label="Create New Trip" icon="pi pi-plus-circle" className="p-button-primary p-button-outlined border-2 text-[#2563eb] border-[#2563eb] hover:bg-[#eff4ff] rounded-xl px-6 h-12 font-bold" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                {stats.map((stat, i) => (
                    <Card key={i} className={`border-l-4 ${stat.color} shadow-sm border-none bg-white rounded-2xl`}>
                        <div className="flex justify-between items-start mb-6">
                            <div className="p-3 bg-[#f8f9ff] rounded-xl">
                                <i className={`${stat.icon} text-2xl text-[#2563eb]`} />
                            </div>
                            <Badge value={stat.milestone || stat.status} className={stat.status === 'ON TRACK' ? 'bg-[#d1e8ff] text-[#001d4a]' : 'bg-[#ffe082] text-[#261900]'} />
                        </div>
                        <div className="text-5xl font-black text-[#1a1c1e] mb-2 tracking-tight">
                            {stat.value}
                            <span className="text-xl text-[#44474e] font-medium ml-1">{stat.subtext}</span>
                        </div>
                        <div className="text-xs font-black text-[#74777f] uppercase tracking-[0.2em]">{stat.label}</div>
                    </Card>
                ))}
            </div>
        </>
    );
};

export default Dashboard;