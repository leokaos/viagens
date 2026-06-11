import { Avatar } from "primereact/avatar";
import { Badge } from "primereact/badge";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { useState } from "react";


// Types
interface ItineraryActivity {
    id: number;
    timeStart: string;
    timeEnd: string;
    title: string;
    description: string;
    location: string;
    distance: string;
    cost: string;
    image?: string;
    type?: 'activity' | 'transfer' | 'meal';
    status?: 'CONFIRMED' | 'RESERVED' | 'BUDGET';
}

interface ItineraryDay {
    id: string;
    date: string;
    label: string;
}

const Trip = () => {
    const [selectedDay, setSelectedDay] = useState('Day 01');

    const days: ItineraryDay[] = [
        { id: 'Day 01', date: 'Mar 24', label: 'Day 01' },
        { id: 'Day 02', date: 'Mar 25', label: 'Day 02' },
        { id: 'Day 03', date: 'Mar 26', label: 'Day 03' },
        { id: 'Day 04', date: 'Mar 27', label: 'Day 04' }
    ];

    const activities: ItineraryActivity[] = [
        {
            id: 1,
            timeStart: '09:30 AM',
            timeEnd: '11:30 AM',
            title: 'Arashiyama Bamboo Grove',
            description: 'Explore the famous towering bamboo paths. Best enjoyed early in the morning to avoid the crowds. Perfect for scenic photography.',
            location: 'Ukyo Ward, Kyoto',
            distance: '15 min from Station',
            cost: '$0.00',
            image: 'https://images.unsplash.com/photo-1476156088661-e7a91db0a95f?q=80&w=800',
            type: 'activity'
        },
        {
            id: 2,
            timeStart: '12:30 PM',
            timeEnd: '02:00 PM',
            title: 'Lunch at Tenryu-ji Temple',
            description: 'Shigetsu restaurant inside the temple serves exquisite Zen vegetarian cuisine (Shojin Ryori) with garden views.',
            location: 'Traditional Veg',
            distance: 'Ref: KYO-8821',
            cost: '$45.00',
            image: 'https://images.unsplash.com/photo-1512132411229-c30391241dd8?q=80&w=800',
            type: 'meal',
            status: 'RESERVED'
        },
        {
            id: 3,
            timeStart: 'Transfer to Gion District',
            timeEnd: '',
            title: 'Transfer to Gion District',
            description: 'Estimated: 35 mins via Hankyu Line • $3.40',
            location: '',
            distance: '',
            cost: '$3.40',
            type: 'transfer'
        },
        {
            id: 4,
            timeStart: '04:00 PM',
            timeEnd: '06:00 PM',
            title: 'Gion Geisha District Walk',
            description: 'Guided walking tour of the historic tea house district. *Waitlist for popular tour guide \'Akiko\'.',
            location: 'Guided Tour',
            distance: '',
            cost: '$85.00',
            type: 'activity',
            status: 'BUDGET'
        }
    ];

    return (
        <div className="flex min-h-screen bg-[#f8f9ff] font-sans text-[#1a1c1e]">
            {/* Side Navigation */}
            <aside className="w-64 bg-white border-r border-[#cbdbf5]/30 flex flex-col sticky top-0 h-screen">
                <div className="p-6">
                    <h1 className="text-2xl font-bold text-[#004299]">VoyageEase</h1>
                </div>

                <div className="px-6 mb-8 text-center">
                    <div className="relative inline-block mb-3">
                        <Avatar image="https://i.pravatar.cc/150?u=leo" size="xlarge" shape="circle" className="border-2 border-[#d7e2ff]" />
                        <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
                    </div>
                    <h2 className="font-bold text-sm">Traveler Explorer</h2>
                    <p className="text-[10px] text-[#74777f] uppercase font-bold tracking-wider">Premium Member</p>
                </div>

                <nav className="flex-1 px-4 space-y-2">
                    <Button label="Dashboard" icon="pi pi-home" className="p-button-text w-full justify-start text-[#44474e] font-medium" />
                    <Button label="My Trips" icon="pi pi-map" className="p-button-text w-full justify-start bg-[#d1e8ff] text-[#001d4a] font-bold rounded-xl" />
                    <Button label="Checklists" icon="pi pi-list" className="p-button-text w-full justify-start text-[#44474e] font-medium" />
                    <Button label="Inspiration" icon="pi pi-lightbulb" className="p-button-text w-full justify-start text-[#44474e] font-medium" />
                    <Button label="Settings" icon="pi pi-cog" className="p-button-text w-full justify-start text-[#44474e] font-medium" />
                </nav>

                <div className="p-6 mt-auto border-t border-[#cbdbf5]/30">
                    <Button label="Help & Support" icon="pi pi-question-circle" className="p-button-text w-full justify-start text-[#74777f] text-xs" />
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col min-w-0">
                {/* Header */}
                <header className="h-16 bg-white/80 backdrop-blur-md border-b border-[#cbdbf5]/20 flex items-center justify-between px-10 sticky top-0 z-40">
                    <div className="flex items-center gap-4">
                        <div className="p-input-icon-left">
                            <i className="pi pi-search text-[#74777f]" />
                            <InputText placeholder="Search my trips..." className="p-inputtext-sm bg-transparent border-none focus:shadow-none w-64" />
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <Button label="+ Add Trip" className="bg-[#0052cc] border-none text-white font-bold px-4 h-9 rounded-lg shadow-sm" />
                        <div className="flex items-center gap-4 text-[#44474e]">
                            <i className="pi pi-bell cursor-pointer" />
                            <i className="pi pi-question-circle cursor-pointer" />
                            <Avatar image="https://i.pravatar.cc/150?u=leo" shape="circle" className="border border-[#cbdbf5]" />
                        </div>
                    </div>
                </header>

                <div className="p-8 max-w-[1200px] w-full mx-auto">
                    {/* Itinerary Header */}
                    <div className="flex justify-between items-start mb-8">
                        <div>
                            <div className="flex items-center gap-2 text-[#0052cc] text-xs font-bold uppercase mb-2">
                                <i className="pi pi-map-marker text-[10px]" />
                                KYOTO, JAPAN
                            </div>
                            <h2 className="text-4xl font-black text-[#1a1c1e] mb-2">Cherry Blossom Expedition</h2>
                            <div className="flex items-center gap-4 text-[#74777f] text-sm">
                                <span><i className="pi pi-calendar mr-2" />March 24 — April 02, 2024 (10 Days)</span>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <Button label="Export PDF" icon="pi pi-file-pdf" className="p-button-text text-[#44474e] font-bold" />
                            <Button label="Add Activity" icon="pi pi-plus" className="bg-[#0052cc] border-none text-white font-bold px-6 h-10 rounded-xl shadow-md" />
                        </div>
                    </div>

                    {/* Summary Stats Cards */}
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
                        {/* Day Selector Sidebar */}
                        <div className="col-span-2">
                            <h3 className="text-[10px] font-black text-[#74777f] tracking-widest uppercase mb-4">ITINERARY DAYS</h3>
                            <div className="space-y-2">
                                {days.map(day => (
                                    <button
                                        key={day.id}
                                        onClick={() => setSelectedDay(day.id)}
                                        className={`w-full flex justify-between items-center px-4 py-3 rounded-xl text-xs font-bold transition-all ${selectedDay === day.id
                                                ? 'bg-[#0052cc] text-white shadow-lg shadow-blue-500/20'
                                                : 'bg-white text-[#44474e] hover:bg-[#eff4ff]'
                                            }`}
                                    >
                                        <span>{day.label}</span>
                                        <span className={`opacity-60 ${selectedDay === day.id ? 'text-white' : ''}`}>{day.date}</span>
                                    </button>
                                ))}
                                <Button label="+ Add Day" className="p-button-text p-button-sm text-[#0052cc] font-bold w-full justify-start mt-2" />
                            </div>
                        </div>

                        {/* Activities List */}
                        <div className="col-span-7">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-lg font-black">Sunday, March 24: Arrival & Arashiyama</h3>
                                <Badge value="CONFIRMED" className="bg-[#dcfce7] text-[#166534] font-black text-[10px] border-none" />
                            </div>

                            <div className="space-y-6">
                                {activities.map((activity, index) => (
                                    <div key={activity.id}>
                                        {activity.type === 'transfer' ? (
                                            <div className="bg-[#eff4ff] border border-[#d1e8ff] rounded-2xl p-4 flex items-center justify-between">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#0052cc]">
                                                        <i className="pi pi-car" />
                                                    </div>
                                                    <div>
                                                        <h4 className="text-sm font-bold">{activity.title}</h4>
                                                        <p className="text-[11px] text-[#74777f]">{activity.description}</p>
                                                    </div>
                                                </div>
                                                <i className="pi pi-sort-alt text-[#74777f] text-xs" />
                                            </div>
                                        ) : (
                                            <div className="flex gap-6 group">
                                                <div className="w-40 h-48 rounded-2xl overflow-hidden shadow-md flex-shrink-0">
                                                    <img src={activity.image} alt={activity.title} className="w-full h-full object-cover" />
                                                </div>
                                                <div className="flex-1 bg-white p-6 rounded-2xl shadow-sm border border-transparent hover:border-[#cbdbf5] transition-all relative">
                                                    <div className="flex justify-between items-start mb-2">
                                                        <div className="text-[#0052cc] text-xs font-bold tracking-tight">
                                                            {activity.timeStart} — {activity.timeEnd}
                                                        </div>
                                                        <div className="text-sm font-black text-[#1a1c1e]">{activity.cost}</div>
                                                    </div>

                                                    {activity.status && (
                                                        <Badge
                                                            value={activity.status}
                                                            className={`absolute top-6 right-20 text-[8px] font-black border-none px-2 py-0.5 rounded ${activity.status === 'RESERVED' ? 'bg-[#d1e8ff] text-[#001d4a]' : 'bg-[#fee2e2] text-[#991b1b]'
                                                                }`}
                                                        />
                                                    )}

                                                    <h4 className="text-lg font-black mb-2">{activity.title}</h4>
                                                    <p className="text-xs text-[#74777f] leading-relaxed mb-4">{activity.description}</p>

                                                    <div className="flex items-center gap-6 mt-auto">
                                                        <div className="flex items-center gap-2 text-[10px] text-[#74777f]">
                                                            <i className="pi pi-map-marker text-[8px]" />
                                                            {activity.location}
                                                        </div>
                                                        <div className="flex items-center gap-2 text-[10px] text-[#74777f]">
                                                            <i className="pi pi-info-circle text-[8px]" />
                                                            {activity.distance}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Sidebar Widgets */}
                        <div className="col-span-3 space-y-6">
                            {/* Map Card */}
                            <Card className="p-0 overflow-hidden rounded-2xl shadow-sm border-none bg-white">
                                <div className="h-48 bg-[#f1f5f9] relative">
                                    {/* Mock Map Image */}
                                    <img src="" alt="Map" className="w-full h-full object-cover grayscale opacity-50" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Button label="Open Active Map" icon="pi pi-map" className="bg-[#0052cc] border-none text-[10px] font-bold px-4 h-8 rounded-lg shadow-xl" />
                                    </div>
                                </div>
                                <div className="p-4">
                                    <span className="text-[10px] font-bold text-[#74777f] uppercase tracking-wider block mb-1">Current Location</span>
                                    <p className="text-xs font-bold">Ukyo Ward, Kyoto, Japan</p>
                                </div>
                            </Card>

                            {/* Spending Categories */}
                            <Card title={<span className="text-xs font-bold text-[#74777f] uppercase tracking-wider">Category Spending</span>} className="rounded-2xl shadow-sm border-none bg-white">
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center text-xs">
                                        <span className="text-[#74777f]">Accommodation</span>
                                        <span className="font-bold">$1,800</span>
                                    </div>
                                    <div className="flex justify-between items-center text-xs">
                                        <span className="text-[#74777f]">Food & Dining</span>
                                        <span className="font-bold">$640</span>
                                    </div>
                                    <div className="flex justify-between items-center text-xs">
                                        <span className="text-[#74777f]">Transport</span>
                                        <span className="font-bold">$420</span>
                                    </div>
                                    <Button label="View Detailed Reports" className="p-button-text p-button-sm w-full text-[10px] font-bold text-[#0052cc] border-t border-[#cbdbf5]/30 pt-4 mt-2" />
                                </div>
                            </Card>

                            {/* Travel Notes */}
                            <Card title={<div className="flex items-center gap-2 text-xs font-bold text-[#0052cc]"><i className="pi pi-pencil text-[10px]" /> Travel Notes</div>} className="rounded-2xl shadow-sm border-none bg-[#eff4ff]">
                                <ul className="space-y-3 list-disc pl-4 text-[10px] text-[#44474e] font-medium">
                                    <li>Pick up JR Pass at the airport kiosk (Counter A).</li>
                                    <li>Pocket Wi-Fi reservation: #99201-B.</li>
                                </ul>
                                <Button label="+ ADD NOTE" className="p-button-text p-button-sm text-[8px] font-black text-[#0052cc] p-0 mt-4" />
                            </Card>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Trip;