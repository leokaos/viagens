import { FaSpinner } from "react-icons/fa";

const Loader = () => {
    return (
        <div className="flex items-center justify-center py-4" >
            <FaSpinner className="animate-spin text-[#2563eb] text-2xl" />
        </div>
    )
};

export default Loader;