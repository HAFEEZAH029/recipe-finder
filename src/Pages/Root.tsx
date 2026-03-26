import { Outlet } from "react-router-dom";
import MainNavigation from "../Components/MainNavigation";
import Footer from "../Components/Footer";

export default function Root() {
    return (
        <>
            <MainNavigation />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}