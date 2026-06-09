import { useLocation } from "react-router-dom";


const Settings = () => {

    const location = useLocation();
    console.info(location);

    return (
        <div>Settings</div>
    );
};

export default Settings;