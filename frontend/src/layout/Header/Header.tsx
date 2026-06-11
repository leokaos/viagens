import { Avatar } from "primereact/avatar";
import { InputText } from "primereact/inputtext";
import { useContextUser } from "../../context/UserContext";
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';

const Header = () => {

    const user = useContextUser();

    return (
        <>
            <IconField iconPosition="left" className="w-96">
                <InputIcon className="pi pi-search"> </InputIcon>
                <InputText placeholder="Search destinations..." className="w-full p-inputtext-sm rounded-lg bg-[#f8f9ff] border-none focus:ring-2 focus:ring-[#2563eb]" />
            </IconField>
            <div className="flex items-center gap-6">
                <div className="flex items-center gap-4 text-[#44474e]">
                    <i className="pi pi-bell text-xl cursor-pointer hover:text-[#2563eb] transition-colors" />
                    <i className="pi pi-cog text-xl cursor-pointer hover:text-[#2563eb] transition-colors" />
                    {
                        user && <Avatar image={user.avatar} shape="circle" size="large" />
                    }
                </div>
            </div>
        </>
    )

}

export default Header;