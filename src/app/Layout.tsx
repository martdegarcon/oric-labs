import { Outlet } from "react-router-dom";
import { Footer, Header } from "widgets/index";

const Layout = () => {
    return (
        <div className="relative min-h-screen flex flex-col overflow-x-hidden">
            <Header className="absolute  top-0 left-0 w-full z-50" />
            <main className="flex-grow w-full">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout