
import { FC } from "react";
interface Props {
    children: React.ReactNode;
    style?: React.CSSProperties;
    margin?: boolean;
}

const MainHeader: FC<Props> = ({ children, style, margin }) => {
    let defaultStyle = "text-2xl text-violet-300";
    if (margin) defaultStyle += " mt-10";
    return (
        <h1 className={defaultStyle}>
            {children}
        </h1>
    )
}

export default MainHeader;