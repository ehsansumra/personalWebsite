import NavBar from "./nav";
import { FC } from "react";

interface Props {
    children: React.ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
    return (
        <>
            <NavBar />
            <main> {children} </main>
        </>

    )
}

export default Layout;