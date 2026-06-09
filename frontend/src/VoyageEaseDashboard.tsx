import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { ProgressBar } from 'primereact/progressbar';
import { Checkbox } from 'primereact/checkbox';
import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';

// Types for TypeScript safety
interface ChecklistItem {
    id: number;
    label: string;
    completed: boolean;
}

interface Stat {
    label: string;
    value: string;
    subtext?: string;
    milestone?: string;
    status?: string;
    icon: string;
    color: string;
}

interface Trip {
    id: number;
    dest: string;
    dates: string;
    desc: string;
    progress: number;
    spent: string;
    total: string;
    status: string;
    image: string;
}

const VoyageEaseDashboard: React.FC = () => {
    const [checklistItems, setChecklistItems] = useState<ChecklistItem[]>([
        { id: 1, label: 'Confirm flight to Tokyo', completed: true },
        { id: 2, label: 'Renew Passport', completed: true },
        { id: 3, label: 'Book Kyoto Airbnb', completed: false }
    ]);

    const onChecklistChange = (id: number) => {
        setChecklistItems(prev => prev.map(item => 
            item.id === id ? { ...item, completed: !item.completed } : item
        ));
    };

    const stats: Stat[] = [
        { label: 'DAYS UNTIL KYOTO', value: '12', milestone: 'NEXT MILESTONE', icon: 'pi pi-calendar', color: 'border-blue-500' },
        { label: 'TOTAL BUDGET USED', value: '$3,240', subtext: '/ $5k', status: 'ON TRACK', icon: 'pi pi-wallet', color: 'border-green-500' },
        { label: 'COUNTRIES VISITED', value: '14', status: 'EXPLORER', icon: 'pi pi-globe', color: 'border-orange-500' }
    ];

    const trips: Trip[] = [
        {
            id: 1,
            dest: 'Kyoto, Japan',
            dates: 'Oct 12 - 20',
            desc: 'Autumn Zen Expedition',
            progress: 48,
            spent: '$1,200',
            total: '$2,500',
            status: 'CONFIRMED',
            image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800'
        },
        {
            id: 2,
            dest: 'London, UK',
            dates: 'Dec 05 - 12',
            desc: 'Winter Business & Leisure',
            progress: 21,
            spent: '$850',
            total: '$4,000',
            status: 'PLANNING',
            image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=800'
        }
    ];

    return (
        <div className="flex min-h-screen bg-[#f8f9ff] font-sans text-[#1a1c1e]">
            {/* Side Navigation */}
            <aside className="w-72 bg-[#eff4ff] border-r border-[#cbdbf5]/50 flex flex-col sticky top-0 h-screen z-50">
                <div className="p-8">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#2563eb] rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                            <i className="pi pi-send text-white text-xl" />
                        </div>
                        <h1 className="text-2xl font-black text-[#004299] tracking-tighter">VoyageEase</h1>
                    </div>
                </div>

                <nav className="flex-1 px-4 space-y-2 mt-4">
                    <Button label="Dashboard" icon="pi pi-th-large" className="w-full justify-start gap-4 p-4 bg-[#d7e2ff] text-[#001d4a] rounded-2xl font-bold border-none transition-all" />
                    <Button label="My Trips" icon="pi pi-map" className="w-full justify-start gap-4 p-4 p-button-text text-[#44474e] rounded-2xl font-semibold hover:bg-[#d7e2ff]/50 transition-all" />
                    <Button label="Checklists" icon="pi pi-list" className="w-full justify-start gap-4 p-4 p-button-text text-[#44474e] rounded-2xl font-semibold hover:bg-[#d7e2ff]/50 transition-all" />
                    <Button label="Inspiration" icon="pi pi-lightbulb" className="w-full justify-start gap-4 p-4 p-button-text text-[#44474e] rounded-2xl font-semibold hover:bg-[#d7e2ff]/50 transition-all" />
                    <Button label="Settings" icon="pi pi-cog" className="w-full justify-start gap-4 p-4 p-button-text text-[#44474e] rounded-2xl font-semibold hover:bg-[#d7e2ff]/50 transition-all" />
                </nav>
                
                <div className="p-6 border-t border-[#cbdbf5]/50 mt-auto">
                    <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-5 mb-4">
                         <div className="flex items-center gap-4 mb-4">
                            <Avatar image="https://i.pravatar.cc/150?u=alex" shape="circle" size="large" className="border-2 border-white shadow-sm" />
                            <div className="flex flex-col">
                                <span className="text-sm font-black text-[#1a1c1e]">Alex Rivera</span>
                                <span className="text-[10px] text-[#2563eb] font-bold uppercase tracking-widest">Premium Member</span>
                            </div>
                         </div>
                         <Button label="New Trip" icon="pi pi-plus" className="w-full bg-[#2563eb] border-none rounded-xl h-12 font-bold text-white shadow-md hover:bg-[#004299] transition-all" />
                    </div>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col min-w-0">
                {/* Header */}
                <header className="h-20 bg-white border-b border-[#cbdbf5]/30 flex items-center justify-between px-10 sticky top-0 z-40">
                    <div className="p-input-icon-left relative">
                        <i className="pi pi-search absolute left-4 top-1/2 -translate-y-1/2 text-[#74777f]" />
                        <InputText placeholder="Search destinations..." className="w-[450px] h-12 pl-12 rounded-2xl bg-[#f8f9ff] border-none focus:ring-2 focus:ring-[#2563eb]/20 font-medium" />
                    </div>
                    
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-6 text-[#44474e]">
                            <div className="relative cursor-pointer hover:text-[#2563eb] transition-colors">
                                <i className="pi pi-bell text-xl" />
                                <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
                            </div>
                            <i className="pi pi-cog text-xl cursor-pointer hover:text-[#2563eb] transition-colors" />
                            <Avatar image="https://i.pravatar.cc/150?u=alex" shape="circle" size="large" className="border-2 border-[#d7e2ff] cursor-pointer" />
                        </div>
                    </div>
                </header>

                <div className="p-10 max-w-[1600px] w-full mx-auto">
                    {/* Hero Header */}
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-5xl font-extrabold text-[#1a1c1e] tracking-tight">Welcome back, Alex</h2>
                            <p className="text-[#74777f] text-xl mt-3 font-medium">Your next adventure starts in <span className="text-[#2563eb] font-bold">12 days</span>.</p>
                        </div>
                        <Button label="Create New Trip" icon="pi pi-plus-circle" className="p-button-outlined border-2 text-[#2563eb] border-[#2563eb] hover:bg-[#2563eb]/5 rounded-2xl px-8 h-14 font-bold text-lg transition-all" />
                    </div>

                    {/* Stats Summary Row */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        {stats.map((stat, i) => (
                            <Card key={i} className={`border-l-4 ${stat.color} shadow-xl shadow-blue-900/5 border-none bg-white rounded-3xl p-6`}>
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-4 bg-[#f8f9ff] rounded-2xl">
                                        <i className={`${stat.icon} text-2xl text-[#2563eb]`} />
                                    </div>
                                    <Badge value={stat.milestone || stat.status} className={`px-4 py-1.5 rounded-lg font-bold text-[10px] ${stat.status === 'ON TRACK' ? 'bg-[#d1e8ff] text-[#001d4a]' : 'bg-[#ffe082] text-[#261900]'}`} />
                                </div>
                                <div className="text-5xl font-black text-[#1a1c1e] mb-2 tracking-tighter">
                                    {stat.value}
                                    <span className="text-xl text-[#74777f] font-bold ml-2">{stat.subtext}</span>
                                </div>
                                <div className="text-[11px] font-black text-[#74777f] uppercase tracking-[0.25em]">{stat.label}</div>
                            </Card>
                        ))}
                    </div>

                    <div className="grid grid-cols-12 gap-10">
                        {/* LEFT COLUMN: Upcoming Trips */}
                        <div className="col-span-12 xl:col-span-8">
                            <div className="flex justify-between items-center mb-8 w-full">
                                <h3 className="text-2xl font-bold text-[#1a1c1e]">Upcoming Trips</h3>
                                <Button label="View all trips" icon="pi pi-chevron-right" iconPos="right" className="p-button-text text-[#2563eb] font-bold p-0 text-base hover:underline" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {trips.map(trip => (
                                    <Card key={trip.id} className="p-0 overflow-hidden border-none shadow-xl shadow-blue-900/5 bg-white rounded-[2.5rem] group cursor-pointer transition-all hover:shadow-2xl">
                                        <div className="relative h-64 overflow-hidden">
                                            <img src={trip.image} alt={trip.dest} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                            <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-5 py-2 rounded-2xl text-[13px] font-black shadow-lg text-[#1a1c1e]">
                                                {trip.dates}
                                            </div>
                                        </div>
                                        <div className="p-8">
                                            <div className="flex justify-between items-start mb-6">
                                                <div>
                                                    <h4 className="font-bold text-2xl text-[#1a1c1e] mb-1.5">{trip.dest}</h4>
                                                    <p className="text-sm text-[#74777f] font-semibold">{trip.desc}</p>
                                                </div>
                                                <Badge value={trip.status} className={`px-4 py-1.5 rounded-full font-bold text-[10px] tracking-wider ${trip.status === 'CONFIRMED' ? 'bg-[#d1e8ff] text-[#001d4a]' : 'bg-[#ffe082] text-[#261900]'}`} />
                                            </div>
                                            <div className="mt-8 pt-6 border-t border-[#cbdbf5]/30">
                                                <div className="flex justify-between text-[11px] mb-4">
                                                    <span className="text-[#74777f] font-black uppercase tracking-[0.15em]">Budget Progress</span>
                                                    <span className="font-black text-[#2563eb] tracking-tight">{trip.spent} <span className="text-[#74777f]/50">/</span> {trip.total}</span>
                                                </div>
                                                <ProgressBar value={trip.progress} showValue={false} style={{ height: '10px' }} className="rounded-full bg-[#eff4ff]" color="#2563eb" />
                                            </div>
                                        </div>
                                    </Card>
                                ))}
                                
                                {/* Explore CTA Card */}
                                <div className="bg-[#0052cc] rounded-[2.5rem] p-10 flex flex-col items-center justify-center text-center text-white shadow-2xl relative overflow-hidden group">
                                    <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
                                    <div className="w-20 h-20 bg-white/10 rounded-[1.75rem] flex items-center justify-center mb-8 rotate-6 backdrop-blur-md border border-white/10">
                                        <i className="pi pi-compass text-4xl" />
                                    </div>
                                    <h4 className="text-2xl font-bold mb-3 tracking-tight">Where to next?</h4>
                                    <p className="text-blue-100/60 text-sm mb-10 leading-relaxed max-w-[220px]">Discover trending destinations tailored for your travel style and budget.</p>
                                    <Button label="Explore Destinations" className="bg-white text-[#0052cc] border-none px-8 h-12 font-black rounded-2xl hover:shadow-lg transition-all active:scale-95 text-base" />
                                </div>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: Search & Checklist */}
                        <div className="col-span-12 xl:col-span-4 space-y-10">
                            <Card className="shadow-xl shadow-blue-900/5 border-none bg-white rounded-[2.5rem] p-10">
                                <h3 className="text-2xl font-bold text-[#1a1c1e] mb-8">Quick Search</h3>
                                <div className="relative mb-8">
                                    <i className="pi pi-map-marker absolute left-5 top-1/2 -translate-y-1/2 text-[#2563eb] text-xl" />
                                    <InputText placeholder="Find flights, hotels, or cities..." className="w-full h-14 pl-14 bg-[#f8f9ff] border-none rounded-2xl text-base font-medium placeholder:text-[#74777f]/50" />
                                </div>
                                <div className="flex flex-wrap gap-2.5">
                                    {['Paris', 'Bali', 'Swiss Alps', 'New York', 'Tokyo'].map(city => (
                                        <Button key={city} label={city} className="p-button-outlined border-[#cbdbf5] text-[#44474e] text-xs rounded-full px-6 py-2.5 hover:bg-[#2563eb] hover:text-white hover:border-[#2563eb] transition-all font-bold" />
                                    ))}
                                </div>
                            </Card>

                            <Card className="shadow-xl shadow-blue-900/5 border-none bg-white rounded-[2.5rem] p-10">
                                <div className="flex justify-between items-center mb-8">
                                    <span className="text-[11px] font-black text-[#74777f] tracking-[0.25em] uppercase">Travel Checklist</span>
                                    <Button label="+ NEW" className="p-button-text p-0 font-extrabold text-[#2563eb] text-[11px] hover:underline" />
                                </div>
                                <div className="space-y-5">
                                    {checklistItems.map(item => (
                                        <div key={item.id} className="flex items-center gap-4 group">
                                            <Checkbox inputId={`item-${item.id}`} checked={item.completed} onChange={() => onChecklistChange(item.id)} className="p-checkbox-lg" />
                                            <label htmlFor={`item-${item.id}`} className={`text-base cursor-pointer transition-all ${item.completed ? 'line-through text-[#c4c6cf] font-medium' : 'text-[#1a1c1e] font-bold'}`}>
                                                {item.label}
                                            </label>
                                        </div>
                                    ))}
                                    <Button label="+ Add Checklist Task" className="p-button-text h-14 w-full border-dashed border-2 border-[#cbdbf5] mt-4 text-[#74777f] rounded-2xl hover:bg-[#f8f9ff] hover:border-[#2563eb]/30 transition-all font-bold text-sm" />
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default VoyageEaseDashboard;