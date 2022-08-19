import NavBar from "./nav";
import { FC } from "react";
interface Props {
    children: React.ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
    return (
        <div>
            <NavBar />
            <main > {children} </main>
        </div>

    )
}

export default Layout;