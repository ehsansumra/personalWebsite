import NavBar from "./nav";
import { FC } from "react";
import style from '../styles/Main.module.css'
interface Props {
    children: React.ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
    return (
        <div>
            <NavBar />
            <main className={style.pattern}> {children} </main>
        </div>

    )
}

export default Layout;