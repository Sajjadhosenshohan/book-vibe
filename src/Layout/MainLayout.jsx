import { Outlet } from "react-router-dom";
import Nav from "../Pages/Nav";


const MainLayout = () => {
    
    return (
        <div className="max-w-[1170px] mx-auto">
            
            <Nav></Nav>
            <div className="mt-10 p-0">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;